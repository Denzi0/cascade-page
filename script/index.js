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
  new Swiper(".cascade-d-testimonial-swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
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
