window.addEventListener('load', function() {
    var slides = document.querySelectorAll('#slideshow img');
    var currentSlide = 0;
    var slideInterval;
  
    var prevButton = document.querySelector('#slideshow .prev');
    var nextButton = document.querySelector('#slideshow .next');
  
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
  
    function startSlideShow() {
      slideInterval = setInterval(nextSlide, 10000); // Altere o valor para definir o novo tempo de exibição (em milissegundos)
    }
  
    function stopSlideShow() {
      clearInterval(slideInterval);
    }
  
    function showSlide(slideIndex) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[slideIndex].style.display = 'block';
    }
  
    function prevSlide() {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
      stopSlideShow();
      startSlideShow();
    }
  
    function nextSlide() {
      slides[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      stopSlideShow();
      startSlideShow();
    }
  
    showSlide(currentSlide);
    startSlideShow();
  });
  