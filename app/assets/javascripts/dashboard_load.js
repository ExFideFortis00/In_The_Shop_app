var map;
var infoWindow;

function initialize() {
  var myLatLng = new google.maps.LatLng(40.6480350, -73.9467150);

  map = new google.maps.Map(document.getElementById("map-canvas"), { 
    center: myLatLng,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var myMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'This is you!'
  });

  var request = {
    location: myLatLng,
    radius: 20000,
    types: ['car_repair']
  };

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  google.maps.event.addListener(myMarker, 'click', function() {
  infowindow.open(map, this);
  });
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;

  var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);