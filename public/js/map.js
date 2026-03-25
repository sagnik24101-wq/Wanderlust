mapboxgl.accessToken = mapToken;

const coords = window.coordinates.length
    ? window.coordinates
    : [77.2088, 28.6139];
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/satellite-streets-v12",
    center: coords, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9// starting zoom
});


console.log(coords);

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(coords)  // Listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup({ offset: 25})
        .setHTML(`<h4>${window.listingName}</h4><p><b>Discover this destination</b></p>`)
        .setMaxWidth("300px")
        .addTo(map))
    .addTo(map);