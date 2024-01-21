// Nav Effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if(window.scrollY > 10) {
        nav.classList.add("nav--scroll");
    }else {
        nav.classList.remove("nav--scroll");
    }
});


// Scroll Reveal 

const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 500,
    reset: false,
});


sr.reveal(".grid--item", {
    delay:"500",
});