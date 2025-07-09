document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".cascade-d-testimonial-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20, // Optional: adds spacing between slides
    speed: 5000, // Control how fast the slides move (higher = slower)
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".cascade-d-accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.parentElement;
      const allItems = document.querySelectorAll(".cascade-d-accordion-item");

      allItems.forEach((i) => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".cascade-d-nav-toggle");
  const navMenu = document.querySelector(".cascade-d-nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
