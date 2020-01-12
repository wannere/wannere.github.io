$(document).ready(function(){
  function adjustWidth() {
     var parentwidth = $(".container").width();
     $(".second-nav").width(parentwidth);
  };
  $(".menu").click(function(){
    $(".menu").toggleClass("is-active");
    $(".item-wrapper").slideToggle('fast').css("display", "flex");
    $(".overlay").fadeToggle('fast');
    $(".header_line").fadeToggle('fast').css("display", "block");
  });
  $(".nav-item").click(function(){
    $(".menu").toggleClass("is-active");
    $(".item-wrapper").slideToggle('fast').css("display", "flex");
    if($(window).width() < 550 ) {
      $(".overlay").fadeToggle('fast');
      $(".overlay").css("display", "none");
    };
  });
  $(window).resize(function(){
    adjustWidth();
    if($(window).width() > 550) {
      $(".item-wrapper").css("display", "none");
    };
  });
});
