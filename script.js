// MENU TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// AUTO-SCROLL FOR PARTNER LOGOS
const slider = document.getElementById('partnersSlider');

let scrollPosition = 0;

function autoScrollLogos() {
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
    scrollPosition = 0;
  } else {
    scrollPosition += 1;
  }
  slider.scrollLeft = scrollPosition;
}

setInterval(autoScrollLogos, 20); // Adjust speed as needed

// FAQ TOGGLE FUNCTIONALITY
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
