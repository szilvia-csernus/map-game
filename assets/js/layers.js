import {
    countryCoordinates
} from "../data/world-countries-centroids.js";
import TimeOut from "./timeout.js";

const minZoom = (map) => map.getMinZoom() - 0.1;
const maxZoom = (map) => map.getMaxZoom() + 0.5;

export let clickedCountryCode = null;
export let clickedCountryName = null;

import {
    worldviewFilters
} from "./index.js";

/** adds hover-change layer to the map. Used on non-mobile devices.  */
export const addHoverLayer = (map) => {
    // hovering effect is adopted from one of the Examples given on mapbox.com
    // https://docs.mapbox.com/mapbox-gl-js/example/hover-styles/
    map.addLayer({
        id: 'country-hover',
        filter: [
            "all",
                ...worldviewFilters
                ],
        minzoom: minZoom(map),
        maxzoom: maxZoom(map),
        paint: {
            'fill-color': [
                'case',
                ["all",
                    ...worldviewFilters,
                    ['boolean', ['feature-state', 'hover'], false]
                ],
                "#fff", // paint the country white on hover
                "hsla(0, 0%, 100%, 0)"
            ]
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })
}

/** remove hover layer and its filters if they exist */
export const removeHoverLayer = (map) => {
    if (map.getLayer('country-hover')) {
        map.setFilter('country-hover', null);
        map.removeLayer('country-hover');
    }

}

/** this layer is used on mobile devices to provide a touch-selectable layer to
 * allow identifying the touched country.  */
export const addTouchLayer = (map) => {
    map.addLayer({
        id: 'country-touch',
        filter: [
            "all",
            ...worldviewFilters
        ],
        minzoom: minZoom(map),
        maxzoom: maxZoom(map),
        paint: {
            // 'fill-color': "#fff"
            'fill-color': "hsla(0, 0%, 100%, 0)"
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })
}

/** remove hover layer and its filters if they exist */
export const removeTouchLayer = (map) => {
    if (map.getLayer('country-touch')) {
        map.setFilter('country-touch', null);
        map.removeLayer('country-touch');
    }

}

/** add a blur layer to map to allow filtering out regions */
export const addBlurLayer = (map) => {
    map.addLayer({
        id: `country-blur`,
        filter: [
            "all",
            ...worldviewFilters
        ],
        minzoom: minZoom(map),
        maxzoom: maxZoom(map),
        paint: {
            'fill-color': "hsla(208, 66%, 35%, 0.6)"
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    })
}

/** remove blur layer and its filters if they exist */
export const removeBlurLayer = (map) => {
    if (map.getLayer('country-blur')) {
        map.setFilter('country-blur', null);
        map.removeLayer('country-blur');
    }
}

export const timeOutForCorrectFeedback = new TimeOut();
export const timeOutForIncorrectFeedback = new TimeOut();
export const timeOutForFlyAnimation = new TimeOut();

/** this layer renders the country green/red according to the answer given 
 * as well as increases the score if the answer is correct.
 */
export const addFeedbackLayer = (map, correct, correctCountryCode, callback) => {
    map.addLayer({
        filter: [
            "all",
            ...worldviewFilters,
            ['==', ['get', 'iso_3166_1'], clickedCountryCode]
        ],
        id: 'country-feedback-line',
        minzoom: minZoom(map),
        maxzoom: maxZoom(map),
        paint: {
            'line-color': "#fff",
            'line-width': 3
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });

    addPopup(map, clickedCountryCode)

    if (correct) {
        map.addLayer({
            filter: [
                "all",
                ...worldviewFilters,
                ['==', ['get', 'iso_3166_1'], clickedCountryCode]
            ],
            id: 'country-feedback-fill-correct',
            minzoom: minZoom(map),
            maxzoom: maxZoom(map),
            paint: {
                'fill-color': "#2cf32c"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        });

        // addPopup(map, clickedCountryCode)

        // The callback function calls the next question recursively. (See askQuestions function)
        timeOutForCorrectFeedback.setTimeOutFunction(callback, 2000);

    } else {
        map.addLayer({
            filter: [
                "all",
                ['==', ['get', 'iso_3166_1'], clickedCountryCode],
                ...worldviewFilters
            ],
            id: 'country-feedback-fill-incorrect',
            minzoom: minZoom(map),
            maxzoom: maxZoom(map),
            paint: {
                'fill-color': "#ff0000"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        });

        // addPopup(map, clickedCountryCode)

        timeOutForFlyAnimation.setTimeOutFunction(() => flyToCorrectCountry(map, correctCountryCode), 1500);
        timeOutForIncorrectFeedback.setTimeOutFunction(callback, 3500)
    }
    clickedCountryCode = null;
}

export let popup;

const addPopup = (map, code) => {
    if (countryCoordinates[code]) {
        popup = new mapboxgl.Popup()
            .setLngLat(countryCoordinates[code]["coordinates"])
            .setHTML(`<span>${countryCoordinates[code]["countryName"]}</span>`)
            .addTo(map);
    }
}

const flyToCorrectCountry = (map, code) => {
    removeFeedbackLayer(map);
    map.addLayer({
        filter: [
            "all",
            ...worldviewFilters,
            ['==', ['get', 'iso_3166_1'], code]
        ],
        id: 'corrected-country',
        minzoom: minZoom(map),
        maxzoom: maxZoom(map),
        paint: {
            'line-color': "#2cf32c",
            'line-width': 3
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });

    // addNameLayer(map, code);
    addPopup(map, code)

    const longlat = countryCoordinates[code]["coordinates"]
    map.flyTo({
        center: longlat,
        duration: 1000,
        bearing: 0,
        essential: true
    })
}

/** remove other country selection if there is any */
export const removeFeedbackLayer = (map) => {
    map.getLayer('country-feedback-fill-correct') && map.removeLayer('country-feedback-fill-correct');
    map.getLayer('country-feedback-fill-incorrect') && map.removeLayer('country-feedback-fill-incorrect');
    map.getLayer('country-feedback-line') && map.removeLayer('country-feedback-line');
    map.getLayer('corrected-country') && map.removeLayer('corrected-country');
    // removeNameLayer(map);
    // if there is already a popup on the map then remove it first
    popup && popup.remove()
}

export const clickEventHandler = (e) => {
    // filter for Crimea and Western Sahara which would otherwise incorrectly show up as part of Russia/Morocco.
    clickedCountryCode = (e.features[0].id === 12128447 || e.features[0].id === 9965705) ? e.features[1].properties.iso_3166_1 : e.features[0].properties.iso_3166_1;
    clickedCountryName = (e.features[0].id === 12128447 || e.features[0].id === 9965705) ? e.features[1].properties.name_en : e.features[0].properties.name_en;

    console.log(e.features, clickedCountryCode, clickedCountryName)
}

let hoveredStateId = null;

export function mouseMoveHoverEventListenerHandler (e) {
    // when the user moves the mouse over the state-fill layer, 
    // we'll update the feature state for the feature under the mouse.
    // non-touch devices only.
   this.getCanvas().style.cursor = 'pointer';
            if (e.features.length > 0) {
                if (hoveredStateId) {

                   this.setFeatureState({
                        source: 'country-boundaries',
                        sourceLayer: 'country_boundaries',
                        id: hoveredStateId
                    }, {
                        hover: false
                    });
                }
                // filter for Crimea and Western Sahara which would otherwise incorrectly show up as part of Russia/Morocco.
                hoveredStateId = (e.features[0].id === 12128447 || e.features[0].id === 9965705) ? e.features[1].id : e.features[0].id;
               this.setFeatureState({
                    source: 'country-boundaries',
                    sourceLayer: 'country_boundaries',
                    id: hoveredStateId
                }, {
                    hover: true
                });
            }
};

export function mouseLeaveHoverEventListenerHandler () {
    // console.log(hoveredStateId)
    if (hoveredStateId) {

        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        this.setFeatureState({
            source: 'country-boundaries',
            sourceLayer: 'country_boundaries',
            id: hoveredStateId
        }, {
            hover: false
        });
        hoveredStateId = null;
    }

    this.getCanvas().style.cursor = '';
}

export const addEventListeners = (map) => {
    
    if (map.getLayer('country-hover')) {
        map.on('mousemove', `country-hover`, mouseMoveHoverEventListenerHandler);
        map.on('mouseleave', 'country-hover', mouseLeaveHoverEventListenerHandler);
        map.on('click', 'country-hover', clickEventHandler)    
    }

    if (map.getLayer('country-touch')) {
        map.on('touchstart', 'country-touch', clickEventHandler)
    }
};