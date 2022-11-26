(() => {
  const refs = {
    openSendBtn: document.querySelector('[data-send-open]'),
    closeSendBtn: document.querySelector('[data-send-close]'),
    send: document.querySelector('[data-send]'),
  };

  refs.openSendBtn.addEventListener('click', toggleSend);
  refs.closeSendBtn.addEventListener('click', toggleSend);

  function toggleSend() {
    refs.send.classList.toggle('is-hidden');
  }
})();

