// Toggle mobile menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("showing");
}

// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    document.getElementById("menu").classList.remove("showing");
  });
});
