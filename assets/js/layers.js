import {
    countryCoordinates
} from "../data/world-countries-centroids.js";
import TimeOut from "./timeout.js";

const minZoom = (map) => map.getMinZoom() - 0.1;
const maxZoom = (map) => map.getMaxZoom() + 0.5;

export let clickedCountryCode = null;

export const resetClickedCountryCode = () => clickedCountryCode = null;

import {
    worldviewFilters
} from "./index.js";
import {
    isMobile
} from "./buttons.js";

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
    });
};

/** remove hover layer and its filters if they exist */
export const removeHoverLayer = (map) => {
    if (map.getLayer('country-hover')) {
        map.setFeatureState({
            source: 'country-boundaries',
            sourceLayer: 'country_boundaries',
            id: hoveredStateId
        }, {
            hover: false
        });
        map.setFilter('country-hover', null);
        map.removeLayer('country-hover');
    }
};

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
            // fully transparent
            'fill-color': "hsla(0, 0%, 100%, 0)"
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "fill"
    });
};

/** remove hover layer and its filters if they exist */
export const removeTouchLayer = (map) => {
    if (map.getLayer('country-touch')) {
        map.setFilter('country-touch', null);
        map.removeLayer('country-touch');
    }
};

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
    });
};

/** remove blur layer and its filters if they exist */
export const removeBlurLayer = (map) => {
    if (map.getLayer('country-blur')) {
        map.setFilter('country-blur', null);
        map.removeLayer('country-blur');
    }
};

// timeout functions to allow time for feedback and flying animations.
export const timeOutForCorrectFeedback = new TimeOut();
export const timeOutForIncorrectFeedback = new TimeOut();
export const timeOutForFlyAnimation = new TimeOut();

export let marker;

/** adds the name of the country */
const addMarker = (map, code) => {
    if (countryCoordinates[code]) {

        const el = document.createElement('div');
        el.className = 'marker';
        // I'm using the local dataset to display country names because in case of an incorrect country was clicked
        // the correct country's data can't be reached through the event.features property (as it wasn't clicked!).
        el.textContent = countryCoordinates[code].countryName;
        
        marker = new mapboxgl.Marker(el)
            .setLngLat(countryCoordinates[code].coordinates)            
            .addTo(map);
    }
};

/** this layer renders the country green/red according to the answer given 
 * as well as increases the score if the answer is correct.
 */
export const addFeedbackLayer = (map, correct, correctCountryCode, callback) => {
    const topMostLayer = map.getLayer('country-touch') ? 'country-touch' : '';
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
    }, topMostLayer);

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
                'fill-color': "#00D700"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        }, topMostLayer);

        addMarker(map, clickedCountryCode);

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
                'fill-color': "#D60000"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        }, topMostLayer);

        addMarker(map, clickedCountryCode);

        timeOutForFlyAnimation.setTimeOutFunction(() => flyToCorrectCountry(map, correctCountryCode), 1500);
        timeOutForIncorrectFeedback.setTimeOutFunction(callback, 3500);
    }
};

/** if a wrong answer was clicked, we fly the map to the correct country */
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

    const longlat = countryCoordinates[code].coordinates;
    map.flyTo({
        center: longlat,
        duration: 1000,
        bearing: 0,
        essential: true
    });

    addMarker(map, code);
};

/** remove other country selection if there is any */
export const removeFeedbackLayer = (map) => {
    if (map.getLayer('country-feedback-fill-correct')) {
        map.setFilter('country-feedback-fill-correct', null);
        map.removeLayer('country-feedback-fill-correct');
    } 
    if (map.getLayer('country-feedback-fill-incorrect')) {
        map.setFilter('country-feedback-fill-incorrect', null);
        map.removeLayer('country-feedback-fill-incorrect');
    }
    if (map.getLayer('country-feedback-line')) {
        map.setFilter('country-feedback-line', null);
        map.removeLayer('country-feedback-line');
    } 
    if (map.getLayer('corrected-country')) {
        map.setFilter('corrected-country', null);
         map.removeLayer('corrected-country');
    }

    // if there is already a marker on the map then remove it
    if (marker) {
        marker.remove();
    }
};

export const clickEventHandler = (e) => {
    // if clicked item has no id the click won't register a clicked country.
    if (e.features) {
        // filter for Crimea, Western Sahara and Falkland Islands that would otherwise incorrectly show up as part of Russia/Morocco/Argentina.
        clickedCountryCode = (e.features[0].id === 12128447 || e.features[0].id === 9965705 || e.features[0].id === 659466) ? e.features[1].properties.iso_3166_1 : e.features[0].properties.iso_3166_1;
    }
};

let hoveredStateId = null;

/** if a mouse is hovered over a country, set its 'hover' feature true  */
export function mouseMoveHoverEventListenerHandler(e) {
    
    this.getCanvas().style.cursor = 'pointer';

    // when the user moves the mouse over the state-fill layer, 
    // we'll update the feature state for the feature under the mouse.
    // non-touch devices only.
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
        // filter for Crimea, Western Sahara and Falkland Islands that would otherwise incorrectly show up as part of Russia/Morocco/Argentina.
        hoveredStateId = (e.features[0].id === 12128447 || e.features[0].id === 9965705 || e.features[0].id === 659466) ? e.features[1].id : e.features[0].id;
        this.setFeatureState({
            source: 'country-boundaries',
            sourceLayer: 'country_boundaries',
            id: hoveredStateId
        }, {
            hover: true
        });
    }
}

/** if the mouse leaves the country, update the 'hover' state feature (set to false) */
export function mouseLeaveHoverEventListenerHandler() {
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

/** adds hover effect onto the map */
export const addDesktopEventListeners = (map) => {

    if (map.getLayer('country-hover') && !isMobile) {
        map.on('mousemove', `country-hover`, mouseMoveHoverEventListenerHandler);
        map.on('mouseleave', 'country-hover', mouseLeaveHoverEventListenerHandler);   
    }
};