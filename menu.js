window.onload = function() {
  var button = document.getElementById("nav-button");

  var list = document.getElementById("nav-list");

  var top = document.getElementById("nav-top");

  button.onclick = function() {navFunction()};

  function navFunction(){
    if (list.style.display === "flex") {
      list.style.display = "none";
    }
    else {
      list.style.display = "flex";
    }
  }
};
