## Hi, I'm Roman 🇱🇰 🇷🇺 🇺🇸

Director of Technology <!-- .element: class="fragment" data-fragment-index="1" -->

Notes:
I'm Roman Edirisinghe, and I'm Gymnasium’s director of technology.

------

### since '96 <!-- .element: class="hide" -->

working with the web since 1996

Notes:
I started working on the web in 1996

------

### art background <!-- .element: class="hide" -->

background in art

Notes:
I have a background in art, not computer science

------

### self-taught <!-- .element: class="hide" -->

largely self-taught

Notes:
- Perhaps it's not unusual these days, but I'm largely self taught with regard to the web.

------

### joined team in 2021 <!-- .element: class="hide" -->

joined Gymnasium in 2021

Notes:
- no prior experience with Open edX before 2021, only a little bit of Python
- What ensued was a crash course not just into Open edX, but also into how the Gymnasium team had customized the platform

------

### always a better way <!-- .element: class="hide" -->

there is always a better way

Notes:
- with these things in mind, this could mean there are better ways to do what we did, and we welcome any feedback

---

## Pre-upgrade recap

------

### theme customized <!-- .element: class="hide" -->

theme was heavily customized

Notes:
- Gymnasium's Hawthorn based theme was very customized
- Used a SSG (Jekyll) to include pre-generated HTML fragments within the LMS
- Our marketing site and LMS were effectively one and the same.

------

### pages = extra steps <!-- .element: class="hide" -->

new pages = extra steps

Notes:

- we **needed** our hosting provider to generate new pages

------

### upgrade = challenge <!-- .element: class="hide" -->

upgrading code became a challenge

Notes:
- "Stuck" on Hawthorn since 2020
- We were hampered by the limitations of Open edX. [REVISE]
- [revise] do we use a word other than upgrade/migration to encompass both?

---

## A change of hands 🤝

Notes:
- the relationship with our hosting provider had changed
- they were no longer able to meet our needs.

------

### it's not you, it's me <!-- .element: class="hide" -->

it's not you, it's me

Notes:

------

### but it's actually you <!-- .element: class="hide" -->

<span>(but it's actually you)</span>

Notes:

---

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
