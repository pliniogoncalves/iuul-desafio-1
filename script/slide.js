window.addEventListener('load', function() {
  var slides = document.querySelectorAll('#slideshow img');
  var slideDetails = document.querySelectorAll('#slideshow .slide-details');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 10000);

  var prevButton = document.querySelector('#slideshow .prev');
  var nextButton = document.querySelector('#slideshow .next');

  prevButton.addEventListener('click', function() {
    prevSlide();
    resetSlideInterval();
  });

  nextButton.addEventListener('click', function() {
    nextSlide();
    resetSlideInterval();
  });

  function showSlide(slideIndex) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      slideDetails[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
    slideDetails[slideIndex].style.display = 'block';
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 10000);
  }

  showSlide(currentSlide);
});
