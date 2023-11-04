// Navbar Variables
const nav = document.querySelector('.mobile-nav') 
const navMenuBtn = document.querySelector('.nav-menu-btn') 
const navCloseBtn = document.querySelector('.nav-close-btn');

//Nav Toggle Function
const navToggleFunc = () => nav.classList.toggle('active');
navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);
