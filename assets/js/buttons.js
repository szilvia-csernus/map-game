import { restartRound } from "./round.js";

/** creates play button and adds to document */
export const addPlayBtn = () => {
    // const button = document.createElement('button');
    // button.setAttribute('class', 'playBtn');
    // button.id = 'playBtn';
    // button.textContent = 'PLAY';
    // document.body.append(button);
    $('body').append('<div id="playBtn" class="playBtn">PLAY</div>')
}

export const removePlayBtn = () => {
    $('#playBtn').remove();
}

export const addContinentBtns = () => {
    // const div = document.createElement('div');
    // div.setAttribute('class', 'continentCanvas');
    // div.id = 'continentCanvas';
    // document.body.append(div);
    $('body').append('<div id="continentCanvas" class="continentCanvas"></div>')

    $('#continentCanvas').append('<button id="europeBtn" class="continentBtn">Europe</button>')
    $('#continentCanvas').append('<button id="asiaBtn" class="continentBtn">Asia</button>')
    $('#continentCanvas').append('<button id="africaBtn" class="continentBtn">Africa</button>')
    $('#continentCanvas').append('<button id="americasBtn" class="continentBtn">Americas</button>')  
}

export const removeContinentBtns = () => {
    $('#continentCanvas').remove();
    // $('#europeBtn').remove();
    // $('#asiaBtn').remove();
    // $('#africaBtn').remove();
    // $('#americasBtn').remove();
}

export const addNewGameBtn = (map) => {
    $('body').append('<button id="newGame" class="newGame">New Game</button>');
    $('#newGame').click(function() {restartRound(map)})
}

export const removeNewGameBtn = () => {
    $('#newGame').remove()
}