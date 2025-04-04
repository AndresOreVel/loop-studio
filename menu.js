document.addEventListener("DOMContentLoaded", function(){
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navList = document.querySelector(".nav__list");
    const nav = document.querySelector(".header__nav");

    if (menuIcon && closeIcon && navList && nav) {
        menuIcon.addEventListener("click", function () {
            navList.classList.add("active");
            nav.classList.add("menu-open");
        });

        closeIcon.addEventListener("click", function () {
            navList.classList.remove("active");
            nav.classList.remove("menu-open");
        });
    } else {
        console.error("Uno o más elementos no fueron encontrados en el DOM.");
    }
});