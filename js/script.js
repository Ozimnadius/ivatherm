//USER

//COMPONENTS


// common.js
const jsTools = {
    getNumber: function (str) {
        return parseInt(str.replace(/[^\d]/g, ''));
    },
    getWindowWidth: function () {
        return document.documentElement.clientWidth;
    },
    getNumberFormat: function (number, decimals, dec_point, thousands_sep) {
        var i, j, kw, kd, km;
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }
        if (dec_point == undefined) {
            dec_point = ",";
        }
        if (thousands_sep == undefined) {
            thousands_sep = ".";
        }
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        if ((j = i.length) > 3) {
            j = j % 3;
        } else {
            j = 0;
        }
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
        return km + kw + kd;
    }
};

const media = {
    mobile: window.matchMedia("(max-width: 767.98px)"),
}

window.addEventListener("load", function () {

    $('.input[type="tel"]').inputmask("+7(999)999-99-99");

});

const swiperBanner = new Swiper('.banner__swiper', {
    loop: true,
    navigation: {
        nextEl: '.banner__next',
        prevEl: '.banner__prev',
    },
    autoplay: {
        delay: 5000,
    },
});
new OzimnadTabs('.tabs');
let sliders = document.querySelectorAll('.slider');


sliders.forEach(function (slider){
    new Swiper(slider.querySelector('.slider__swiper'), {
        slidesPerView: 4,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 1000,
        // },
        navigation: {
            nextEl: slider.querySelector('.slider__next'),
            prevEl: slider.querySelector('.slider__prev'),
        },
    });
});
//# sourceMappingURL=script.js.map