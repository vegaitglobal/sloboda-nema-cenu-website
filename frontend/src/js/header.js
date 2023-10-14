const header = {
  init: function () {
    this.mobileMenu();
  },

  mobileMenu: function () {
    document
      .querySelector('.mobile-menu')
      .addEventListener('click', function (event) {
        event.preventDefault();
        var target = document.querySelector('.header__container');
        var body = document.querySelector('body');
        if (target.classList.contains('active')) {
          target.classList.remove('active');
          body.classList.remove('scroll-disabled');
        } else {
          target.classList.add('active');
          body.classList.add('scroll-disabled');
        }
      });
  }
};

export default header;
