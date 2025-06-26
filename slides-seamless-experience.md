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
