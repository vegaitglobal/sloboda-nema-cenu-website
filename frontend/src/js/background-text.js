const backgroundText = {
  textScroll: document.querySelector('.js-scroll'),
  scrollTextSelector: '.js-scroll-text',
  outerScrollTextSelector: '.js-outer-scroll-text',

  init: function () {
    if (this.textScroll) {
      this.loop();
    }
  },

  loop: function () {
    const content = this.textScroll.querySelector(this.scrollTextSelector);
    repeatContent(content, this.textScroll.offsetWidth);

    const el = this.textScroll.querySelector(this.outerScrollTextSelector);
    el.innerHTML += el.innerHTML;

    function repeatContent(el, till) {
      const html = el.innerHTML;
      let counter = 0;

      while (el.offsetWidth < till && counter < 5) {
        el.innerHTML += html;
        counter += 1;
      }
    }
  }
};

export default backgroundText;
