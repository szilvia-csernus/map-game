import { removeHoverLayer, removeBlurLayer, removeSelectLayer, removeFeedbackLayer } from "./layers.js";

import { initialZoom, startGame } from './script.js'


const disableMapInteraction = (map) => {
    map["dragPan"].disable();
    map["scrollZoom"].disable();
    map["boxZoom"].disable();
    map["dragRotate"].disable();
    map["keyboard"].disable();
    map["touchZoomRotate"].disable();
}

export const resetMap = (map) => {

    removeHoverLayer(map);
    removeBlurLayer(map);
    removeSelectLayer(map);
    removeFeedbackLayer(map);

    disableMapInteraction(map);

    map.easeTo({
        zoom: initialZoom(),
        duration: 1000,
        essential: true
    })

}

const updateElements = () => {
    $('.continentCanvas') && $('.continentCanvas').remove();

    // reset main title
    $('h1').empty().addClass('mainTitleReAppear').text('map it!');


    // re-set Play button
    const playBtnCanvas = document.createElement('div');
    playBtnCanvas.setAttribute('class', 'playBtnCanvas');
    const playBtn = document.createElement('button');
    playBtn.setAttribute('class', 'playBtn');
    playBtn.textContent = 'PLAY';
    document.body.appendChild(playBtnCanvas);
    playBtnCanvas.appendChild(playBtn);

    $('.home').removeClass('.home-appear');

}

const reStartGame = (map) => {
    updateElements();
    resetMap(map);
    setTimeout(() => startGame(map), 1000);
}

const addExitBtn = (map) => {
    $('.home').addClass('home-appear').click(function () {
        reStartGame(map)
    })
}

export const addExit = (map) => {
    addExitBtn(map);
}

