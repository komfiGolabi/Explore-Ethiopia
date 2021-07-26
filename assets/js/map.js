function initMap(){
    const ethioLocation = { lat : 9.1450 , lng: 40.4897};
    var map =  new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: ethioLocation,
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   

    // all locations details taken from https://latitudelongitude.org/
    var locations = [
        { lat : 9.02497 , lng : 38.74689},
        { lat : 14.12448 , lng: 38.72444},
        { lat: 11.59364 , lng: 37.39077},
        { lat: 12.6 , lng: 37.46667},
        { lat: 9.31387 , lng: 42.11815},
        { lat: 12.03333 , lng: 39.03333},
    ];
/*
    var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length],
    });
});


var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: `https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js/m`});
}
*/

function addMarker(location){
    const marker = new google.maps.Marker({
        position: location,
        map: map,
 });

}

addMarker({ lat : 9.02497 , lng : 38.74689}); //addis marker
addMarker({ lat : 14.12448 , lng: 38.72444}); //aksum marker
addMarker({ lat: 11.59364 , lng: 37.39077}); //bahir dar marker
addMarker({ lat: 12.6 , lng: 37.46667}); // gondar marker
addMarker({ lat: 9.31387 , lng: 42.11815}); // harar marker
addMarker({ lat: 12.03333 , lng: 39.03333}); //lalibela marker


}