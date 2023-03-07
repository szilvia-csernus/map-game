import { removeHoverLayer, removeBlurLayer, removeSelectLayer, removeFeedbackLayer, removeTouchLayer } from "./layers.js";

import { initialZoom, startGame } from './index.js'


const disableMapInteraction = (map) => {
    map["dragPan"].disable();
    map["scrollZoom"].disable();
    map["boxZoom"].disable();
    map["dragRotate"].disable();
    map["keyboard"].disable();
    // map["touchZoomRotate"].disable();
}

export const resetMap = (map) => {

    removeHoverLayer(map);
    removeTouchLayer(map);
    removeBlurLayer(map);
    removeSelectLayer(map);
    removeFeedbackLayer(map);

    disableMapInteraction(map);

    map.easeTo({
        zoom: initialZoom(),
        duration: 500,
        essential: true
    })

}

const updateElements = () => {
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
    // delay with 500ms to allow the globe to zoom back to its original zoom level
    setTimeout( () => startGame(map), 500);
}

const addExitBtn = (map) => {
    $('body').append('<img id="exit" class="exit" src="./assets/icons/exit.svg"></img>')
    $('#exit').click(function () {
        restartGame(map)
    })
}

export const addExit = (map) => {
    addExitBtn(map);
}

