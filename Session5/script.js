
// Select collapsable element and then opens or closes its next element which is the collapsable menu element
let btn = document.querySelectorAll(".collapsable");

btn.forEach(button => {
    button.addEventListener("click", () => {
        const nextSibling = button.nextElementSibling;
        if (nextSibling.style.display === "flex") {
            nextSibling.style.display = "none";
        } else {
            nextSibling.style.display = "flex"
        }
    });
})


// Side menu initial state
const width = window.innerWidth;

window.onload = () => {
    if (width > 700) {
        document.getElementById("side").classList.remove("position-absolute")
    } else {
        document.getElementById("side").classList.add("position-absolute")
    }
}

// Open or close the side menu by hamberger or cross button
const hamberger = document.getElementById("ham-menu");

hamberger.addEventListener("click", () => {
    document.getElementById("side").classList.remove("d-none")
})

const closeHam = document.getElementById("side-close");

closeHam.addEventListener("click", () => {
    document.getElementById("side").classList.add("d-none")
    document.getElementById("side").classList.add("position-absolute")
})