<h1>map it!</h1>

> Interactive game built for the web. Written in HTML, CSS, JavaScript and JQuery, utilising the [Mapbox GL JS API](www.mapbox.com).
---
## [View the live project here](https://szilvia-csernus.github.io/map-game/)
![Landing page](readme-images/amiresponsive.jpeg)

> This project was created for [Code Institute](www.codeintitute.net)'s Web Development Course as the Second Milestone Project. The brief was to build an interactive, front-end project using HTML, CSS and JavaScript, optionally using JQuery and/or any APIs.
<br>

---
<br>

# User Experience (UX)

## Site Owner's Goals

* The game should test the players' knowledge on the world's countries.
* The game should be visually appealing.
* It should give simple, clear instructions.
* The countries should be visually distinguishable.
* It should include animations to raise interest.
* It should be interactive.
* Player should be given feedback about the chosen country.
* High scores should be retained in the browser if settings allow.
* The game should look well and run on a wide range of devices.


## Players' Goals

* The game should be fun to play.
* Countries should be colourful and easy to recognise.
* The rules should be easy to follow.
* It should give feedback about the chosen country.
* It should retain high scores.
* The game should look well and run on a wide range of devices.

---
<br>

# Wireframes

Wireframes were created in [Balsamiq](https://balsamiq.cloud/).
![main screen](readme-images/wireframe-main.jpeg)
![game screens](readme-images/wireframe-game.jpeg)
<br><br>

## Colour Scheme

Seven colours were needed to colour the countries on the map. They were chosen to be vibrant to convey playfulness, yet uniform in tone to have a professional feel.
<br>
Colours for correct and incorrect feedback were chosen for their brightness to raise the player's attention.
<br>

![Colour palette:](readme-images/colour-palette.jpeg)

<br><br>

## Typography

I selected the font named [Nunito](https://fonts.google.com/specimen/Nunito) from the [Google Fonts](https://fonts.google.com/) library for its simplicity and legibility yet fairly informal look.
<br><br>

## Map Style

**Mapbox** allows to custom style its maps in [Mapbox Studio](https://studio.mapbox.com/). I used the freely available 'country-boundaries-v1' tileset and coloured the countries with the chosen colours with the help of the tileset's color-group property. This property makes sure that no adjacent countries will be coloured the same.
<br><br>

## Icons

**Icons** for the exit and the info buttons as well as the checkmark and cross icons were downloaded from [svgrepo](https://svgrepo.com/). Credits to individual icons are given in the [credits](#credits) section. <br>
For **favicons**, I created a small version of the intro image in [Figma](https://www.figma.com/) and used the [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/) to convert it to favicons for all devices.

<br><br>

# Functionality

## Landing Page

When visiting the first time, it takes a while (depending on network speed) to load all source code and tilesets from Mapbox. While waiting for loading, a subtle animation is used to fill the time. Once the map is ready, it appears on the sceen and the game can be started with the `PLAY` button.
<br>
![loading-image](readme-images/loading.jpeg) 
![loaded-page](readme-images/map-it-mobile.jpeg) 
<hr>

## Instructions

The first time a user visits the site, an animation gives brief instructions on how to play the game. Later on, the animation will not show again but the instructions will be available when clicking the question mark icon in the top right corner. In case the user clears up the site's localStorage, the animation will show again as if they were visiting for the first time.
<br>
![instructions](readme-images/insturctions.gif)
<br>
<hr>

## Choosing a region

The first step in the game is to choose which region the player wants to test their knowledge on. Once chosen, an animation will bring the map closer to that region. The region's countries become selectable while all countries outside the region become blurred.<br>
![choose-a-region](readme-images/choose-a-region.jpeg)
![find-the-country](readme-images/find-the-country.jpeg)
<br>
<hr>

## Choosing a country

The player has to select the country that appears in the top. If the selection is correct, the country is coloured green and a green checkmark signals that the score has been registered. In case the selection is incorrect, the country becomes red and an animation flies the map to the correct country. This feedback allows the player to improve their knowledge.
<br>
![correct-country](readme-images/correct-country.gif)
![incorrect-country](readme-images/incorrect-country.gif)
<br><br>
<hr>

## Scores

After 10 countries were chosen, the screen displays the score. For the first time, this is all the feedback the user is given but from the second round on, a `View your best scores here` button appears which can be clicked to display the user's best scores. The scores are stored in localStorage, so if the localStorage gets cleared, the highest scores will be lost.
<br>

![your-score](readme-images/your-score.jpeg)
![best-scores](readme-images/best-scores.jpeg)

---
<br>

## Future Implementations
<br>
The project could be converted into a React project, which could increase it's performance.
<br>
There are many options to widen the game's functionality. Capital cities, flags and more regions - Australia, Oceania and Anctarctica could be included as well as small islands and micro countries. A new option with the US states could be part of the too.

<br>
---

## Accessibility
<br>

* Fonts were chosen to have clean contours and simple design to maximize legibility. 
* For font sizes, `rem` was used throughout the site to allow the text to scale according to the users' preferred default font-size.
* The map can be zoomed in and out when the player has to find a country to cater for easier access.
* Icons are labelled with `aria-labels`.
* Chrome Dev Tools' Lighthouse score is 100% for accessibility for both mobile and desktop devices. 

* [Mapbox Studio](https://studio.mapbox.com/) allows to test map designs for 8 types of visual impairments. This is how the map looks across all tests:
<br>

![visual-impairment-1](readme-images/visual-impairment-1.jpeg)
![visual-impairment-2](readme-images/visual-impairment-2.jpeg)
![visual-impairment-3](readme-images/visual-impairment-3.jpeg)
![visual-impairment-4](readme-images/visual-impairment-4.jpeg)
![visual-impairment-5](readme-images/visual-impairment-5.jpeg)
![visual-impairment-6](readme-images/visual-impairment-6.jpeg)
![visual-impairment-7](readme-images/visual-impairment-7.jpeg)
![visual-impairment-8](readme-images/visual-impairment-8.jpeg)


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

* [Mapbox GL JS API](www.mapbox.com)  - used for every map-based functionality.

* [Mapbox Studio](https://studio.mapbox.com/)  - to create map design.

* [JQuery](https://jquery.com/)  - to write shorter code.

* [Count API](https://countapi.xyz/)  - to keep track of the number of page loads.

* [EmailJS](https://www.emailjs.com/)  - to send updates about website usage.

* [Google Fonts](https://fonts.google.com/)  - for texts.

* [Balsamiq](https://balsamiq.cloud/)  - to create wireframes.

* [Figma](https://www.figma.com/)  - to create colour palette and image for favicon.

* [RealFaviconGenerator](https://realfavicongenerator.net/svg-favicon/)  - to generate dark mode responsive favicons.

* [Am I Responsive?](https://ui.dev/amiresponsive)  - to create site visuals for responsive design.

* [Gyazo](https://gyazo.com)  - for adding .gif files to this README file.

* [Git](https://git-scm.com/) & [Github](https://github.com/)  - for version control, safe storage and deployment.

* [Gitpod](https://www.gitpod.io/) alongside with [CodeInstitute's template](https://github.com/Code-Institute-Org/gitpod-full-template)  - for the development environment.

* [Google Dev Tools](https://developer.chrome.com/docs/devtools/)  - for testing and troubleshooting.

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

Refer to [TESTING.md](TESTING.md) for information on testing.

---
<br><br>

# Credits

* Data for country centroids for displaying the names of the countries:
https://github.com/gavinr/world-countries-centroids/blob/master/dist/countries.geojson - MIT Licence, Copyright (c) 2021 Gavin Rehkemper

* Country info including region info:
https://github.com/annexare/Countries/blob/master/data/countries.json - MIT License, Copyright (c) 2014 Annexare Studio

* Geolocation coordinate finder:
http://bboxfinder.com/

* Clamp() calculator for responsive font sizes:
https://grizhlie-clamp-calculator.netlify.app/

<br>

## Icons
<br>

* Exit icon:
https://www.svgrepo.com/svg/170342/exit-hand-drawn-interface-symbol-variant

* Check icon:
https://www.svgrepo.com/svg/404945/check-mark

* Cross icon:
https://www.svgrepo.com/svg/470906/times

* Question mark icon:
https://www.svgrepo.com/svg/491697/question-circle

<br><br>

## Other credits - incorporated ideas and solutions
<br>

* Base code for rotating globe is adapted from [one of Mapbox's example codes](https://docs.mapbox.com/mapbox-gl-js/example/globe-spin/),
which I also reference in the code.

* Base code for hovering effect is adapted from [one of Mapbox's example codes](https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/),
which I also reference in the code.

* Adding drop-shadow filter to svg icons:
https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/
<br><br>

## Content
<br>

* Content for the Deployment and Development section of this README file was written using [Code Institute's sample README file](https://raw.githubusercontent.com/Code-Institute-Solutions/SampleREADME/master/README.md).
<br><br>

##  Acknowledgements
<br>
I would like to thank the following contributors:

* My mentor [Elaine Broche](https://github.com/elainebroche-dev) for giving useful feedback throughout the development and testing process.

* My family and friends for taking the time to test the game.

* The Slack Community for continuous support.

<br><br>

##  Disclaimer
<br>

This project was created for Code Institute's web application development course as the Second Milestone Project - Interactive Frontend Development Project - for assessment purposes. 
<br><br>
Not for public use.
<br><br>
&copy; All rights reserved. Szilvia Csernusne Berczes, March 2023.
