<!-- .slide: data-background="black" -->
## Seemingly Seamless
### How We Improved the Learner Experience and Made Our Lives Easier

with **Roman Edirisinghe** and **Justin Gagne**

`Open edX 2025`

Notes:

Thank you for joining us for our case study talk, Seemingly Seamless: How We Improved the Learner Experience and Made Our Lives Easier.

I’m Roman Edirisinghe, Director of Technology. And I’m Justin Gagne, Design Lead.

------

## Why Are We Here?

- We’re here to talk about customizing Open edX.
- We will take you through our history with the platform, and show you where we ended up.
- Along the way, we ran into many pitfalls, least of which was our desire for maximum customization.

Notes:


------

## What We'll Cover
*(Not necessarily in order of appearance.)*

- We customized Open edX for a unified, branded experience.
- Our design shaped our technical choices.
- We improved the student experience.
- We overcame styling, asset, and content challenges.
- We’ll demonstrate our approach to customization.


Notes:
- We unified the course catalog and login flow.
- We dealt with MFE issues, weak docs, and tricky integrations.
- We’ll show our YAML/JSON setup and theme customizations.

---

## 👋 We’re Gymnasium

![Gymnasium homepage, June 2025.](img/gym-homepage-06-2025-1920w.png)

Notes:

Bonjour, Ahoj, Hello — we're Gymnasium — Aquent’s free learning platform.

Together, we built Gymnasium — it’s marketing site and Open edX learner experience.


---

## About Gymnasium

We offer free online courses and tutorials on design, development, UX, prototyping, accessibility, and career skills.

Since 2013, we’ve reached over 160,000 students from more than 200 countries and regions, and issued over 20,000 credentials.<!-- .element: class="fragment" data-fragment-index="1" -->

For many students, these credentials — certificates and badges — significantly increase their chances of landing a job.<!-- .element: class="fragment" data-fragment-index="2" -->

Notes:
A little bit more about Gymnasium...

We offer free online courses and tutorials on design, development, UX, prototyping, accessibility, and career skills.

Since 2013:
- 160,000 students
- 200 countries and regions
- 20,000 credentials

---

## New Skills

![LinkedIn Gymnasium course certificate completion show-off.](img/student-certificate-1920w.png)

Notes:
Our students frequently share their achievements on LinkedIn, showcasing the skills they’ve built through Gymnasium.

---


## Empowerment

![Intern empowerment through Gymnasium.](img/student-certificate-detail-1920w.png)

Notes:

New skills often lead to empowerment. Seeing an intern like Salma in Egypt upskilling is just one of over 20,000 stories that make free online learning meaningful — thanks to Gymnasium and made possible by our parent company, Aquent. Congrats to Salma!


---

## Course Offerings: 2015

- 5 Full Courses
- 3 Short Courses

Notes:
When we lauched on open edx in 2015, we started with 5 full courses and three short courses.


------

## Screencap: March 2016<!-- .element: class="hide" -->

![Gymnasium catalog, March 2016.](img/gym-catalog-detail-2016-1920w.png)

Notes: a sample of Gymnasium a decade ago.

---

## Course Offerings: 2025

- 10 Full Courses (6 live, 4 retired)
- 19 Short Courses (15 live, 4 retired)
- 61 Tutorials (60 live, 1 retired)
- 1 Workshop (2024 pilot with a small cohort in real-time)

Notes:
Since 2015, Gymnasium’s course catalog has expanded, not just in quantity, but also in topic and format. Retired courses remain accessible to learners, while new formats like our 5-minute tutorials and the 2024 live format portfolio workshop pilot helped meet diverse learning needs.


------

## Screencap: June 2025<!-- .element: class="hide" -->

![Gymnasium catalog, June 2025.](img/gym-courses-detail-2025-1920w.png)

Notes:
- Here is what our course catalog looks like now.
- Our design language hasn't changed much, but it has simplified and aged into a fine wine.

---

## Redwoods Image<!-- .element: class="hide" -->

<!-- .slide: data-background="black" data-background-image="https://www.publicdomainpictures.net/pictures/80000/velka/giant-redwood-trees-in-california-1392245948kXD.jpg" class="has-dark-background" -->

Notes:
Our Open edX Journey: Enough about us, let’s talk about Open edX.

---

## Roots to Redwood

- 2013: Initial launch on a custom-built platform
- 2015: Relaunch on Open edX (featured in Open edX Conference talk) <!-- .element: class="fragment" data-fragment-index="2" -->
- 2018: Migration to Hawthorn (and time stood still)<!-- .element: class="fragment" data-fragment-index="3" -->
- 2024: Migration from Hawthorn to Redwood; 10 versions in 10 hours (with a lot planning) <!-- .element: class="fragment" data-fragment-index="4" -->
- 2025: 🔮 🎱 🥠 Twists, turns, and a big reveal… Stick around. 🙏 <!-- .element: class="fragment" data-fragment-index="5" -->

<!-- Demo: if we want to fine tune the animations and text with additional bolding/italics
```
<ul>
  <li class="fragment" data-fragment-index="0">2013: Gymnasium launches on a custom-built platform with one, then two course</li>
  <li class="fragment" data-fragment-index="1">2015: Gymnasium relaunches on Open edX (featured in Open edX Conference talk)</li>
  <li class="fragment" data-fragment-index="2">2018: Migration to Hawthorn; no pop quizzes, just exceptional performance</li>
  <li class="fragment" data-fragment-index="3">2024: Migration from Hawthorn to Redwood; 10 years in 10 hours</li>
  <li class="fragment" data-fragment-index="4">2025: 🔮 🎱 🥠 Twists, turns, and a big reveal… Stick around. 🙏</li>
</ul>

``` -->

Notes:
What started as a custom-built platform grew into something much bigger and better, thanks to Open edX. This brief timeline highlights the key migrations and milestones that shaped Gymnasium — and our approach to design and development along the way.

- 2013: Initial launch on a custom-built platform
- 2015: Relaunch on Open edX (featured in Open edX Conference talk)
    - Talk was entitled "Building the Plane While Flying it"
- 2018: Migration to Hawthorn; no pop quizzes, just exceptional performance
- 2024: Migration from Hawthorn to Redwood; 10 versions in 10 hours
- 2025: 🔮 🎱 🥠 Twists, turns, and a big reveal… Stick around. 🙏



------

### Building the Plane While Flying It

![Screencap of building the plane while flying it video.](img/building-the-plane-speech.png)

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/5DiJ_2Bz2hM?si=7oauqxnLKzUk8317" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

Notes: This talk is a continuation of the previous presentation. All civilization is built on the shoulders of giants.

---

<!-- .slide: data-background="darkslategray" class="r-stack" -->

## Core Curriculum


- CSS<span>: Cascading Style Sheets</span><!-- .element: class="fragment" data-fragment-index="1" -->

- HTML<span>: Hypertext Markup Language</span><!-- .element: class="fragment" data-fragment-index="1" -->

- JS<span>: JavaScript</span> <!-- .element: class="fragment" data-fragment-index="1" -->

Notes:
If you're not familiar with these terms, these are the building blocks of the web. [reveal acronyms]
- CSS paints the web
- HTML provides the framework/skeleton.
- JavaScript creates interactivity.

---

<!-- .slide: data-background="darkslategray" class="r-stack" -->

## Vocabulary

- CMS<span>: Content Management System</span><!-- .element: class="fragment" data-fragment-index="1" -->

- JSON<span>: JavaScript Object Notation</span> <!-- .element: class="fragment" data-fragment-index="1" -->

- LMS<span>: Learning Management System</span> <!-- .element: class="fragment" data-fragment-index="1" -->

- MFE<span>: Micro Front-End</span><!-- .element: class="fragment" data-fragment-index="1" -->

- SSG<span>: Static Site Generator</span><!-- .element: class="fragment" data-fragment-index="1" -->

- YAML<span>: Yet Another Markup Language</span><!-- .element: class="fragment" data-fragment-index="1" -->


<!--- WTF<span>: Welcome to France</span> -->


Notes:
Before we go any further, we need to introduce you to some additional acronyms used throughout this presentation. There will be a pop quiz at the end.

[optional]: Also known as YAML Ain't Markup Language

---
