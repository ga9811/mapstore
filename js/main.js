// Navigation toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const nav = document.getElementById('mainNav');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}
