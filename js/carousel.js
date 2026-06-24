console.log("carousel.js loaded");

const images = [
    "images/homebg2.jpeg",
    "images/hombg-2.jpeg",
    "images/homebg-3.jpeg"
];

let current = 0;

setInterval(() => {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    document.querySelector(".hero-section").style.background =
    `linear-gradient(
        rgba(255,255,255,0.65),
        rgba(255,255,255,0.65)
    ),
    url('${images[current]}')`;

    document.querySelector(".hero-section").style.backgroundSize = "cover";
    document.querySelector(".hero-section").style.backgroundPosition = "center";
    document.querySelector(".hero-section").style.backgroundRepeat = "no-repeat";

}, 4000);