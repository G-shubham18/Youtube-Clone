let menu = document.querySelector(".menu-icon");
let side = document.querySelector(".sidebar");
let container = document.querySelector(".container")
let count = 0
menu.addEventListener('click', () => {
    side.classList.toggle("small-sidebar")
    container.classList.toggle("larg-container")
})

