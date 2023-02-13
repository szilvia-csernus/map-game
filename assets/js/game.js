$('#europeBtn').click(function() {
    console.log('click');
    map.flyTo({
        center: [-73, 40],
        zoom: 15
    })
})