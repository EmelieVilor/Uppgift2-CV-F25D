const toggleBtn = document.querySelector (".menu-icon");
const navMenu = document.querySelector (".menu");



//lägger till en funktion på knappen toggleBtn
toggleBtn.addEventListener("click", hamburgerMenu);


//vad som händer när man trycker på toggleBtn
function hamburgerMenu() {
    navMenu.classList.toggle("show");
    toggleBtn.classList.toggle("fa-x");
}

