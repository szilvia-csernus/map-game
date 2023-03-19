import { removeHoverLayer, removeBlurLayer, 
    removeFeedbackLayer, removeTouchLayer, timeOutForCorrectFeedback, timeOutForIncorrectFeedback, timeOutForFlyAnimation, 
    popup, clickEventHandler, mouseLeaveHoverEventListenerHandler, mouseMoveHoverEventListenerHandler, timeOutForPopup } from "./layers.js";

import { initialZoom, startGame } from './index.js'
import { initializeScore, setDblClickFeedbackLayer, timeOutForShowScore, touchEndFunction, touchStartFunction } from "./questions.js";
import { stopSpin } from "./spin.js";
import { clearQuestions, timeOutForCountry, timeOutForMinZoom, timeOutForQuestion } from "./round.js";


const disableMapInteraction = (map) => {
    map["dragPan"].disable();
    map["scrollZoom"].disable();
    map["touchZoomRotate"].disable();
}

export const resetMap = (map) => {

    removeHoverLayer(map);
    removeTouchLayer(map);
    removeBlurLayer(map);
    removeFeedbackLayer(map);

    disableMapInteraction(map);

    map.setMinZoom(initialZoom());

    map.off('mousemove', `country-hover`, mouseMoveHoverEventListenerHandler);
    map.off('mouseleave', 'country-hover', mouseLeaveHoverEventListenerHandler);
    // map.off('click', 'country-hover', clickEventHandler);
    // map.off('click', 'country-touch', clickEventHandler);
    map.off('dblclick', 'country-hover', setDblClickFeedbackLayer);
    map.off('touchstart','country-touch', touchStartFunction);
    map.off('touchend','country-touch', touchEndFunction);

    popup && popup.remove();

    map.easeTo({
        zoom: initialZoom(),
        duration: 500,
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
    $('#highScoresBtn').remove();
    $('#newGame').remove();
    $('#exit').remove();

    timeOutForShowScore.clearTimeOutFunction();
    timeOutForCorrectFeedback.clearTimeOutFunction();
    timeOutForIncorrectFeedback.clearTimeOutFunction();
    timeOutForFlyAnimation.clearTimeOutFunction();
    timeOutForMinZoom.clearTimeOutFunction();
    timeOutForQuestion.clearTimeOutFunction();
    timeOutForCountry.clearTimeOutFunction();
    timeOutForPopup.clearTimeOutFunction();

    clearQuestions();
}

export const restartGame = (map) => {
    updateElements();
    resetMap(map);
    // delay with 500ms to allow the globe to zoom back to its original zoom level
    setTimeout( () => startGame(map), 500);
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

