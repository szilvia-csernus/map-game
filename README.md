# Main title

> Map-based game building on country knowledge.

---

### [View the live project here]()

---
<br>

Amiresponsive image goes here

---
<br>

## CONTENTS

* [User Experience](#user-experience-ux)
  * [Website Owner's Goals](#website-owners-goals)
  * [Website Visitors' Goals](#website-visitors-goals)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)
  * [High Fidelity Prototype](#high-fidelity-prototype)

* [Features](#features)
  * [General Features](#general-features)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment and Local Development](#deployment-and-local-development)
  * [Deployment](#deployment)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)

* [Testing](#testing)

* [Credits](#credits)
  * [Main Images](#main-images)
  * [Icons](#icons)
  * [Other Credits](#other-credits---incorporated-ideas-and-solutions)
  * [Acknowledgements](#acknowledgements)
<br><br>
---
<br>

# User Experience (UX)

## Website Owner's Goals



## Website Visitors' Goals

---
<br>

# Design

Wireframes and designs were created in [Figma](https://www.figma.com/).
<br><br>

## Colour Scheme


![Light mode palette:]()

![Dark mode palette:]()
<br><br>

## Typography

A font pairing website [Typ.io](https://typ.io/lists) helped me make typography choices.
I selected [Nunito](https://fonts.google.com/specimen/Nunito) and [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) from the [Google Fonts](https://fonts.google.com/) library for their simplicity and legibility yet fairly informal feel. To complement these simple styled main fonts, for the feature logo I chose a more decorative typeface, [Bubblegum Sans](https://fonts.google.com/specimen/Bubblegum+Sans).
<br><br>

## Imagery

All the **images** appearing on the site are sourced from [Pexels](https://pexels.com/) or [Unsplash](https://unsplash.com/). All pictures have been converted to `.webp` format to reduce file size and as such, reduce loading time. To further increase performance, more image sizes are available for the browser to load the most appropriate one for any screen resolution. For older browsers that don't recognise `.webp` format, `.png` images were added as backups. This method makes sure that for every device, the best size and resolution will be chosen to achieve the best possible performance.

All **icons** are in .svg format that is lightweight in size, scales perfectly and certain properties can be set programmatically. I needed these properties to make them capable to respond to dark-mode preferences. Some of the icons I drew myself in Figma, others I downloaded from [svgrepo](https://svgrepo.com/). These latter icons are either unlicensed or open-source. All icons were drawn or edited to be uniform in design as well as responsive to dark mode or - as in the case of the rabbit icon - to screen size changes. All icons' colour is set programmatically with CSS.

All references to the images and icons that have been sourced from other sites can be found in the [credits](#credits) section.
<br><br>

## Wireframes

Wireframes were created in [Figma](https://www.figma.com/).

[Live link to wireframe for mobile]()
<br>

![mobile-low-fidelity-design]()
<br>

[Live link to wireframe for desktop]()
<br>

![desktop-low-fidelity-design]()
<br><br>

## High Fidelity Prototype

I created high-fidelity prototypes for both mobile and desktop screens. 

[Live link to HiFi Prototype for mobile]()
<br>

![mobile-high-fidelity-design]()
<br>

[Live link to HiFi Prototype for desktop]()
<br>

![desktop-high-fidelity-design]()

---
<br>

# Features


Dark mode is implemented throughout all pages to satisfy the website owner's UX requirement.
<br><br>

## General Features
<br>

### Header
<br>

The **header** is responsive to all screen sizes. On large screens, it expands horizontally, while on mobile and narrower screens the menu bar is replaced with a `burger` icon. Clicking this icon would make the menu appear as a side bar.

All types of the menu bar have Bootstrap codebase. I styled them in css to achieve the desired look. 

A hover effect gives the user feedback about the menu choices. The logo can be clicked from any pages to lead the user back to the home page.

![header-desktop-light-mode]()
![header-desktop-dark-mode]()
<br><br>

**Header on small screens:**
<br>

![header-mobile-light-mode]()
![header-mobile-dark-mode]()
<br><br>

**Side bars open from the burger menu icon:**
<br>

![sidebar-light-mode]()
![sidebar-dark-mode]()

### Footer
<br>

The **footer** features all contact information as well as links to social media pages. Calls and Emails can be directly initiated by clicking on the links.

![footer-desktop]()
![footer-mobile]()
<br><br>

<br><br>

**Favicons** are also responsive to light / dark mode preferences. I drew the light mode icon myself but used [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/) to transform it into a dark-mode-sensitive favicon.
<br><br>

![favicon-light-mode](assets/images/readme-images/favicon-light-mode.svg)
![favicon-dark-mode](assets/images/readme-images/favicon-dark-mode.svg)
<br><br>

---



## Future Implementations
<br>

<br><br>
---

## Accessibility
<br>

* To aid screen readers: 
  * `Semantic HTML` was used throughout all pages.

  * All images have descriptive `alt` attributes and all other elements that have implied meanings are labelled with `aria-labels`.

  * Current pages and modals are also labelled with the appropriate `aria properties` to help navigation.

* Fonts were chosen to be simple with clean contours to maximize legibility. 

* For font sizes, `rem` was used throughout the site to allow the text to scale according to the users' preferred default font-size.

* All colours were tested beforehand to have sufficient contrast with the help of [Color Palette Contrast Checker](https://color-contrast-checker.deque.com/).
<br><br>

---

# Technologies Used
<br>

## Languages Used
<br>

The site was built with [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [HTML5](https://en.wikipedia.org/wiki/HTML5) and [CSS3](https://en.wikipedia.org/wiki/CSS).
<br><br>

## Frameworks, Libraries & Programs Used
<br>

* [Figma](https://www.figma.com/) 
  - to create the design.

* [Git](https://git-scm.com/) & [Github](https://github.com/) 
  - for version control, safe storage and deployment.

* [Gitpod](https://www.gitpod.io/) alongside with [CodeInstitute's template](https://github.com/Code-Institute-Org/gitpod-full-template) 
  - for the development environment.

* [Google Fonts](https://fonts.google.com/) 
  - to import fonts into the stylesheet.

* [Typ.io](https://typ.io/lists)
  - to make typography choices.

* [Google Dev Tools](https://developer.chrome.com/docs/devtools/) 
  - for testing and troubleshooting.

* [CloudConvert](https://cloudconvert.com/jpg-converter) 
  - to convert images to .webp format.

* [Color Palette Contrast Checker](https://color-contrast-checker.deque.com/)
  - to check colours have sufficient contrast.
  
* [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/) 
  - to generate dark mode responsive favicons.

* [Am I Responsive?](https://ui.dev/amiresponsive) 
  - to create site visuals for responsive design.

* [Gyazo](https://gyazo.com) 
  - for adding .gif file to this README
<br><br>
---

# Deployment and Local Development
<br>

## Deployment
<br>

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Main Branch".
5. The page will automatically refresh.
6. Once the deployment process completed the published site's link will appear after the main title.
<br><br>

## Forking the GitHub Repository
<br>

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.
<br><br>

## Making a Local Clone
<br>

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```
---
<br><br>

# Testing

Please view [TESTING.md](TESTING.md) for more information on testing.

---
<br><br>

# Credits

* Data for capital cities:
https://github.com/mledoze/countries
https://codebeautify.org/online-json-editor/5aa491
https://ctftime.org/writeup/16139

* Flag-icons in svg format in an npm package:
https://www.npmjs.com/package/flag-icons

* Country info (inc. capital) in an npm package:
https://www.npmjs.com/package/world-infohttps://www.npmjs.com/package/world-info

* Clamp() calculator:
https://grizhlie-clamp-calculator.netlify.app/

<br>

## Images
<br>


## Icons
<br>
* Exit icon:
https://www.svgrepo.com/svg/170342/exit-hand-drawn-interface-symbol-variant

* Mute - Sound icons:
https://www.svgrepo.com/svg/441980/mute
https://www.svgrepo.com/svg/442013/sound


<br><br>

## Other credits - incorporated ideas and solutions
<br>
* Adding drop-shadow to svg icons:
https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/
<br><br>

## Content
<br>


* Content for Deployment and Development of this README file was written using [Code Institute's sample README file](https://raw.githubusercontent.com/Code-Institute-Solutions/SampleREADME/master/README.md).
<br><br>

##  Acknowledgements
<br>
I would like to thank the following contributors:

* My mentor [Elaine Broche](https://github.com/elainebroche-dev) for giving useful feedback throughout the development and testing process.



* My friends for taking the time to test my site.

* The Slack Community for continuous support.

<br><br>

##  Disclaimer
<br>

This project was created for Code Institute's web application development course as the Second Milestone Project - Interactive Frontend Development Project - for assessment purposes. 
<br><br>
Not for public use.
<br><br>
Szilvia Csernusne Berczes, Jan 2023.
