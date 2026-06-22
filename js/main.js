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



// ----------------
// Submit a request

const requestButtons = document.querySelectorAll(".open-request-modal");
const requestModal = document.getElementById("requestModal");
const closeRequestBtn = document.getElementById("closeModal");


// Open modal from any button
requestButtons.forEach(button => {
    button.addEventListener("click", () => {
        requestModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});


// Close by button ×
closeRequestBtn.addEventListener("click", closeRequestModal);


// Close on click on background
requestModal.addEventListener("click", (e) => {
    if (e.target === requestModal) {
        closeRequestModal();
    }
});


// Close by pressing Esc key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeRequestModal();
    }
});


// Function for closing the modal
function closeRequestModal() {
    requestModal.classList.remove("active");

    // unblock the scroll only if there are no other open modals
    if (!document.querySelector(".modal.active")) {
        document.body.style.overflow = "";
    }
}

// --------------
// Catalog-modal
const openCatalogBtn = document.getElementById("openCatalogModal");
const closeCatalogBtn = document.getElementById("closeCatalogModal");
const catalogModal = document.getElementById("catalogModal");


openCatalogBtn.addEventListener("click", () => {
  catalogModal.classList.add("active");
  document.body.style.overflow = "hidden";
});


closeCatalogBtn.addEventListener("click", () => {
  closeCatalog();
});


catalogModal.addEventListener("click", (e) => {
  if (e.target === catalogModal) {
    closeCatalog();
  }
});


function closeCatalog() {
  catalogModal.classList.remove("active");

  if (!document.querySelector(".modal.active")) {
    document.body.style.overflow = "";
  }
}


// Modal-projects
const projectLinks = document.querySelectorAll(".projects__item-link");

const projectModal = document.getElementById("projectModal");
const closeProjectBtn = document.getElementById("closeProjectModal");

const projectImage = document.querySelector(".project-modal__img");
const projectTitle = document.querySelector(".project-modal__title");


// Opening a modal window
projectLinks.forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".projects__item");

        const img = card.querySelector("img");
        const title = card.querySelector(".projects__item-title");


        // We put data from the card
        projectImage.src = img.src;
        projectImage.alt = img.alt;

        projectTitle.textContent = title.textContent;


        projectModal.classList.add("active");
        document.body.style.overflow = "hidden";

    });

});


// Closing the cross
closeProjectBtn.addEventListener("click", closeProjectModal);


// Background closure
projectModal.addEventListener("click", (e) => {

    if (e.target === projectModal) {
        closeProjectModal();
    }

});


// ESC
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeProjectModal();
    }

});


// Closing function
function closeProjectModal() {

    projectModal.classList.remove("active");


    if (!document.querySelector(".modal.active")) {
        document.body.style.overflow = "";
    }

}
