const swiper = new Swiper('#swiper-rooms', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
        depth: 200,
        modifier: 1,
        rotate: 50,
        scale: 1.25,
        slideShadows: false,
        stretch: 14
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  export {swiper}