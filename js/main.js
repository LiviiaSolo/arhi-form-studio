// BURGER MENU
const burgerButton = document.querySelector(".menu__btn");
const mobileMenu = document.querySelector(".menu__list");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});



// FIX: Close menu on resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("active");
    burgerButton.classList.remove("active");
  }
});


// SWIPER
function setEqualProjectCardHeights() {
  const projectCards = document.querySelectorAll(".projects__item");
  let maxHeight = 0;

  projectCards.forEach((card) => {
    card.style.height = "auto";
    const height = card.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  projectCards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}

const projectsSlider = new Swiper(".projects__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  on: {
    init: setEqualProjectCardHeights,
    resize: setEqualProjectCardHeights,
    slideChangeTransitionEnd: setEqualProjectCardHeights,
  },

  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3.2 },
  },

  navigation: {
    nextEl: ".projects__arrow-next",
    prevEl: ".projects__arrow-prev",
  },
});



// SECTION REVEAL ON SCROLL
const animatedSections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

animatedSections.forEach((section) => sectionObserver.observe(section));
