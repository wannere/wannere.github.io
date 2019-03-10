$(document).ready(function(){
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fade")
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
      }
      else {
        $(tag).removeClass("visible")
      };
    };
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
