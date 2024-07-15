// mobile navbar 


document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('humbager');
  const CloseButton = document.getElementById('closed');
  const navMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', function() {
      if (navMenu.classList.contains('hidden')) {
          navMenu.classList.remove('hidden');
          navMenu.classList.add('block');
      } else {
          navMenu.classList.remove('block');
          navMenu.classList.add('hidden');
      }
  });
  CloseButton.addEventListener('click', function() {
      if (navMenu.classList.contains('hidden')) {
          navMenu.classList.remove('hidden');
          navMenu.classList.add('block');
      } else {
          navMenu.classList.remove('block');
          navMenu.classList.add('hidden');
      }
  });
});


// image carosol 
document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.getElementById('carouselSlides');
    const slides = slidesContainer.children;
    const totalSlides = slides.length;
    let currentIndex = 0;
  
    function showSlide(index) {
      const offset = -index * 100;
      slidesContainer.style.transform = `translateX(${offset}%)`;
    }
  
    document.getElementById('next').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      
      showSlide(currentIndex);
    });
  
    document.getElementById('prev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    });
  });


 