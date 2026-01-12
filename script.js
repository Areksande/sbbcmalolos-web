document.querySelectorAll('.slider-nav a').forEach((dot, index) => {
    dot.addEventListener('click', e => {
      e.preventDefault(); // stop page from jumping
      const slider = document.querySelector('.slider');
      slider.scrollLeft = slider.offsetWidth * index; // scroll to slide
    });
  });

var videoElement = document.getElementById('vid1')
videoElement.volume = 0.5;