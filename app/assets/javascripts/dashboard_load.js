var map;
var infoWindow;
var num_Lat
var num_Long

function initialize() {
  var car_id = $(".temp_information").data()["car"]["id"]
    $.ajax({
    type: 'GET',
    url: "https://api.carvoyant.com/v1/api/vehicle/" + car_id + "/data/?key=GEN_WAYPOINT&mostRecentOnly=1&sortOrder=desc&searchLimit=1",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', 'Bearer jqrqp8hkmwy4wxpdwjjrq5mn');
    },
    dataType: 'json',
  }).done(function(data){
    console.log(data)
    var latLong = data["data"][0]["value"];
    var array = latLong.split(",");
    var rawLat = array[0];
    var rawLong = array[1];
    num_Lat = Number(array[0]);
    num_Long = Number(array[1]);

  var myLatLng = new google.maps.LatLng(num_Lat, num_Long);
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