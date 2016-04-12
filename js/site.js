$(document).ready(function() {
  $("#hamburgerbutton").click(function() {

    $("#navigation").toggleClass("open-sidebar");
    console.log ( '#someButton was clicked' );
  });
});
