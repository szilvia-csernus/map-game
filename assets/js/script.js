 // Mapbox GL JS object
 mapboxgl.accessToken =
 'pk.eyJ1Ijoic3ppbHZpMSIsImEiOiJjbGR4Z2M5YzEwaDVkNDBwaGcwOWIzcHg4In0.PTFFlTTPfA3PnnA01vzcZw';
const map = new mapboxgl.Map({
 container: 'map',
 style: 'mapbox://styles/szilvi1/cldvz9vlb000y01qrbvjld10b', // use my own style
 projection: 'globe', // Display the map as a globe
 zoom: 1,
 center: [30, 40],
});

map.on('style.load', () => {
 map.setFog({}); // make Earth's atmosphere lighter
});

$(document).ready(function () {
   $('.map').addClass('makeVisible');
    $('.mainTitle').addClass('makeVisible');
    $('.btnPlay').addClass('makeVisible')
})