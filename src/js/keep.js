  (() => {
  const refs = {
    openKeepBtn: document.querySelector("[data-keep-open]"),
    closeKeepBtn: document.querySelector("[data-keep-close]"),
    keep: document.querySelector("[data-keep]"),
  };

  refs.openKeepBtn.addEventListener("click", toggleKeep);
  refs.closeKeepBtn.addEventListener("click", toggleKeep);

  function toggleKeep() {
    refs.keep.classList.toggle("is-hidden");
  }
})();