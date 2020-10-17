let accueil = document.querySelector(".accueil");
let hauteurElt = getComputedStyle(accueil).height;
let header = document.querySelector(".header");

window.onscroll = function() {
    if (document.documentElement.scrollTop >= 500) {
        header.classList.toggle("headerActif");
    }
}
