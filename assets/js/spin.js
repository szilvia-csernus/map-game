let spinEnabled;

export const stopSpin = () => spinEnabled = false;

export const addRotation = (map) => {
    // Code for spinGlobe() function is adapted (and heavily modified)
    // from an example by mapbox.com:
    // https://docs.mapbox.com/mapbox-gl-js/example/globe-spin/

    const secondsPerRevolution = 100; 
    spinEnabled = true;

    // keep rotating as long as stopSpin() gets fired
    function spinGlobe() {
        if (spinEnabled) {
            let distancePerSecond = 360 / secondsPerRevolution;
            const center = map.getCenter();
            center.lng -= distancePerSecond;
            // Smoothly animate the map over one second.
            // When this animation is complete, it calls the 'moveend' event.
            map.easeTo({
                center,
                duration: 1000,
                easing: (n) => n
            });
            // When animation is complete (1s), start spinning again.
            map.once('moveend', spinGlobe);
        } else {
            map.stop();
        }
    }
    spinGlobe();

    // I removed this tag as otherwise it would update itself with a new http request in every second
    $('.mapbox-improve-map').remove();
};