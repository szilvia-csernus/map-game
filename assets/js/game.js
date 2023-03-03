import {
    initialZoom,
    startGame
} from './script.js'

import { startRound, removeSelectLayer, removeFeedbackLayer } from './round.js';

/**  adds tileset source for country boundaries, region and country name data */

export let clickedCountryCode = null;
const addEventListeners = (map) => {
    let hoveredStateId = null;

    // when the user moves their mouse over the state-fill layer, 
    // we'll update the feature state for the feature under the mouse.
    map.on('mousemove', `country-hover`, (e) => {
        map.getCanvas().style.cursor = 'pointer';
        // console.log(e.features[0].properties.name_en, e.features[0].properties.iso_3166_1, e.features[0].properties.iso_3166_1_alpha_3, e.features[0].properties.wikidata_id)
        if (e.features.length > 0) {
            if (hoveredStateId) {

                map.setFeatureState({
                    source: 'country-boundaries',
                    sourceLayer: 'country_boundaries',
                    id: hoveredStateId
                }, {
                    hover: false
                });
                // console.log(map.getFeatureState({
                //     source: 'country-boundaries',
                //     sourceLayer: 'country_boundaries',
                //     id: hoveredStateId
                // }))
            }

            hoveredStateId = e.features[0].id;
            map.setFeatureState({
                source: 'country-boundaries',
                sourceLayer: 'country_boundaries',
                id: hoveredStateId
            }, {
                hover: true
            });

        }
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', `country-hover`, () => {
        // console.log(hoveredStateId)
        if (hoveredStateId) {

            map.setFeatureState({
                source: 'country-boundaries',
                sourceLayer: 'country_boundaries',
                id: hoveredStateId
            }, {
                hover: false
            });
            hoveredStateId = null;
        }

        map.getCanvas().style.cursor = '';
    });

    map.on('click', 'country-hover', (e) => {
        clickedCountryCode = e.features[0].properties.iso_3166_1;
    })
    
    // only for mobile devices
    map.on('touchstart', 'country-hover', (e) => {
        clickedCountryCode = e.features[0].properties.iso_3166_1;
    })
    
    // return (map.getFeatureState({
    //     source: 'country-boundaries',
    //     sourceLayer: 'country_boundaries',
    //     id: hoveredStateId
    // }))
};

/** adds interactive layer to the map.  */
const addHoverLayer = (map) => {
    // select region's countries to be hoverable
    if (!map.getLayer('country-hover')) {
        map.addLayer({
            id: 'country-hover',
            minzoom: 1,
            maxzoom: 7,
            paint: {
                'fill-color': [
                    'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    "#fff", // paint it white on hover
                    "hsla(0, 0%, 100%, 0)"
                ]
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        })
    }

}

/** remove hover layer and its filters if they exist */
const removeHoverLayer = (map) => {
    if (map.getLayer('country-hover')) {
        map.setFilter('country-hover', null);
        map.removeLayer('country-hover');
    }

}

/** add a blur to countries outside the region */
const addBlurLayer = (map) => {
    map.addLayer({
        id: `country-blur`,
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'fill-color': "hsla(208, 66%, 35%, 0.6)"
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })
}

/** remove blur layer and its filters if they exist */
const removeBlurLayer = (map) => {
    if (map.getLayer('country-blur')) {
        map.setFilter('country-blur', null);
        map.removeLayer('country-blur');
    }
}

const removePlayBtn = () => {
    $('.playBtnCanvas').remove();
}

const enableMapInteraction = (map) => {
     // Set scroll and drag functions
     map["dragPan"].enable();
     map["scrollZoom"].enable();
     map["boxZoom"].enable();
     map["dragRotate"].enable();
     map["keyboard"].enable();
     map["touchZoomRotate"].enable();
}

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
    $('.continentCanvas').remove();

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
    $('.home').addClass('home-appear').click(function() {
        reStartGame(map)
    })
}

const showChooseContinentTitle = () => {
    $('h1').removeClass('title').addClass('choose').fadeIn('slow').text('Choose a continent!');
}

const showContinentBtns = () => {
    $('body').append('<div class="continentCanvas"></div>')

    // add continent buttons
    $('.continentCanvas').append('<button id="europeBtn" class="continentBtn">Europe</button>');
    $('.continentCanvas').append('<button id="asiaBtn" class="continentBtn">Asia</button>');
    $('.continentCanvas').append('<button id="africaBtn" class="continentBtn">Africa</button>');
    $('.continentCanvas').append('<button id="americasBtn" class="continentBtn">Americas</button>');
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
            map.setFilter('country-hover', null);
            map.getLayer('country-blur') && map.setFilter('country-blur', null);

            // set hoverable filter for region and blur filter outside region
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

export const game = (map) => {
    removePlayBtn();
    addExitBtn(map);
    showChooseContinentTitle();
    showContinentBtns();
    addClickListenersToContinentBtns(map);
}

