window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");

var offset = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= offset) {
    navbar.addClass("sticky")
  } else {
    navbar.removeClass("sticky");
  }
}
