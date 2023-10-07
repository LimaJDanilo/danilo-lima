const mobileMenuButton = document.querySelector('#mobileMenuButton');
const mobileMenu = document.querySelector('#mobileMenu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('-translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
});

function hiddenMenu() {
  mobileMenu.classList.toggle('-translate-x-full');
  mobileMenu.classList.toggle('translate-x-0');
}