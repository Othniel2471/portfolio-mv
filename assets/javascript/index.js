const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navLink = document.querySelectorAll('.nav-content');

function toggle() {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
  menuToggle.classList.remove('active');
  mobileMenu.classList.remove('active');
}

menuToggle.addEventListener('click', toggle);
navLink.forEach((btn) => {
  btn.addEventListener('click', closeMobileMenu);
});