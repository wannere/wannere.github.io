$(document).ready(function(){
  var yourNavigation = $(".second-nav");
      stickyDiv = "sticky";
      yourHeader = $('.top').height();

  $(window).scroll(function(){
    if( $(this).scrollTop() > yourHeader ) {
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
  });
  $(".nav-item").click(function(){
    $(".hamburger").toggleClass("is-active");
    $(".item-wrapper").slideToggle('fast').css("display", "flex");
  });
  $(window).resize(function(){
    adjustWidth();
    if($(window).width() > 550) {
      $(".item-wrapper").css("display", "flex");
    };
  });
});
