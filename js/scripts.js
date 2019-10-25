$(document).ready(function() {

  $("#info li").click(function() {
    var item = $("info li").click();

    if (item === 0) {
      $("#ruby").show();
    } else {
      $('#php').show();
    }
  });



});
