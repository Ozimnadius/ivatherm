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

    let mask = new Inputmask("+7(999)999-99-99");
    mask.mask('.input[type="tel"]');

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
if (document.querySelector('.tabs')) {
    new OzimnadTabs({
        selector: '.tabs'
    });
}
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
new Swiper('.news__swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    // autoplay: {
    //     delay: 1000,
    // },
    navigation: {
        nextEl: '.news__next',
        prevEl: '.news__prev',
    },
    pagination: {
        el: '.news__pag',
    },
});
$(".catalog__count").selectize({

});
new OzimnadAccordion({
    selector: '.catalog-menu',
    openAll: true
});
$('.filter').on('submit', function (e) {
    e.preventDefault();
});


$('.filter').on('change', function (e) {
    e.preventDefault();

    $('.filter__submit').css('top',e.target.offsetTop+'px').addClass('active');
});

$('.filter__btn').on('click', function (e) {

    $('.filter__blocks').slideToggle(300);

    this.classList.toggle('active');

});
window.addEventListener('load', function () {

    let ranges = document.querySelectorAll('.range');

    ranges.forEach(function (i) {
        let from = Number(i.dataset.from),
            to = Number(i.dataset.to),
            range = i.querySelector('.range__slider');

        noUiSlider.create(range, {
            start: [from, to],
            connect: true,
            step: 1,
            range: {
                'min': from,
                'max': to
            }
        });

        let inputs = i.querySelectorAll('.range__input');

        range.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        range.noUiSlider.on('end', function (values, handle) {
            $(inputs[handle]).trigger('change');
        });

        inputs.forEach((i, x) => {
            i.addEventListener('change', function () {
                range.noUiSlider.set(getValues(x, this.value));
            });
        });

        function getValues(i, value) {
            let arr = [null, null];
            arr[i] = value;

            return arr;
        }

    });
});

$('.filter-block__btn').on('click', function (){
    let $this = $(this);
    $this.next().slideToggle(300);
    $this.toggleClass('active');
});

$('[data-hide="btn"]').on('click', function () {
    let $this = $(this),
        $parent = $this.closest('[data-hide="parent"]'),
        items = $parent.find('[data-hidden]');

    items.slideToggle(100);
    $this.toggleClass('open');
});
$(".sort").selectize({

});
//# sourceMappingURL=script.js.map