import { showHighScores } from "./high-scores.js";
import { restartRound } from "./round.js";

export let isMobile = false;

/** creates play button and adds to document */
export const addPlayBtn = (callback) => {
    isMobile = false;
    $('body').append('<div id="playBtn" class="playBtn">PLAY</div>');
    $('#playBtn').click(callback);
    $('#playBtn').on('touchstart', () => isMobile = true)
    console.log(isMobile)
    
    // $('#playBtn').on('touchend', callback);
};

export const removePlayBtn = () => {
    $('#playBtn').remove();
};

export const addRegionBtns = () => {
    $('body').append('<div id="regionCanvas" class="regionCanvas"></div>');

    $('#regionCanvas').append('<button id="europeBtn" class="regionBtn">Europe</button>');
    $('#regionCanvas').append('<button id="asiaBtn" class="regionBtn">Asia</button>');
    $('#regionCanvas').append('<button id="africaBtn" class="regionBtn">Africa</button>');
    $('#regionCanvas').append('<button id="americasBtn" class="regionBtn">Americas</button>');
};

export const removeRegionBtns = () => {
    $('#regionCanvas').remove();
};

export const addNewGameBtn = (map) => {
    $('body').append('<button id="newGame" class="newGame">New Game</button>');
    $('#newGame').click(() => restartRound(map));
};

export const removeNewGameBtn = () => {
    $('#newGame').remove();
};

export const addHighScoresBtn = (map) => {
    $('body').append('<button id="highScoresBtn" class="highScoresBtn">View your best scores here</button>');
    $('#highScoresBtn').click(function() {
        showHighScores(map);
        this.remove();
    });
};