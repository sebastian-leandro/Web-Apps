const $ = selector => document.querySelector(selector);

// Nav Effect

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    $('header').classList.add('effect');
  }
})

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