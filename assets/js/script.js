
// MapboxGL
mapboxgl.accessToken =
    'pk.eyJ1Ijoic3ppbHZpMSIsImEiOiJjbGR4Z2M5YzEwaDVkNDBwaGcwOWIzcHg4In0.PTFFlTTPfA3PnnA01vzcZw';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b',
    projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    zoom: 1.5,
    center: [0, 40],
});

map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

