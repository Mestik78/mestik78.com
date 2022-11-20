let autoPassEnabled = true
let autoPassTime = 5000

function enableAutoPass(){ autoPassEnabled = true }
function disableAutoPass(){ autoPassEnabled = false }

function plusDivs(n, keep) {
  showDivs(slideIndex += n);
  if (!keep){disableAutoPass() }
}

function currentDiv(n, keep) {
  showDivs(slideIndex = n);
  if (!keep){disableAutoPass() }
}

function showDivs(n) {
  var i;
  var images = document.getElementsByClassName("slideImage");
  var dots = document.getElementsByClassName("imageJump");
  if (n > images.length) {slideIndex = 1}
  if (n < 1) {slideIndex = images.length}
  for (i = 0; i < images.length; i++) {
    images[i].className = images[i].className.replace(" slideImageHidden", "");  
    images[i].className += " slideImageHidden";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshowWhite", "");
  }
  images[slideIndex-1].className = images[slideIndex-1].className.replace(" slideImageHidden", "");  
  dots[slideIndex-1].className += " slideshowWhite";
}

function autoPass() {
  if (autoPassEnabled) {
    plusDivs(1, true)
  }
  setTimeout(autoPass, autoPassTime)
}
setTimeout(autoPass, autoPassTime)