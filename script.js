<script>
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
  const slider = document.getElementById('partnersSlider');

  let scrollPosition = 0;

  function autoScrollLogos() {
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      scrollPosition = 0;
    } else {
      scrollPosition += 3; // ← increased from 1 to 3
    }
    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }

  setInterval(autoScrollLogos, 20); // still smooth, but scrolls faster
  <script>
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('active');
      const answer = q.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
</script>
