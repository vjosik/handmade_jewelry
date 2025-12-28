const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-menu]');

openMenuBtn.onclick = toggleMenu;
closeMenuBtn.onclick = toggleMenu;
mobileMenu.onclick = navigate;

function toggleMenu() {
  mobileMenu.classList.toggle('is-open');
}

function navigate(event) {
  const currentLink = event.target.closest('.mobile-menu-link');

  if (currentLink) {
    toggleMenu();
  }
}
