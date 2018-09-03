window.onload = slider;

function slider(){
  carousel();


  function carousel() {
    var slideIndex = 0;
    var i;
    var x = document.getElementsByClassName("modern__monster");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
  }

  riot();

  function riot() {
    var slideIndex = 0;
    var o;
    var y = document.getElementsByClassName("riot__grrrl");
    for (o = 0; o < y.length; o++) {
      y[o].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > y.length) {slideIndex = 1}
    y[slideIndex-1].style.display = "block";
    setTimeout(riot, 4000);
  }
}
