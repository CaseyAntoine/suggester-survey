$(document).ready(function() {

  $("#info li").click(function() {



  });

  $("#surveyButton").click(function() {
    $("#survey").show();

  });

  $("#survey").submit(function(event) {
    event.preventDefault();

    var name = $("#nameField").val();
    var email = $("#emailField").val();

  });



});
