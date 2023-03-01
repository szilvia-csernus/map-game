import {
    data
} from '../data/countries.js'

/**  adds tileset source for country boundaries, region and country name data */
const addTilesetSource = (map) => {

    map.addSource('country-boundaries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
        generateId: true
    })

    // Set scroll and drag functions
    map["dragPan"].enable();
    map["scrollZoom"].enable();
    map["boxZoom"].enable();
    map["dragRotate"].enable();
    map["keyboard"].enable();
    map["touchZoomRotate"].enable();

};

let clickedCountryCode = null;
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
            // console.log(map.getFeatureState({
            //     source: 'country-boundaries',
            //     sourceLayer: 'country_boundaries',
            //     id: hoveredStateId
            // }))

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
        console.log(clickedCountryCode)
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

/** add select layer to the map */
const addSelectLayer = (map, countryCode) => {
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], countryCode],
        id: `country-select-line`,
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'line-color': "#2ec62e",
            'line-width': 2
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], countryCode],
        id: `country-select-fill`,
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'fill-color': "#fff",
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    });
}

const removeSelectLayer = (map) => {
    // remove other country selection if there is any
    map.getLayer('country-select-fill') && map.removeLayer('country-select-fill');
    map.getLayer('country-select-line') && map.removeLayer('country-select-line');
}

const addFeedbackLayer = (map, countryCode) => {
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
        id: 'country-feedback-line',
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'line-color': "#fff",
            'line-width': 2
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });
    if (countryCode === clickedCountryCode) {
        map.addLayer({
            filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
            id: 'country-feedback-fill',
            minzoom: 1,
            maxzoom: 7,
            paint: {
                'fill-color': "#3aa956"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        });
    } else {
        map.addLayer({
            filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
            id: 'country-feedback-fill',
            minzoom: 1,
            maxzoom: 7,
            paint: {
                'fill-color': "#a93a42"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        });
    }
}

const removeFeedbackLayer = (map) => {
    // remove other country selection if there is any
    map.getLayer('country-feedback-fill') && map.removeLayer('country-feedback-fill');
    map.getLayer('country-feedback-line') && map.removeLayer('country-feedback-line');
}


const addSelectEventListener = (map, countryCode) => {

    map.on('click', e => {
        // remove previously set layer
        removeSelectLayer(map);
        addSelectLayer(map, clickedCountryCode)
    })

    map.on('dblclick', e => {
        removeFeedbackLayer(map);
        addFeedbackLayer(map, countryCode)
    })
}

const removePlayBtn = () => {
    $('.mainTitle').fadeIn('slow').text('Choose a continent!').addClass('question');
    $('#btnPlay').remove();
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
            map.flyTo({
                center,
                zoom
            })
            // clear previous filters if any
            map.setFilter('country-hover', null);
            map.getLayer('country-blur') && map.setFilter('country-blur', null);

            // set hoverable filter for region and blur filter outside region
            map.setFilter('country-hover', ['==', ['get', 'region'], region]);
            !map.getLayer('country-blur') && addBlurLayer(map);
            map.setFilter('country-blur', ['!=', ['get', 'region'], region]);
            // add event listeners to the filtered region of the map
            addEventListeners(map)
            startRound(map, region);
        })
    }
    addTilesetSource(map);
    addHoverLayer(map);

    addFlyOnClick($('#europeBtn'), 'Europe', [14.213562, 53.541532], 3.5)
    addFlyOnClick($('#asiaBtn'), 'Asia', [77.367783, 32.174450], 2.8)
    addFlyOnClick($('#africaBtn'), 'Africa', [17.015762, 8.895926], 3)
    addFlyOnClick($('#americasBtn'), 'Americas', [-84.811020, 11.632733], 2)
}

export const game = (map) => {
    removePlayBtn();
    showContinentBtns();
    addClickListenersToContinentBtns(map);
}

// const europe = Object.keys(data['europe']);
// const africa = Object.keys(data['africa']);
// const americas = Object.keys(data['americas']);
// const asia = Object.keys(data['asia']);

// const countriesArray = () => {
//     const countries = [];
//     Object.values(data).forEach(data => countries.push(data['countryName']))
//     return countries
// }

// const capitalsArray = () => {
//     const capitals = [];
//     Object.values(data).forEach(data => capitals.push(data['capitalName']))
//     return capitals
// }

// const countries = countriesArray();
// const capitals = capitalsArray()

const getRandomCountryCode = (countries) => {
    let randomCountryCodeIndex = Math.floor(Math.random() * countries.length);
    return countries[randomCountryCodeIndex]
}

const startRound = (map, region) => {
    const codes = Object.keys(data[region]);
    console.log(codes)
    const randomCode = getRandomCountryCode(codes);
    console.log(randomCode)
    const country = data[region][randomCode].countryName;
    console.log(country);
    $('.mainTitle').fadeIn('slow').text(`Find ${country} on the map!`).addClass('question');
    $('.continentCanvas').remove();
    addSelectEventListener(map, randomCode)
}