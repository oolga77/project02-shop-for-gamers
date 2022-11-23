const payMenu = document.querySelector('[select-menu-pay]'),
  payBtn = payMenu.querySelector('[select-btn-pay]'),
  optionsPay = payMenu.querySelectorAll('[option-pay]'),
  sBtn_Pay = payMenu.querySelector('[sBtn-text-pay]');

payBtn.addEventListener('click', () => payMenu.classList.toggle('active'));

optionsPay.forEach(option => {
  option.addEventListener('click', () => {
    let selectedOptionPay = option.querySelector('[option-text-pay]').innerText;
    sBtn_Pay.innerText = selectedOptionPay;

    payMenu.classList.remove('active');
  });
});
