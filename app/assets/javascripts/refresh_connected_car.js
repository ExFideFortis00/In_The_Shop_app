$(document).ready(function(){
  var car_id = $(".temp_information").data()["car"]["id"]

  $( "#update_errors" ).click(function() {
      $.ajax({
        type: 'GET',
        url: "https://api.carvoyant.com/v1/api/vehicle/" + car_id + "/data/?key=GEN_DTC&mostRecentOnly=1&sortOrder=desc&searchLimit=200",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer jqrqp8hkmwy4wxpdwjjrq5mn');
        },
        dataType: 'json',
      }).done(function(data){
        console.log(data)
        render_errors(data["data"])
      });
    });
});

function render_errors (data) {
  var errors = $.map(data, function(el) {
  return el["translatedValue"]
});
  var current_errors = $.unique(errors)
  $.each(current_errors, function(index, value) {
    $('<li>').text(value).appendTo('#error_codes_list')
  });
}