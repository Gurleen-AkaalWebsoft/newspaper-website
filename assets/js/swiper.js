document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper', {
      loop: true,
      //  autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        1920: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        1028: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    });
  });