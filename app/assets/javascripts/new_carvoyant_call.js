$(document).ready(function(){

var carvoyant_results;

  $( "#carvoyant_link" ).click(function() {
      $.ajax({
        type: 'GET',
        url: "https://api.carvoyant.com/v1/api/vehicle/",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer jqrqp8hkmwy4wxpdwjjrq5mn');
        },
        dataType: 'json',
        success: function(data){
          alert(data);
        },
      }).done(function(data){
        $(data).append$( "#carvoyant_results" );
      });
  });
});