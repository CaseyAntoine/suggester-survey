$(document).ready(function() {

  $("#info li").click(function(ev) {
    $(".panel-info").hide();
    $("#" + $(ev.currentTarget).data("target")).show();
  });



  $("#surveyButton").click(function() {
    $("#surveyForm").show();

  });

  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    $("span").empty();

    var name = $("#nameField").val();
    var email = $("#emailField").val();
    var knowledge = $("#knowledge option:selected");
    var reference = $("#ref option:selected");
    var studyStyle = $("#study option:selected");
    var studyBuddy = $("#studyBuddy option:selected");

    $("#results").show();
    $("#nameDrop").text(name);
    $("#emailDrop").text(email);

    if (knowledge === "knowJs") {
      $("#skill").text("Looks like you've got a great foundation. We'd suggest diving into some Ruby,PHP, or Swift.");
    } else if(knowledge === "html") {
      $("#skill").text("If you know HTML, you're off to a good start already, now let's get you into JavaScript.");
    } else if (knowledge === "basic" || "heardOf") {
      $("#skill").text("Let's make sure you have a good understanding of HTML before we cover other languages.");
    } else {
      $("#skill").text("Let's take the first step and get into HTML, it's the building blocks to bigger, more complex things!");
    }

    if (reference === "friend") {
      $("#reference").text("We're glad to hear your friend told you about us!");
    } else if ( reference === "google") {
      $("#reference").text("");
    } else {
      $("#reference").text("Whoops!");
    }

    if (studyStyle === "yes") {
      $("#studyStudy").text("It's always a great idea to learn something new with a partner or a friend! ");
    } else {
      $("#studyStyle").text("We actually reccommend learning programming with a study partner or friend, which allows you to talk through concepts.");
    }

    if (studyBuddy === "yes") {
      $("#studyBuddy").text("Now Let's get you and your study buddy all the information you need to get started!");
    } else {
      $("#studyBuddy").text("We've got you covered when it comes to needing a study buddy!");
    }

  });



});
