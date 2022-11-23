(()=> {
        const mobmenuBtnRef=document.querySelector('[data-menu-button]');
        const mobileMobmenuRef=document.querySelector('[data-menu]');

        mobmenuBtnRef.addEventListener('click', ()=> {
                console.log('hi') const expanded=mobmenuBtnRef.getAttribute('aria-expended')==='true' || false;
                mobmenuBtnRef.classList.toggle('is-open');
                mobmenuBtnRef.setAttribute('aria-expended', !expanded);

                mobileMobmenuRef.classList.toggle('is-open');
        });
})();