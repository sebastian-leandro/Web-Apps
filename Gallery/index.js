const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

// Nav Effect

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    $('header').classList.add('effect');
  }
})

function loadImages(target) {
  target.classList.add('loading');
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.75,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadImages(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

const observe = $$('.grid--item')
observe.forEach(item => {
  observer.observe(item);
});

