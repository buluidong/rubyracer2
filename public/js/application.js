$(document).ready(function() {
  var timeStarted = false;
  var timeEnded = false;
  var start;
  var timer;

  $(document).on('keyup', function(event) {
    if(event.keyCode == 81) {
      $("#player1_strip td.active").removeClass('active').next().addClass('active');


        if($("#player1_strip td:last").hasClass('active')) {
          $("#player1_strip td.active").removeClass('active').last().css("background-color", "red");
          alert("Player 1 wins");
        }
    }



    if(event.keyCode == 105) {
      $("#player2_strip td.active").removeClass('active').next().addClass('active');

      if($("#player2_strip td:last").hasClass('active')) {
          $("#player2_strip td.active").removeClass('active').last().css("background-color", "red");
          alert("Player 2 wins");
      }
    }



  });
});