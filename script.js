const navbar = document.querySelector('.navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const dropdown = document.getElementById('dropdown');

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');
  }
});

// Hamburger toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Dropdown toggle (mobile)
dropdown.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  }
});

// Close on outside click
document.addEventListener('click', function (event) {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove('open');
    dropdown.classList.remove('open');
  }
});



// 
