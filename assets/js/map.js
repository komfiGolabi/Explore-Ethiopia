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

function addMarker(property){
    const marker = new google.maps.Marker({
        position: property.location,
        map: map,
        marker_id: property.marker_id,
        marker_content: property.marker_content

 });

 const infoPop = new google.maps.InfoWindow({
     content: property.content,
 });

 marker.addListener("click" , () =>{
 //infoPop.open(map, marker);
 console.log('I clicked a marker'+ marker.marker_id);
 const divs = document.querySelectorAll('#marker-content div');
 divs.forEach(el => el.classList.add('hidden'));
 document.getElementById(marker.marker_id).classList.remove('hidden');

});

}
addMarker({location: {lat : 9.02497 , lng : 38.74689},
    content:
     '<div><h6>Addis Ababa</h6><br><p class="info" id="addis">Addis-capital of Ethiopia, great and vibrant city, that offers great places to visit, great food to eat and kind people to chat with.</p><br></div>',
     marker_id : 1
    }); //addis marker
addMarker({location: { lat : 14.12448 , lng: 38.72444}, 
    content:'<h6>Aksum</h6><br><p class="info">Aksum carries the history of the Axumite civilization and the place, where allegedly Arc of Covenant is kept</p>',
    marker_id : 2
   }); //aksum marker
addMarker({location: { lat: 11.59364 , lng: 37.39077},
     content: '<h6>Bahir Dar</h6><br><p class="info">Bahir Dar and its lake Tana offers you beautiful scenery and traditional monasteries spread on the little islands on the lake, as well as the amazing waterfalls wherre is the beginning of the Blue Nile.</p>',
     marker_id : 3
    }); //bahir dar marker
addMarker({location: { lat: 12.6 , lng: 37.46667}, 
    content: '<h6>Gondar</h6><br><p class="info"></p>',
    marker_id : 4
    }); // gondar marker
addMarker({location: { lat: 9.31387 , lng: 42.11815},
     content: '<h6>Harar</h6>',
     marker_id : 5
    }); // harar marker
addMarker({location: { lat: 12.03333 , lng: 39.03333}, 
    
    content: '<h6>Lalibela</h6>',
    marker_id : 6
   }); //lalibela marker
};

