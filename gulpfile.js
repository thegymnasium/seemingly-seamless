const fs = require('fs');
const pkg = require('./package.json')
const glob = require('glob')
const yargs = require('yargs')
const through = require('through2');
const qunit = require('node-qunit-puppeteer')

const {rollup} = require('rollup')
const terser = require('@rollup/plugin-terser')
const babel = require('@rollup/plugin-babel').default
const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve').default
const sass = require('sass')

const gulp = require('gulp')
const zip = require('gulp-zip')
const header = require('gulp-header-comment')
const eslint = require('gulp-eslint')
const minify = require('gulp-clean-css')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')

const root = yargs.argv.root || '.'
const port = yargs.argv.port || 8000
const host = yargs.argv.host || 'localhost'

const cssLicense = `
reveal.js ${pkg.version}
${pkg.homepage}
MIT licensed

Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
`;

const jsLicense = `/*!
 * reveal.js ${pkg.version}
 * ${pkg.homepage}
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */\n`;

// Prevents warnings from opening too many test pages
process.setMaxListeners(20);

const babelConfig = {
    babelHelpers: 'bundled',
    ignore: ['node_modules'],
    compact: false,
    extensions: ['.js', '.html'],
    plugins: [
        'transform-html-import-to-string'
    ],
    presets: [[
        '@babel/preset-env',
        {
            corejs: 3,
            useBuiltIns: 'usage',
            modules: false
        }
    ]]
};

// Our ES module bundle only targets newer browsers with
// module support. Browsers are targeted explicitly instead
// of using the "esmodule: true" target since that leads to
// polyfilling older browsers and a larger bundle.
const babelConfigESM = JSON.parse( JSON.stringify( babelConfig ) );
babelConfigESM.presets[0][1].targets = { browsers: [
    'last 2 Chrome versions',
    'last 2 Safari versions',
    'last 2 iOS versions',
    'last 2 Firefox versions',
    'last 2 Edge versions',
] };

let cache = {};

// Creates a bundle with broad browser support, exposed
// as UMD
gulp.task('js-es5', () => {
    return rollup({
        cache: cache.umd,
        input: 'js/index.js',
        plugins: [
            resolve(),
            commonjs(),
            babel( babelConfig ),
            terser()
        ]
    }).then( bundle => {
        cache.umd = bundle.cache;
        return bundle.write({
            name: 'Reveal',
            file: './dist/reveal.js',
            format: 'umd',
            banner: jsLicense,
            sourcemap: true
        });
    });
})

// Creates an ES module bundle
gulp.task('js-es6', () => {
    return rollup({
        cache: cache.esm,
        input: 'js/index.js',
        plugins: [
            resolve(),
            commonjs(),
            babel( babelConfigESM ),
            terser()
        ]
    }).then( bundle => {
        cache.esm = bundle.cache;
        return bundle.write({
            file: './dist/reveal.esm.js',
            format: 'es',
            banner: jsLicense,
            sourcemap: true
        });
    });
})
gulp.task('js', gulp.parallel('js-es5', 'js-es6'));

// Creates a UMD and ES module bundle for each of our
// built-in plugins
gulp.task('plugins', () => {
    return Promise.all([
        { name: 'RevealHighlight', input: './plugin/highlight/plugin.js', output: './plugin/highlight/highlight' },
        { name: 'RevealMarkdown', input: './plugin/markdown/plugin.js', output: './plugin/markdown/markdown' },
        { name: 'RevealSearch', input: './plugin/search/plugin.js', output: './plugin/search/search' },
        { name: 'RevealNotes', input: './plugin/notes/plugin.js', output: './plugin/notes/notes' },
        { name: 'RevealZoom', input: './plugin/zoom/plugin.js', output: './plugin/zoom/zoom' },
        { name: 'RevealMath', input: './plugin/math/plugin.js', output: './plugin/math/math' },
    ].map( plugin => {
        return rollup({
                cache: cache[plugin.input],
                input: plugin.input,
                plugins: [
                    resolve(),
                    commonjs(),
                    babel({
                        ...babelConfig,
                        ignore: [/node_modules\/(?!(highlight\.js|marked)\/).*/],
                    }),
                    terser()
                ]
            }).then( bundle => {
                cache[plugin.input] = bundle.cache;
                bundle.write({
                    file: plugin.output + '.esm.js',
                    name: plugin.name,
                    format: 'es'
                })

                bundle.write({
                    file: plugin.output + '.js',
                    name: plugin.name,
                    format: 'umd'
                })
            });
    } ));
})

// a custom pipeable step to transform Sass to CSS
function compileSass() {
  return through.obj( ( vinylFile, encoding, callback ) => {
    const transformedFile = vinylFile.clone();

    sass.render({
        silenceDeprecations: ['legacy-js-api'],
        data: transformedFile.contents.toString(),
        file: transformedFile.path,
    }, ( err, result ) => {
        if( err ) {
            callback(err);
        }
        else {
            transformedFile.extname = '.css';
            transformedFile.contents = result.css;
            callback( null, transformedFile );
        }
    });
  });
}

gulp.task('css-themes', () => gulp.src(['./css/theme/source/*.{sass,scss}'])
        .pipe(compileSass())
        .pipe(gulp.dest('./dist/theme')))

gulp.task('css-core', () => gulp.src(['css/reveal.scss'])
    .pipe(compileSass())
    .pipe(autoprefixer())
    .pipe(minify({compatibility: 'ie9'}))
    .pipe(header(cssLicense))
    .pipe(gulp.dest('./dist')))

gulp.task('css', gulp.parallel('css-themes', 'css-core'))

gulp.task('qunit', () => {

    let serverConfig = {
        root,
        port: 8009,
        host: 'localhost',
        name: 'test-server'
    }

    let server = connect.server( serverConfig )

    let testFiles = glob.sync('test/*.html' )

    let totalTests = 0;
    let failingTests = 0;

    let tests = Promise.all( testFiles.map( filename => {
        return new Promise( ( resolve, reject ) => {
            qunit.runQunitPuppeteer({
                targetUrl: `http://${serverConfig.host}:${serverConfig.port}/${filename}`,
                timeout: 20000,
                redirectConsole: false,
                puppeteerArgs: ['--allow-file-access-from-files', '--no-sandbox']
            })
                .then(result => {
                    if( result.stats.failed > 0 ) {
                        console.log(`${'!'} ${filename} [${result.stats.passed}/${result.stats.total}] in ${result.stats.runtime}ms`.red);
                        // qunit.printResultSummary(result, console);
                        qunit.printFailedTests(result, console);
                    }
                    else {
                        console.log(`${'✔'} ${filename} [${result.stats.passed}/${result.stats.total}] in ${result.stats.runtime}ms`.green);
                    }

                    totalTests += result.stats.total;
                    failingTests += result.stats.failed;

                    resolve();
                })
                .catch(error => {
                    console.error(error);
                    reject();
                });
        } )
    } ) );

    return new Promise( ( resolve, reject ) => {

        tests.then( () => {
                if( failingTests > 0 ) {
                    reject( new Error(`${failingTests}/${totalTests} tests failed`.red) );
                }
                else {
                    console.log(`${'✔'} Passed ${totalTests} tests`.green.bold);
                    resolve();
                }
            } )
            .catch( () => {
                reject();
            } )
            .finally( () => {
                server.close();
            } );

    } );
} )

gulp.task('eslint', () => gulp.src(['./js/**', 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format()))

gulp.task('test', gulp.series( 'eslint', 'qunit' ))

gulp.task('default', gulp.series(gulp.parallel('js', 'css', 'plugins'), 'test'))

gulp.task('build', gulp.parallel('js', 'css', 'plugins'))

gulp.task('package', gulp.series(async () => {

    let dirs = [
        './index.html',
        './dist/**',
        './plugin/**',
        './*/*.md'
    ];

    if (fs.existsSync('./lib')) dirs.push('./lib/**');
    if (fs.existsSync('./images')) dirs.push('./images/**');
    if (fs.existsSync('./slides')) dirs.push('./slides/**');

    return gulp.src( dirs, { base: './', encoding: false } )
    .pipe(zip('reveal-js-presentation.zip')).pipe(gulp.dest('./'))

}))

gulp.task('reload', () => gulp.src(['index.html'])
    .pipe(connect.reload()));

gulp.task('serve', (done) => {

    connect.server({
        root: root,
        port: port,
        host: host,
        livereload: true
    })

    const slidesRoot = root.endsWith('/') ? root : root + '/'
    gulp.watch([
        slidesRoot + '**/*.html',
        slidesRoot + '**/*.md',
        `!${slidesRoot}**/node_modules/**`, // ignore node_modules
    ], gulp.series('reload'))

    gulp.watch(['js/**'], gulp.series('js', 'reload', 'eslint'))

    gulp.watch(['plugin/**/plugin.js', 'plugin/**/*.html'], gulp.series('plugins', 'reload'))

    gulp.watch([
        'css/theme/source/**/*.{sass,scss}',
        'css/theme/template/*.{sass,scss}',
    ], gulp.series('css-themes', 'reload'))

    gulp.watch([
        'css/*.scss',
        'css/print/*.{sass,scss,css}'
    ], gulp.series('css-core', 'reload'))

    gulp.watch(['test/*.html'], gulp.series('test'))

    done();

})
