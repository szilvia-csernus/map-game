// Original rotating globe function is borrowed from mapbox.com Mabpbox GLJ Examples. 

// Rotation speed 
const secondsPerRevolution = 200;

// Above zoom level 5, do not rotate.
const maxSpinZoom = 5;
// Rotate at intermediate speeds between zoom levels 3 and 5.
const slowSpinZoom = 3;

let userInteracting = false;
let spinEnabled = true;

function spinGlobe() {
    const zoom = map.getZoom();
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
            // Slow spinning at higher zooms
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
        }
        const center = map.getCenter();
        center.lng -= distancePerSecond;
        // Smoothly animate the map over one second.
        // When this animation is complete, it calls a 'moveend' event.
        map.easeTo({
            center,
            duration: 1000,
            easing: (n) => n
        });
    }
}

// Pause spinning on interaction
map.on('mousedown', () => {
    userInteracting = true;
});

// Restart spinning the globe when interaction is complete
map.on('mouseup', () => {
    userInteracting = false;
    spinGlobe();
});

// These events account for cases where the mouse has moved
// off the map, so 'mouseup' will not be fired.
map.on('dragend', () => {
    userInteracting = false;
    spinGlobe();
});
map.on('pitchend', () => {
    userInteracting = false;
    spinGlobe();
});
map.on('rotateend', () => {
    userInteracting = false;
    spinGlobe();
});

// When animation is complete, start spinning if there is no ongoing interaction
map.on('moveend', () => {
    spinGlobe();
});

const playBtn = document.getElementById('btnPlay');
playBtn.addEventListener('click', (e) => {
    spinEnabled = !spinEnabled;
    if (spinEnabled) {
        spinGlobe();
    } else {
        map.stop(); // Immediately end ongoing animation
    }
    const europeBtn = document.createElement('button');
    europeBtn.setAttribute('class', 'continentBtn');
    europeBtn.setAttribute('id', 'europeBtn');
    europeBtn.textContent = 'Europe';
    playBtn.remove();
    document.getElementsByClassName('mainCanvas')[0].appendChild(europeBtn)
    $('#europeBtn').click(function() {
        console.log('click');
        map.flyTo({
            center: [15, 45],
            zoom: 3.5
        })
    })
});

spinGlobe();