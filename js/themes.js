const nav = document.querySelector(".nav");
const footer = document.querySelector(".container_footer");
const navList = document.querySelectorAll(".nav_list");

if (localStorage.getItem("bg-color") !== null) {
    nav.style.background = localStorage.getItem("bg-color");
    footer.style.background = localStorage.getItem("bg-color");
}

function white() {
    console.log("white");

    nav.style.background = "aqua";
    nav.style.transition = "1s";
    footer.style.background = "aqua";
    footer.style.transition = "1s";

    localStorage.setItem("bg-color", "aqua");

    navList.forEach(el => {
        el.style.color = "black";
        el.style.transition = "1s";
    })
}

function black() {
    console.log("black");

    nav.style.background = "gray";
    nav.style.transition = "1s";
    footer.style.background = "gray";
    footer.style.transition = "1s";

    localStorage.setItem("bg-color", "gray");

    navList.forEach(el => {
        el.style.color = "white";
        el.style.transition = "1s";
    })
}