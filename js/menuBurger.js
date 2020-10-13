/* ---------- MENU BURGER ---------- */

const boutonBurger = document.querySelector(".boutonBurger");
const menuBurger = document.querySelector(".menuBurger");
const elts = document.querySelectorAll(".elt");

boutonBurger.addEventListener("click", () => {
    boutonBurger.classList.toggle("active");
    menuBurger.classList.toggle("menuBurgerOpen");
})

for (let i = 0; i < elts.length; i++) {
    elts[i].addEventListener("click", function () {
        boutonBurger.classList.toggle("active");
        menuBurger.classList.toggle("menuBurgerOpen");
    })
}