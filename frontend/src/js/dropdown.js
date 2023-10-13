const dropdown = {
  init: function () {
    this.filterDropdown();
  },

  filterDropdown: function () {
    if (!document.querySelector('.checkbox-dropdown-btn')) {return; }
    document
      .querySelector('.checkbox-dropdown-btn')
      .addEventListener('click', function (event) {
        event.preventDefault();
        var target = document.querySelector('.checkbox-dropdown-list');
        if (target.classList.contains('is-active')) {
          target.classList.remove('is-active');
        } else {
          target.classList.add('is-active');
        }
      });
  }
};

export default dropdown;
