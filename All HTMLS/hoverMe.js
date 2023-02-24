
//https://www.w3schools.com/jquery/event_mouseover.asp


$(document).ready(function() {
    $("#hoverMe").hover(function () {

      $(this).css("background-color", "#b27ee0");

    }, function() {

    $(this).css("background-color", "bisque");

    });

  });
