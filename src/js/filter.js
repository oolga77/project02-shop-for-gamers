function app() {
  const buttons = document.querySelectorAll('.button');
  const cards = document.querySelectorAll('.box');

  function filter(category, items) {
    items.forEach(item => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';
      if (isItemFiltered && !isShowAll) {
        item.classList.add('visually-hidden');
      } else {
        item.classList.remove('visually-hidden');
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
