// Mobile menu (Dynamic HTML)
const openMenu = document.querySelector('.nav-Button');
const closeMenu = document.querySelector('nav-Button-Close')
const Menu = document.querySelector('.mobile-Menu');

closeMenu.addEventListener('click', () => {
   closeMenu.classList.toggle("is-active");
    Menu.style.left = "-100%";
})

openMenu.addEventListener("click", () => {
    openMenu.classList.toggle("is-active");
    Menu.style.left = "0%";
});

menuLinks.forEach((el) => {
    el.addEventListener("click", () => {
        mobileMenu.style.left = "-100%";
    });
});