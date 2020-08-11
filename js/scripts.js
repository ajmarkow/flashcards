$(document).ready(function (){
  $("#JavaScript").click(function() {
    $("#javascript").toggle();
    $("p").not("#javascript").slideUp();
  });
  $("#Operators").click(function() {
    $("#operators").toggle();
    $("p").not("#operators").slideUp();
  });
  $("#Functions").click(function() {
    $("#functions").toggle();
    $("p").not("#functions").slideUp();
  });
  $("#Variables").click(function() {
    $("#variables").toggle();
    $("p").not("#variables").slideUp();
  });
  $("#Methods").click(function() {
    $("#methods").toggle();
    $("p").not("#methods").slideUp();
  });
});
