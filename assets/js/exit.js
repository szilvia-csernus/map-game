import { removeHoverLayer, removeBlurLayer, 
    removeFeedbackLayer, removeTouchLayer } from "./layers.js";

import { initialZoom, startGame } from './index.js'
import { initializeScore } from "./questions.js";
import { stopSpin } from "./spin.js";


const disableMapInteraction = (map) => {
    map["dragPan"].disable();
    map["scrollZoom"].disable();
    // map["boxZoom"].disable();
    // map["dragRotate"].disable();
    map["touchZoomRotate"].disable();
}

export const resetMap = (map) => {

    removeHoverLayer(map);
    removeTouchLayer(map);
    removeBlurLayer(map);
    removeFeedbackLayer(map);

    disableMapInteraction(map);

    map.setMinZoom(initialZoom());

    map.easeTo({
        zoom: initialZoom(),
        duration: 800,
        bearing: 0,
        essential: true,
    })
}

const updateElements = () => {
    initializeScore();

    $('#highScoresBackground').remove();
    $('#howToPlayCanvas').remove();
    $('#continentCanvas').remove();

    // reset main title
    $('h1').empty().removeClass('question').removeClass('choose').addClass('title').text('map it!');

    $('#countryLabel').remove();
    $('#checkmarks').remove();
    $('#newGame').remove();
    $('#exit').remove();
}

export const restartGame = (map) => {
    updateElements();
    resetMap(map);
    // delay with 1s to allow the globe to zoom back to its original zoom level
    setTimeout( () => startGame(map), 1000);
}

const addExitBtn = (map) => {
    $('body').append('<img id="exit" class="exit" src="./assets/icons/exit.svg" alt="exit icon"></img>')
    $('#exit').click(function () {
        stopSpin();
        restartGame(map)
    })
}

export const addExit = (map) => {
    addExitBtn(map);
}

