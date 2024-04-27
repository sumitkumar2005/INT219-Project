document.addEventListener('DOMContentLoaded', function() {
  // Initialize slideshow and card slider
  const slides = document.querySelectorAll('.slider img');
  const container = document.querySelector('.slider');
  const totalSlides = slides.length;
  let slideIndex = 0;

  setInterval(() => {
    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }
    const translateXValue = -slideIndex * 100;
    container.style.transform = `translateX(${translateXValue}%)`;
  }, 3000); // Change slide every 3 seconds

  const cardsContainer = document.querySelector('.cardContainer');
  const cards = document.querySelectorAll('.cards');

});