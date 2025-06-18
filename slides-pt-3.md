## Introduction

Roman Edirisinghe, Director of Technology

- working with the web since 1996
- background in art
- largely self-taught


Note:
I'm Roman Edirisinghe, the hat I wear  Gymnasium’s director of technology. I joined Gymnasium in 2021, and had no prior experience with Open edX.


---


## Beginnings
Vanilla Open edX vs Gymnasium's Open edX

- Gymnasium's Hawthorn theme was heavily customized
- Upgrading became a challenge
- "Stuck" on Hawthorn since 2020
- adding new pages required intervention of hosting provider


Note:
What ensued was a crash course not just into Open edX, but also into how the Gymnasium team had customized the platform.

---

## Before

Gymnasium's Hawthorn-based custom theme:
- Used a SSG (Jekyll) to include pre-generated HTML fragments within the LMS
- Our marketing site and LMS were effectively one and the same.
- But we still **needed** our hosting provider to generate new pages.
- We were hampered by the limitations of Open edX. [REVISE]

Note:

---

## Hosting Woes

Sometimes, partnerships have to change.

- loveless marriage <!-- .element: class="fragment" data-fragment-index="1" -->
- it's not you, it's me <!-- .element: class="fragment" data-fragment-index="2" -->
- (but it's actually you) <!-- .element: class="fragment" data-fragment-index="3" -->


Notes:
We realized the relationship with our hosting provider was not what it used to be. Our hosting provider had changed hands and it became apparent that they were no longer able to meet our needs.

---


## Change is Inevitable

- Research new hosting providers
- Discovery that an upgrade is necessary
- We knew we were on a sinking ship
- Urgency was paramount
- Change the overall architecture (frontend + LMS)


Note: 



---


## Post Hawthorn Open edX (Olive...Palm)

- MFEs
- Noticed MFEs weren't built consistently
- Confusing implementation - some parts of LMS were the theme, others were MFEs.


Note:
Started learning the MFEs in 2023/2024 etc.


---


## Redwood Upgrade

- Upgrade from hawthorn (2018) to redwood (2024)
- Our very talented collaborator Amir Tadrisi wrote some fancy scripts to automatically migrate data from version to version.

Note:
The next slide shows how many versions Amir needed to process.

---

## Versions
hawthorn > ironwood > juniper > koa > lilac > maple > olive > palm > quince > redwood

Notes: 

---

## Pain = Healing
The upgrade was huge pain point, but Amir's help made this step so much easier.

10 versions in 10 hours, with 10 days of prep & planning.

Note: 

---

## Architectural Goal Flowchart

![Screenshot of Flowchart](img/gymnasium-flowchart.png)


Note: 


---



## Site Build Process Overview

- Process is streamlined and reduces the dependency/intervention from the hosting provider. 
- We make changes in the SSG, deploy that (2-5 minutes)
- Trigger a rebuild of the open edx systems (35-45 minutes)


Note:
We are the ideal client for hosting providers - the only intervention hosting providers needed was to handle emergencies.


---


<!-- .slide: data-background="purple" class="" -->

## Truth = YAML + JSON <!-- .element: class="r-fit-text" -->

Note:
YAML/JSON as a source of truth - showing stages of “the truth”.


---

<!-- .slide: data-background="blue" class="" -->
## Navigation

Notes: Here's an example of the YAML that governs our navigation.

------

## Navigation YAML

```yaml
nav:
    main:
      - label: Courses
        href: GYM_ROOT_URL/courses/
      - label: Jobs
        href: GYM_ROOT_URL/jobs/
      - label: About
        href: GYM_ROOT_URL/about/
```

Note:



------


## Navigation JSON

```json
"nav": {
  "main": [
    {
      "label": "Courses",
      "href": "https://thegymnasium.com/courses/"
    },
    {
      "label": "Jobs",
      "href": "https://thegymnasium.com/jobs/"
    },
    {
      "label": "About",
      "href": "https://thegymnasium.com/about/"
    }
  ]
```

Note:



------

## Example 2: Navigation (Public)

(add a screenshot of the courses subnav)
![Screenshot of main navigation](img/nav-main-1.png)<!-- .element: class="r-fit-text" -->


Note: 



------

## Rendered Navigation (Logged-In)

![Screenshot of main navigation](img/nav-main-2.png)<!-- .element: class="r-fit-text" -->


Note: 




---

<!-- .slide: data-background="green" class="" -->

## Example: meta data <!-- .element: class="r-fit-text" -->

Note:



------



## YAML (Meta)

![Screenshot of YAML](img/yaml-config-main-1.png)<!-- .element: class="r-fit-text" -->


Note:
This is what our YAML looks like.


------


## JSON (Meta)

![Screenshot of JSON](img/json-meta.png)<!-- .element: class="r-fit-text" -->


Note: 
The JSON gets generated from the YAML.

------

## HTML (Meta)

![Screenshot of HTML meta section](img/html-meta.png)<!-- .element: class="r-fit-text" -->


Note: 
And the resulting rendered HTML.


---


## TODO: show more Rendered Components

![Image of ](img/)

Note:
Screencaps of rendered pages:
- Unified navigation
- Unified footer
- 404 page
- Banner


---


## CSS (SCSS)

- CSS being served from SSG (eleventy)
- Required disabling default CSS of MFEs. 
- Pitfalls: discovery that some development of MFEs resulted in CSS rules declared 8-10x (link to the issue)


Note:



---

## MFEs: Gymnasium Frontend Components

`gym-frontend-components` serves up the following react components:

- header
- footer
- custom 404 page
- banner
- overrides to core MFE behaviors

Note:
Rather than serve our header, footer, and overrides from different repositories, we created one repo to meet our needs. One repo to rule them all.

