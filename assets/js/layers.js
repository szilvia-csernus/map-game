/** adds hover-change layer to the map. Used on non-mobile devices.  */
export const addHoverLayer = (map) => {
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
            minzoom: 1,
            maxzoom: 7,
            paint: {
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
export const removeBlurLayer = (map) => {
    if (map.getLayer('country-blur')) {
        map.setFilter('country-blur', null);
        map.removeLayer('country-blur');
    }
}

/** add select layer to the map */
export const addSelectLayer = (map, countryCode) => {
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], countryCode],
        id: 'country-select-line',
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
        id: 'country-select-fill',
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

/** remove other country selection if there is any */
export const removeSelectLayer = (map) => {
    map.getLayer('country-select-fill') && map.removeLayer('country-select-fill');
    map.getLayer('country-select-line') && map.removeLayer('country-select-line');
}

/** this layer renders the country green/red according to the answer given 
 * as well as increases the score if the answer is correct.
 */
export const addFeedbackLayer = (map, countryCode, increaseScore) => {
    map.addLayer({
        filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
        id: 'country-feedback-line',
        minzoom: 1,
        maxzoom: 7,
        paint: {
            'line-color': "#fff",
            'line-width': 3
        },
        source: "country-boundaries",
        'source-layer': "country_boundaries",
        type: "line"
    });
    if (countryCode === clickedCountryCode) {
        increaseScore();
        map.addLayer({
            filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
            id: 'country-feedback-fill',
            minzoom: 1,
            maxzoom: 7,
            paint: {
                'fill-color': "#2cf32c"
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
                'fill-color': "#ff0000"
            },
            source: "country-boundaries",
            'source-layer': "country_boundaries",
            type: "fill"
        });
    }
}

/** remove other country selection if there is any */
export const removeFeedbackLayer = (map) => {
    map.getLayer('country-feedback-fill') && map.removeLayer('country-feedback-fill');
    map.getLayer('country-feedback-line') && map.removeLayer('country-feedback-line');
}

// /** this layer renders correct & incorrect country names according to the answer given.*/
// export const addNameLayer = (map, countryCode, increaseScore) => {
//     map.addLayer({
//         filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
//         id: 'country-feedback-line',
//         minzoom: 1,
//         maxzoom: 7,
//         paint: {
//             'line-color': "#fff",
//             'line-width': 2
//         },
//         source: "country-boundaries",
//         'source-layer': "country_boundaries",
//         type: "line"
//     });
//     if (countryCode === clickedCountryCode) {
//         increaseScore();
//         map.addLayer({
//             filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
//             id: 'country-feedback-fill',
//             minzoom: 1,
//             maxzoom: 7,
//             paint: {
//                 'fill-color': "#3aa956"
//             },
//             source: "country-boundaries",
//             'source-layer': "country_boundaries",
//             type: "fill"
//         });
//     } else {
//         map.addLayer({
//             filter: ['==', ['get', 'iso_3166_1'], clickedCountryCode],
//             id: 'country-feedback-fill',
//             minzoom: 1,
//             maxzoom: 7,
//             paint: {
//                 'fill-color': "#a93a42"
//             },
//             source: "country-boundaries",
//             'source-layer': "country_boundaries",
//             type: "fill"
//         });
//     }
// }

export let clickedCountryCode = null;
export const addEventListeners = (map) => {
    let hoveredStateId = null;
    
    // when the user moves their mouse over the state-fill layer, 
    // we'll update the feature state for the feature under the mouse.
    // non-touch devices only.
    if (map.getLayer('country-hover')) {
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
        map.on('mouseleave', 'country-hover', () => {
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
    }

    if (map.getLayer('country-touch')) {
        map.on('touchstart', 'country-touch', (e) => {
            clickedCountryCode = e.features[0].properties.iso_3166_1;
            console.log(clickedCountryCode)
        })
    }
};