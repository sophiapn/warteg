$(document).ready(function(){
  var navHeight = $('#myHeader').offset().top;
  $(window).scroll(function(){
    if ($(window).scrollTop() > navHeight) {
      $("#myHeader").addClass("fixed");
      $("#myHeader").slideDown('200');
    }
    else {
      $("#myHeader").removeClass("fixed");
    }
 });
});
