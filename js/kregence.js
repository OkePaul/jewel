const sliders = document.querySelectorAll(".img");
const slides = document.querySelectorAll(".img-p");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnscroll = new IntersectionObserver (function (
  entries,
  appearOnscroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnscroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnscroll.observe(slider);
});