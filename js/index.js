window.onload = init;

function init(){
  window.onscroll = function() {stickyNav()};

  var navbar = document.getElementById("navbar");

  var offset = navbar.offsetTop;

  function stickyNav() {
    if (window.pageYOffset >= offset) {
      navbar.classList.add("sticky")
    }
    else {
      navbar.classList.remove("sticky");
    }
  }
}
