function app() {
  const buttons = document.querySelectorAll('.accessories-button');
  const cards = document.querySelectorAll('.accessories-item');

  function filter(category, items) {
    items.forEach(item => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';
      if (isItemFiltered && !isShowAll) {
        item.classList.add('is-hidden');
      } else {
        item.classList.remove('is-hidden');
      }
    });
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });
}
app();
