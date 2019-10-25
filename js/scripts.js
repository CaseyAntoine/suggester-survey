$(document).ready(function() {

  $(".item").click(function() {
    var list = $(".item");

    for(i=0;i<=list.length;i++){
      $("#ruby").show();
    }

    // if (item === 0) {
    //   $("#ruby").show();
    // } else {
    //   $('#php').show();
    // }
  });



});
