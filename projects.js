$(document).ready(function(){
  var yourNavigation = $(".second-nav");
      stickyDiv = "sticky";

  $(window).scroll(function(){
    if( $(this).scrollTop() > 91 ) {
    yourNavigation.addClass(stickyDiv);
    adjustWidth();
    }
    else {
    yourNavigation.removeClass(stickyDiv);
    }
  });
  function adjustWidth() {
     var parentwidth = $(".container").width();
     $(".second-nav").width(parentwidth);
  };
  $(".hamburger").click(function(){
    $(".hamburger").toggleClass("is-active");
    $(".item-wrapper").slideToggle('fast').css("display", "flex");
    $(".overlay").fadeToggle('fast');
  });
  $(".nav-item").click(function(){
    $(".hamburger").toggleClass("is-active");
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
