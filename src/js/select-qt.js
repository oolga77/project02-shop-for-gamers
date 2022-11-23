const quantityMenu = document.querySelector('[select-menu-qt]'),
  quantityBtn = quantityMenu.querySelector('[select-btn-qt]'),
  options_qt = quantityMenu.querySelectorAll('[option-qt]'),
  Btn_text = quantityMenu.querySelector('[sBtn-text-qt]');

quantityBtn.addEventListener('click', () =>
  quantityMenu.classList.toggle('active')
);

options_qt.forEach(option => {
  option.addEventListener('click', () => {
    let selectedOptionqt = option.querySelector('[option-text-qt]').innerText;
    Btn_text.innerText = selectedOptionqt;

    quantityMenu.classList.remove('active');
  });
});
