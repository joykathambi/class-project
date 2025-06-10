document.getElementById("menuToggle").addEventListener("click", function() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
const container = document.querySelector('.partners-logos-container');

let scrollAmount = 0;
function autoScroll() {
  scrollAmount += 1;
  if(scrollAmount >= container.scrollWidth - container.clientWidth) {
    scrollAmount = 0;
  }
  container.scrollLeft = scrollAmount;
  requestAnimationFrame(autoScroll);
}
  // Select all .faq-item elements
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isVisible = answer.style.display === "block";

      // Hide all answers first (optional: for accordion behavior)
      document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

      // Show or hide the clicked one
      answer.style.display = isVisible ? "none" : "block";

      // Toggle the +/− sign (if you're using icons in text)
      question.textContent = question.textContent.includes("➕")
        ? question.textContent.replace("➕", "➖")
        : question.textContent.replace("➖", "➕");
    });
  })

   
