import { restartRound } from "./round.js";

/** creates play button and adds to document */
export const addPlayBtn = (callback) => {
    $('body').append('<div id="playBtn" class="playBtn">PLAY</div>');
    $('#playBtn').click(callback)
}

export const removePlayBtn = () => {
    $('#playBtn').remove();
}

export const addContinentBtns = () => {
    $('body').append('<div id="continentCanvas" class="continentCanvas"></div>')

    $('#continentCanvas').append('<button id="europeBtn" class="continentBtn">Europe</button>')
    $('#continentCanvas').append('<button id="asiaBtn" class="continentBtn">Asia</button>')
    $('#continentCanvas').append('<button id="africaBtn" class="continentBtn">Africa</button>')
    $('#continentCanvas').append('<button id="americasBtn" class="continentBtn">Americas</button>')  
}

export const removeContinentBtns = () => {
    $('#continentCanvas').remove();
}

export const addNewGameBtn = (map) => {
    $('body').append('<button id="newGame" class="newGame">New Game</button>');
    $('#newGame').click(function() {restartRound(map)})
}

export const removeNewGameBtn = () => {
    $('#newGame').remove()
}