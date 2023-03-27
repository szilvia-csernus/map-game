# Code validation


| JSHint Result | Warnings |
| :--- | :--- | 
| [index.js file validation](testing-images/jshint-index-js.jpeg) | ES7+ features were flagged due to testing code against ES6. |
| [game.js file validation](testing-images/jshint-game-js.jpeg) |  No warnings. |
| [round.js file validation](testing-images/jshint-round-js.jpeg)| No warnings. |
| [questions.js file validation](testing-images/jshint-questions-js.jpeg)| ES7+ features were flagged due to testing code against ES6. |
| [firewall.js file validation](testing-images/jshint-firewall-js.jpeg)| emailjs variable is declared in EmailJS API. |
| [high-scores.js file validation](testing-images/jshint-high-scores-js.jpeg)| No warnings. |
| [how-to-play.js file validation](testing-images/jshint-how-to-play-js.jpeg)| No warnings. |
| [layers.js file validation](testing-images/jshint-layers-js.jpeg)| mapboxgl variable is declared in Mapbox GLJS API. |
| [spin.js file validation](testing-images/jshint-spin-js.jpeg)| No warnings. |
| [timeout.js file validation](testing-images/jshint-timeout-js.jpeg)| No warnings. |
| [buttons.js file validation](testing-images/jshint-buttons-js.jpeg)| No warnings. |
| [exit.js file validation](testing-images/jshint-exit-js.jpeg)| No warnings. |


- - -
<br><br>


# Testing User Stories

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

- - -
<br><br>

# Browser Tests


| Browser | Version | Expected Look | Expected Behaviour |
| :---: | :---: | :---: | :---: | :---: |
| Chrome | 108.0.5359.124 |  &check; |
| Chrome | 109.0.5414.83 |  &check; |
| Safari | 15.6.1 | &check; |
| Safari | iOS 16.1.1 | &check; |
| Firefox | 108.1 (24234) |  &check; |
| Edge | 108.0.1462.62 | &check; |

- - -
<br><br>

# Responsiveness Testing

Responsiveness was tested using [Google Dev Tools](https://developer.chrome.com/docs/devtools/).
<br><br>

| Device | Page / Form | Expected Look | 
| :---: | :---: | :---: | 
| iPhone SE  | About |&check; |
| iPhone XR | About |&check; |
| iPhone 12 Pro | About |&check; |
| Pixel 5 | About |&check; |
| Samsung Galaxy S8+ | About |&check; |
| Samsung Galaxy S20 Ultra | About |&check; |
| iPad Air | About |&check; |
| iPad Mini | About |&check; |
| Surface Pro 7 | About |&check; |
| Surface Duo | About |&check; |
| Galaxy Fold | About | &check; |
| Samsung Galaxy A51/71 | About |&check; |
| Nest Hub | About |&check; |
| Nest Hub Max | About |&check; |
- - -
<br><br>


# Accessibility tests

<br><br>

# Lighthouse tests

Performance, Accessibility, Best Practices and SEO tests were carried out with [Google Dev Tools](https://developer.chrome.com/docs/devtools/)' **Lighthouse** tool in `Incognito` mode. Results are not 100% consistent, there is always a few percent variation at each performed test.

Results:

| Device | Result | 
| :---: | :---: |
| Mobile |  ![Result-mobile]()|
| Desktop | ![Result-desktop]()|


The lower performance scores were mainly caused by the way Bootstrap loads before the first render:

![bootstrap-performance-issue](assets/images/testing-images/bootstrap-issue.jpeg)
- - -
<br><br>

# Peer Review


- - -
<br><br>

# Bugs

## Resolved Bugs


- - -
<br><br>

## Known Bugs


