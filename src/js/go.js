(() => {
  const refs = {
    openGoBtn: document.querySelector("[data-go-open]"),
    closeGoBtn: document.querySelector("[data-go-close]"),
    go: document.querySelector("[data-go]"),
  };

  refs.openGoBtn.addEventListener("click", toggleGo);
  refs.closeGoBtn.addEventListener("click", toggleGo);

  function toggleGo() {
    refs.go.classList.toggle("is-hidden");
  }
})();