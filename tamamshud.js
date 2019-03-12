$(document).ready(function(){
  $('#fullpage').fullpage({
    //options here
    autoScrolling:true,
    anchors: ['top', 'body', 'suitcase', 'rubaiyat', 'woman', 'end'],
    fitToSection: false,
    responsiveWidth: 1000,
  });
  $("img").mouseover( function (){
    var src = $(this).attr("src").match(/[^\.]+/) + "_hover.png";
    $(this).attr("src", src);
  })
  .mouseout(function(){
    var src = $(this).attr("src").replace("_hover.png", ".png");
    $(this).attr("src", src);
  });
});
