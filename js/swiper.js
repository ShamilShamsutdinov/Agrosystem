var swiper = new Swiper(".hero__swiper", {
  slidesPerView: 1,
  spaceBetween: 1000,
  slidesPerGroup: 1,
  loop: true,

  pagination: {
    type: "bullets",
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".business__swiper", {
  slidesPerView: 1,
  spaceBetween: 1000,
  slidesPerGroup: 1,
  loop: true,

  pagination: {
    type: "bullets",
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".business-model__categories-swiper", {
  slidesPerView: 1,
  spaceBetween: 1000,
  slidesPerGroup: 1,
  loop: true,

  pagination: {
    type: "bullets",
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".matrix__swiper", {
  slidesPerView: 5,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },

    340: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 320px
    577: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    // // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
      spaceBetween: 28,
      slidesPerGroup: 1,
    },

    1340: {
      slidesPerView: 5,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
  },
  //   loopFillGroupWithBlank: true,
  pagination: {
    type: "bullets",
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
