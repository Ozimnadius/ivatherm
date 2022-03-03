window.addEventListener('load', function () {
    new Mmenu();
});

class Mmenu {
    constructor(options) {
        let def = {
            selector: '[data-mmenu="main"]',
            selectorOpen: '[data-mmenu="open"]',
            selectorOpenNav: '[data-mmenu="openNav"]',
            selectorNav: '[data-mmenu="nav"]',
            active: false,
            navActive: false
        }

        Object.assign(this, def, options);

        this.main = document.querySelector(this.selector);
        this.btn = document.querySelector(this.selectorOpen);
        this.btnNav = document.querySelector(this.selectorOpenNav);
        this.nav = document.querySelector(this.selectorNav);

        this.#events();
    }

    #events() {
        this.btn.addEventListener('click', this.click);
        this.btnNav.addEventListener('click',this.clickNav);
    }

    click = () => {
        this.overflow();

        if (this.active) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.btn.classList.add('open');
        this.btn.classList.remove('close');
        this.main.classList.add('open');

        this.active = true;
    }

    close() {
        this.btn.classList.remove('open');
        this.btn.classList.add('close');
        this.main.classList.remove('open');

        this.active = false;
        this.closeNav();
    }

    clickNav=()=>{
        if (this.navActive) {
            this.closeNav();
        } else {
            this.openNav();
        }
    }

    openNav() {
        this.nav.classList.add('open');
        this.navActive = true;
    }

    closeNav() {
        this.nav.classList.remove('open');
        this.navActive = false;
    }

    overflow() {
        if (this.active) {
            document.querySelector('body').classList.remove('ovh');
        } else {
            document.querySelector('body').classList.add('ovh');
        }
    }
}