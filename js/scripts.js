$(document).ready(function() {

  $("#info li").click(function(ev) {
    $(".panel-info").hide();
    $("#" + $(ev.currentTarget).data("target")).show();
  });



  $("#surveyButton").click(function() {
    $("#survey").show();

  });

  $("#survey").submit(function(event) {
    event.preventDefault();

    var name = $("#nameField").val();
    var email = $("#emailField").val();
    var knowledge = $("#knowledge option:selected");
    var reference = $("#ref option:selected");
    var studyStyle = $("#study option:selected");

    if (name) {

    } else {

    }

  });



});
