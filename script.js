const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  
  const slider = document.getElementById('partnersSlider');
  if (slider) {
    let scrollPosition = 0;

    function autoScrollLogos() {
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        scrollPosition = 0;
      } else {
        scrollPosition += 3;
      }
      slider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }

    setInterval(autoScrollLogos, 20);
  }

  
  const questions = document.querySelectorAll('.faq-question');
  if (questions.length > 0) {
    questions.forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
        const answer = q.nextElementSibling;
        if (answer) {
          answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        }
      });
    });
  }
