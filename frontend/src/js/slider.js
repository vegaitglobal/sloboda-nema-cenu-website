import Swiper from 'swiper';
const slider = {
  init: function () {
    this.slider();
    window.addEventListener('resize', slider);
  },

  slider: function () {
    var init = false;
    var swiper;
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        swiper = new Swiper('.js-swiper', {
          direction: 'horizontal',
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 10
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
};

export default slider;
