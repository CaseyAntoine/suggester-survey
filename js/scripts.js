$(document).ready(function() {

  $("#info li").click(function() {
    var item = $(".item").val();

    console.log(item);

    if (item === 0) {
      $("#ruby").show();
    } else {
      $('#php').show();
    }
  });



});
