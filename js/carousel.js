let slideIndex = 0;
showSlides();

function showSlides() {
  let s;
  let slides = document.getElementsByClassName("mySlides");
  for (s = 0; s < slides.length; s++) {
    slides[s].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "inline";
  setTimeout(showSlides, 4000); 
}