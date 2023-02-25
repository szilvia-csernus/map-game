// add tileset source for country boundaries, region and country name data
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
    map["doubleClickZoom"].enable();
    map["touchZoomRotate"].enable();

};

// Adding interactive layer to the map. 

const addHoverLayer = (map) => {

// select region's countries to be hoverable
map.addLayer({
    id: 'country-hover',
    minzoom: 1.5,
    maxzoom: 5.5,
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

const addBlurLayer = (map) => {
// add a blur to countries outside the region
map.addLayer({
    id: `country-blur`,
    minzoom: 1.5,
    maxzoom: 5.5,
    paint: {
        'fill-color': "hsla(208, 66%, 35%, 0.6)"
    },
    source: "country-boundaries",
    'source-layer': "country_boundaries",
    type: "fill"
})

// add hover-effect: when the user moves their mouse over the state-fill layer, 
// we'll update the feature state for the feature under the mouse.


let hoveredStateId = null;

map.on('mousemove', `country-hover`, (e) => {
    map.getCanvas().style.cursor = 'pointer';
    console.log(e.features[0].properties.subregion)
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

// return (map.getFeatureState({
//     source: 'country-boundaries',
//     sourceLayer: 'country_boundaries',
//     id: hoveredStateId
// }))
};

const removePlayBtn = () => {
    $('.mainTitle').fadeOut('fast').text('Choose a continent!').fadeIn('slow');

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
            map.setFilter('country-blur', ['!=', ['get', 'region'], region])
        })
    }
    addTilesetSource(map);
    addHoverLayer(map);
     
    addFlyOnClick($('#europeBtn'), 'Europe', [14.213562, 53.541532], 3.5)
    addFlyOnClick($('#asiaBtn'), 'Asia', [84.090042, 42.298643], 3)
    addFlyOnClick($('#africaBtn'), 'Africa', [17.015762, 8.895926], 3)
    addFlyOnClick($('#americasBtn'), 'Americas', [-70.582352, -3.374284], 3)
}

export const game = (map) => {
    removePlayBtn();
    showContinentBtns();
    addClickListenersToContinentBtns(map);
}