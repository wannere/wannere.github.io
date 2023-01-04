$(document).ready(function(){
  $(".menu").click(function(){
    $(".menu").toggleClass("is-active");
    $(".dropdown_container").slideToggle('fast').css("display", "flex");
  });
  $("#top").click(function(){
    $("html, body").animate({scrollTop: 0}, 1000);
  });
});
