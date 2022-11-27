(()=> {
        const refs= {
            openMenuBtn: document.querySelector('[data-menu-open]'),
            menu: document.querySelector('[data-menu]'),
            body: document.querySelector('body'),
        }

        ;

        refs.openMenuBtn.addEventListener('click', toggleMenu);

        function toggleMenu() {
            refs.menu.classList.toggle('is-open');
            refs.body.classList.toggle('no-scroll');
            refs.openMenuBtn.classList.toggle('is-open');

        }
    })();