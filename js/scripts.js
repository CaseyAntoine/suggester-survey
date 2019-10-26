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
    var knowledge = $("#knowledge option:selected").val();
    var reference = $("#ref option:selected").val();
    var studyStyle = $("#study option:selected").val();
    var studyBuddy = $("#studyBuddy option:selected").val();

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
      console.log(reference);
      $("#reference").text("We're glad to hear your friend told you about us!");
    } else {
      console.log("console is getting Google " + reference);
      $("#reference").text("Thanks for checking us out! ");
    }

    if (studyStyle === "yes") {
      console.log(studyStyle);
      $("#studyStudyanswer").text("It's always a great idea to learn something new with a partner or a friend! ");
    } else if (studyStyle === "no") {
      $("#studyStyleanswer").text("We actually reccommend learning programming with a study partner or friend, which allows you to talk through concepts. ");
    } else {
      console.log("whoops!");
    }

    if (studyBuddy === "yes") {
      console.log(studyBuddy);
      $("#studyBuddyanswer").text("Now Let's get you and your study buddy all the information you need to get started!");
    } else {
      console.log("No " + studyBuddy);
      $("#studyBuddyanswer").text("We've got you covered when it comes to needing a study buddy! We'll follow up with you with an email soon. ");
    }

    $("surveyForm").trigger("reset");
  });



});
