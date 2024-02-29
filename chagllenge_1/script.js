const hamburgerMenuBtn = document.getElementById('hamburger-menu');
const navMenu = document.querySelector('.navbar > .links');

hamburgerMenuBtn.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === '' ? 'flex' : ''
});