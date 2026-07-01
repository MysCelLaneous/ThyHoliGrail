const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
