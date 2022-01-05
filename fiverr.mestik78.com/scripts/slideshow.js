function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var images = document.getElementsByClassName("slideImage");
  var dots = document.getElementsByClassName("imageJump");
  if (n > images.length) {slideIndex = 1}
  if (n < 1) {slideIndex = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshowWhite", "");
  }
  images[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " slideshowWhite";
}