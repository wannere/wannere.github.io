$(document).ready(function(){
  $(".menu").click(function(){
    $(".menu").toggleClass("is-active");
    $(".dropdown_container").slideToggle('fast').css("display", "flex");
  });
  $("#top").click(function(){
    $("html, body").animate({scrollTop: 0}, 100);
  });
});
$(document).mousemove(function(e){
    $("#cursor").css({left:e.clientX, top:e.clientY});
});
