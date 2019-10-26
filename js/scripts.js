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
    var studyBuddy = $("#studyBuddy option:selected");

    $("#results").show();
    $("span").empty();
    $("#nameDrop").text(name);
    $("#emailDrop").text(email);

    if (knowledge === "knowJs") {
      $("#skill").text("Looks like you've got a great foundation. We'd suggest diving into some Ruby,PHP, or Swift.");
    } else if(knowledge === "html") {
      $("#skill").text("If you know HTML, you're off to a good start already, now let's get you into JavaScript.");
    } else if (knowledge === "basic" || "heardOf") {
      $("#skill").text("Let's make sure you have a good understanding of HTML before we cover other languages.");
    } else {
      $("#skill").text("Let's take the first step and get into HTML, it's the building blocks to bigger more complex things!");
    }

  });



});
