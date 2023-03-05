import { addExit } from './exit.js';
import { startRound } from './round.js';
import { addHoverLayer, addBlurLayer, addEventListeners } from './layers.js';


const enableMapInteraction = (map) => {
    // Set scroll and drag functions
    map["dragPan"].enable();
    map["scrollZoom"].enable();
    map["boxZoom"].enable();
    // map["dragRotate"].enable();
    map["keyboard"].enable();
    map["touchZoomRotate"].enable();
}

const addClickListenersToContinentBtns = (map) => {

    const addFlyOnClick = (button, region, center, zoom = 4) => {
        button.click(function () {
            map.easeTo({
                center,
                zoom,
                duration: 1000,
                essential: true
            })
            // clear previous filters if any
            map.getLayer('country-hover') && map.setFilter('country-hover', null);
            map.getLayer('country-blur') && map.setFilter('country-blur', null);

            // set hoverable filter for region and blur filter outside region
            map.getLayer('country-hover') &&
                map.setFilter('country-hover', ['==', ['get', 'region'], region]);
            !map.getLayer('country-blur') && addBlurLayer(map);
            map.setFilter('country-blur', ['!=', ['get', 'region'], region]);

            // add event listeners to the filtered region of the map
            addEventListeners(map);
            enableMapInteraction(map);
            startRound(map, region);
        })
    }
    addHoverLayer(map);

    addFlyOnClick($('#europeBtn'), 'Europe', [14.213562, 53.541532], 3.5)
    addFlyOnClick($('#asiaBtn'), 'Asia', [77.367783, 32.174450], 2.8)
    addFlyOnClick($('#africaBtn'), 'Africa', [17.015762, 8.895926], 3)
    addFlyOnClick($('#americasBtn'), 'Americas', [-84.811020, 11.632733], 2)
}

const showContinentBtns = () => {
    $('body').append('<div class="continentCanvas"></div>')

    // add continent buttons
    $('.continentCanvas').append('<button id="europeBtn" class="continentBtn">Europe</button>');
    $('.continentCanvas').append('<button id="asiaBtn" class="continentBtn">Asia</button>');
    $('.continentCanvas').append('<button id="africaBtn" class="continentBtn">Africa</button>');
    $('.continentCanvas').append('<button id="americasBtn" class="continentBtn">Americas</button>');
}

const showChooseContinentTitle = () => {
    $('h1').removeClass('title').addClass('choose').fadeIn('slow').text('Choose a continent!');
}

const removePlayBtn = () => {
    $('.playBtnCanvas') && $('.playBtnCanvas').remove();
}

export const game = (map) => {
    removePlayBtn();
    addExit(map);
    showChooseContinentTitle();
    showContinentBtns();
    addClickListenersToContinentBtns(map);
}