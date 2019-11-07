var indexNr = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  indexNr++;
  if (indexNr > slides.length) {
    indexNr = 1
  }
  slides[indexNr-1].style.display = "block";
  setTimeout(showSlides, 4000); // endrer bildet hvert 3 sekund
}
