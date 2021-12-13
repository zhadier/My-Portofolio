// Mobile menu (Dynamic HTML)
const openMenu = document.querySelector('.nav-Button');
const closeMenu = document.querySelector('.nav-Button-Close');
const menu = document.querySelector('.mobile-Menu');
const menuLinks = document.querySelectorAll('.nav-Menu-List li');

closeMenu.addEventListener('click', () => {
  menu.style.top = '-150%';
});

openMenu.addEventListener('click', () => {
  menu.style.top = '0%';
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.style.top = '-150%';
  });
});