const dropdown = {
  init: function () {
    this.filterDropdown();
  },

  filterDropdown: function () {
    let dropdown = document.querySelectorAll('.js-dropdown-btn');
    dropdown.forEach((button) => {
      button.addEventListener('click', function (e) {
        e.target.parentNode.classList.toggle('is-active');
      });
    });
  }
};

export default dropdown;
