const slides = document.querySelectorAll(".slide-item");
const slideTime = 2000;
let slideCounter = 0;
slides[slideCounter].classList.add("active");

setInterval(nextSlide, slideTime);

function nextSlide() {
  slides[slideCounter].classList.remove("active");
  if (slideCounter != slides.length - 1) {
    slideCounter++;
  } else {
    slideCounter = 0;
  }
  slides[slideCounter].classList.add("active");
}
