## Steps/Process

Why? Updating styles from one source is much easier/faster than updating it in 8 different places.

1. disable built-in MFE CSS
    - cleanup
2. disable theme CSS
3. use eleventy to deliver CSS to MFEs + theme 

Notes:
Among other thinbgs, our goal was to take advantage of our static site's 2 minute build time. Compare that to 35-45 minutes on average for deploying open edx changes.

---

## Why not use Paragon?

(for the uninitiated, Paragon is Open edX's design system)

- Well, we are (sort of)
    - we still use Paragon's interactivity (the interactive react components)
    - copied core bits of MFE CSS and customized that
    - in some cases, we eliminated it altogether and wrote our own rules
- Path of least resistance
- we already have our own design language
- easier to push ours forward instead of using the styles built into paragon

---

## Achieving Seamlessness

- CSS being served from SSG (eleventy)
- Required disabling default CSS of MFEs. 
- Pitfalls: discovery that some development of MFEs resulted in CSS rules declared 8-10x (link to the issue)

Notes:
Let's talk talk about the steps involved in achieving a consistent visual design.

---

### Disable default CSS <!-- .element: class="hide" -->

Disable default CSS

Notes:
To achieve a consistent aesthetic, and to take advantage of our static site's 2 minute build time, we decided to serve all the CSS from the static site.

---

<!-- .slide: data-background="black" class="" -->

## Truth = YAML + JSON <!-- .element: class="r-fit-text" -->

Notes:
YAML/JSON as a source of truth - showing stages of “the truth”.

Some may ask, why not just write your truth in JSON - the answer:  YAML is much easier to read and write, doesn't require curly braces and quotes everywhere.

The second reason, is the JSON is consumed exclusively by the LMS portion of our setup - the MFEs + the theme

------

## YAML

YAML is the maintainer's source of truth.

<pre class="code-wrapper" data-id="code-animation">
  <code class="language-yml" data-line-numbers data-trim> 
%YAML 1.2
---
YAML: YAML Ain't Markup Language™

What It Is:
  YAML is a human-friendly data serialization
  language for all programming languages.
  </code>
</pre>

Notes:

------

## JSON

JSON is exclusively for consumption by the LMS (MFEs + theme)

Notes:

---

## Custom react components

Notes:
Rather than serve our header, footer, and overrides from different repositories, we created one repo to meet our needs. One repo to rule them all.

------

### One "library"

`gym-frontend-components`

Notes:
One react library handles delivery of...

------

### react header <!-- .element: class="hide" -->

header

Notes: the header...

------

### react footer <!-- .element: class="hide" -->

footer

Notes: the footer...

------

### react 404 <!-- .element: class="hide" -->

404 errors, etc.

Notes: the error pages...

------

### react banner <!-- .element: class="hide" -->

banner

Notes: the site banner...

------

### react overrides <!-- .element: class="hide" -->

overrides to core MFE behaviors

Notes: ...and last but not least, the individual customizations we made to MFEs.
All by consuming our custom JSON at build time.

