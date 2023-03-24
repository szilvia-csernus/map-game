import { removeHoverLayer, removeBlurLayer, 
    removeFeedbackLayer, removeTouchLayer, timeOutForCorrectFeedback, timeOutForIncorrectFeedback, timeOutForFlyAnimation, 
    marker, mouseLeaveHoverEventListenerHandler, mouseMoveHoverEventListenerHandler,  } from "./layers.js";

import { initialZoom, startGame } from './index.js';
import { resetScore, setDblClickFeedbackLayer, timeOutForShowScore, touchEndFunction, touchStartFunction } from "./questions.js";
import { stopSpin } from "./spin.js";
import { clearQuestions, timeOutForCountry, timeOutForMinZoom, timeOutForQuestion } from "./round.js";


export const disableMapInteraction = (map) => {
    map.dragPan.disable();
    map.scrollZoom.disable();
    map.touchZoomRotate.disable();
};

export const resetMap = (map) => {

    removeHoverLayer(map);
    removeTouchLayer(map);
    removeBlurLayer(map);
    removeFeedbackLayer(map);

    disableMapInteraction(map);

    map.setMinZoom(initialZoom());

    map.off('mousemove', `country-hover`, mouseMoveHoverEventListenerHandler);
    map.off('mouseleave', 'country-hover', mouseLeaveHoverEventListenerHandler);
    map.off('dblclick', 'country-hover', setDblClickFeedbackLayer);
    map.off('touchstart','country-touch', touchStartFunction);
    map.off('touchend','country-touch', touchEndFunction);
    map.off('touchcancel', 'country-touch', restartGame);

    marker && marker.remove();

    map.easeTo({
        zoom: initialZoom(),
        duration: 500,
        bearing: 0,
        essential: true,
    });
};

const updateElements = () => {
    resetScore();

    $('#highScoresBackground').remove();
    $('#howToPlayCanvas').remove();
    $('#regionCanvas').remove();

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

    clearQuestions();
};

export const restartGame = (map) => {
    updateElements();
    resetMap(map);
    // delay with 500ms to allow the globe to zoom back to its original zoom level
    setTimeout( () => startGame(map), 500);
};

const addExitBtn = (map) => {
    $('body').append('<img id="exit" class="exit" src="./assets/icons/exit.svg" alt="exit icon"></img>');
    $('#exit').click( () => {
        stopSpin();
        restartGame(map);
    });
};

export const addExit = (map) => {
    addExitBtn(map);
};

