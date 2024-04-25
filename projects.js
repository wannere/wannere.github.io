$(document).ready(function(){
  $(".menu").click(function(){
    $(".menu").toggleClass("is-active");
    $(".dropdown_container").slideToggle('fast').css("display", "flex");
  });
  $("#top").click(function(){
    $("html, body").animate({scrollTop: 0}, 100);
  });
  $(".toggle").click(function(){
    $(this).parents(".u-flex-column").find("div:first-child").toggleClass("scroll");
  });
});
$(document).mousemove(function(e){
    $("#cursor").css({left:e.clientX, top:e.clientY});
});
