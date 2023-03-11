import {
    addExit
} from './exit.js';
import {
    startRound
} from './round.js';
import {
    addHoverLayer,
    addBlurLayer,
    addEventListeners,
    addTouchLayer
} from './layers.js';
import {
    addContinentBtns
} from './buttons.js';
import {
    addHowToPlay, addHowToPlayIcon
} from './how-to-play.js';
import { stopSpin } from './spin.js';


export const isMobile = window.navigator.maxTouchPoints > 0;
export const visitedBefore = window.localStorage.getItem('visitedBefore');

let firstTime = true;

const enableMapInteraction = (map) => {
    // Set scroll and drag functions
    map["dragPan"].enable();
    map["scrollZoom"].enable();
    // map["boxZoom"].enable();
    // map["dragRotate"].enable();
    map["touchZoomRotate"].enable();
}

const addClickListenersToContinentBtns = (map) => {
    
    const addFlyOnClick = (button, region, center, zoom = 4) => {
        button.click(function () {
            stopSpin()
            map.easeTo({
                center,
                zoom,
                duration: 1000,
                bearing: 0,
                essential: true
            })

            // clear previous filters if any
            map.getLayer('country-hover') && map.setFilter('country-hover', null);
            map.getLayer('country-touch') && map.setFilter('country-touch', null);
            map.getLayer('country-blur') && map.setFilter('country-blur', null);

            // set hoverable filter for region and blur filter outside region
            map.getLayer('country-hover') &&
                map.setFilter('country-hover', ['==', ['get', 'region'], region]);
            map.getLayer('country-touch') &&
                map.setFilter('country-touch', ['==', ['get', 'region'], region]);

            !map.getLayer('country-blur') && addBlurLayer(map);
            map.setFilter('country-blur', ['!=', ['get', 'region'], region]);

            // add event listeners to the filtered region of the map
            addEventListeners(map);
            enableMapInteraction(map);
            startRound(map, region, 5);
        })
    }

    isMobile ? addTouchLayer(map) : addHoverLayer(map);

    addFlyOnClick($('#europeBtn'), 'Europe', [14.213562, 53.541532], 3.5)
    addFlyOnClick($('#asiaBtn'), 'Asia', [77.367783, 32.174450], 2.5)
    addFlyOnClick($('#africaBtn'), 'Africa', [17.015762, 8.895926], 2.8)
    addFlyOnClick($('#americasBtn'), 'Americas', [-84.811020, 11.632733], 2.5)
}

const showChooseContinentTitle = () => {
    $('h1').removeClass('title').addClass('choose').fadeIn('slow').text('Choose a continent!');
}

export const game = (map) => {

    const continueFunction = () => {
        addExit(map);
        showChooseContinentTitle();
        addContinentBtns();
        addClickListenersToContinentBtns(map);
    }

    if (!visitedBefore && firstTime) {
        firstTime = false;
        window.localStorage.setItem('visitedBefore', 'true');
        addHowToPlay(isMobile, false, continueFunction);
    } else {
        addHowToPlayIcon(isMobile)
        continueFunction()
    }
}