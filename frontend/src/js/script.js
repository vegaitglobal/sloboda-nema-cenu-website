//slider related news
import Swiper from 'swiper';
var init = false;
var swiper;
function swiperCard() {
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
swiperCard();
window.addEventListener('resize', swiperCard);
// scroll text
import backgroundText from './background-text';
backgroundText.init();

import dropdown from './dropdown';
dropdown.init();
