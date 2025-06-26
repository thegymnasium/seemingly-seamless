### Core requirements

Notes:
- design leads development
  - eleventy
- rapid deployment
  - eleventy
- login "awareness" on static site
- open edx version upgrade/migration
- achieving a consistent experience (UX/UI)
  - new catalog
    - using static site instead of LMS
    - reference "overloading" hawthorn to customize the catalog
    - choosing to use eleventy to serve course catalog and course about pages instead of LMS
    - user research and prototyped development of a revised catalog
    - using SSG made it easier to develop new features
  - new courseware
    - adding the "how it works" section instead of "overloaded" course updates section serving as syllabus [maybe not necessary]
    - ...
  - header
    - show comparison of original nav vs new
    - show code samples - yaml to json
    - introduce header states (currrent page state, etc)
  - footer
    - design/development worked together
      - hawthorn footer
      - new footer
    - "dumb" footer - no states to the buttons
      - no MFE needed active state of any footer links
  - banner (last thing we show)

------

### rapid deployment <!-- .element: class="hide" -->

rapid deployment

Notes:

------

### login "awareness" <!-- .element: class="hide" -->

login "awareness" on static site

Notes:

------

### version upgrade <!-- .element: class="hide" -->

open edx version upgrade

Notes:
Implied in the upgrade or upgrades is the data migration required

------

### seamless experience <!-- .element: class="hide" -->

achieving a seamless experience

Notes:
- YAML + JSON
- custom react components
- CSS served from static site
