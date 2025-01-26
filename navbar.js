const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle nav menu on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close nav menu when clicking outside
document.addEventListener("click", (event) => {
  // Check if the click is outside the hamburger and nav menu
  if (
    !navLinks.contains(event.target) &&
    !hamburger.contains(event.target) &&
    navLinks.classList.contains("active")
  ) {
    navLinks.classList.remove("active");
  }
});
