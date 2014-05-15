$(document).ready(function(){

var carvoyant_results;
$('#carvoyant_dropdown').change(select_car)
  $( "#carvoyant_link" ).click(function() {
      $.ajax({
        type: 'GET',
        url: "https://api.carvoyant.com/v1/api/vehicle/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer jqrqp8hkmwy4wxpdwjjrq5mn');
        },
        dataType: 'json',
      }).done(function(data){
        console.log(data)
        render_results(data["vehicle"])
      });
    });
});

// 1) Populate the dropdown menu with the user's registered vehicles on Carvoyant
      // Car name, year, make, model, sort alphabetically 
// 2) Populate form from user dropdown selection with the 

 
 function render_results (data) {
    // take the raw data and iterate through it
    $.each(data, function(index, value) {
      // create an option tag for each item
      // add the item's text and values to the option tag
      $('<option>').text(value["name"]).data(value).appendTo('#carvoyant_dropdown')
    });
    // append each option tag to the results dropdown select tag
}

function select_car(e){
  console.log(e);
  var pick = $(this).find(":selected").data();
  console.log(pick);
  populate_form(pick);
}

function populate_form(pick){
  var car_profile = pick.name.split(" ")
  var car_mileage = pick.mileage
  var car_id = pick.vehicleId
  $('#car_year').val(car_profile[0])
  $('#car_make').val(car_profile[1])
  $('#car_model').val(car_profile.slice(2, 10))
  $('#car_starting_milage').val(car_mileage)
  $('#car_id').val(car_id)
}