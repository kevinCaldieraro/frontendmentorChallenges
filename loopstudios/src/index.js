const headerMenu = document.querySelector('#header-menu');
const hamburgerOpen = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');
const menuItems = document.querySelectorAll('#header-menu li a');

function toggleMenu() {
  if (window.innerWidth <= 1170) {
    headerMenu.classList.toggle('active');
    hamburgerOpen.classList.toggle('disabled');
    hamburgerClose.classList.toggle('active');
  }
}

hamburgerOpen.addEventListener('click', toggleMenu);

hamburgerClose.addEventListener('click', toggleMenu);

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', toggleMenu);
});
