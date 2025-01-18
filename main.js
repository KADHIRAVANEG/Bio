// Toggle mobile menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--active');
});

// Change active link on click
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active-link'));
        link.classList.add('active-link');
    });
});

// ScrollReveal for animation effect on scroll
const sr = ScrollReveal({
    distance: '50px',
    duration: 2500,
    delay: 400,
    easing: 'ease-out',
    origin: 'bottom'
});

sr.reveal('.home__data', { origin: 'top' });
sr.reveal('.about__container', { origin: 'left' });
sr.reveal('.contact__form', { origin: 'right' });

// Smooth scrolling for anchor links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust the offset to avoid hiding under the navbar
            behavior: 'smooth'
        });
    });
});
