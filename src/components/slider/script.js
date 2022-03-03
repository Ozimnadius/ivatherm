//slider
(function () {
    let sliders = document.querySelectorAll('[data-slider]');

    sliders.forEach(function (slider) {

        let elem = slider.querySelector('.slider__swiper'),
            settings = {
                slidesPerView: 2,
                spaceBetween: 10,
                navigation: {
                    nextEl: slider.querySelector('.slider__next'),
                    prevEl: slider.querySelector('.slider__prev'),
                },
                breakpoints: {
                    767.98: {
                        spaceBetween: 20
                    },
                    1279.98: {
                        slidesPerView: 4
                    }
                }
            };

        if (elem.dataset.sliderType == 2) {
            settings.slidesPerView = 'auto';
            settings.breakpoints = {
                767.98: {
                    spaceBetween: 20
                },
                1279.98: {
                    slidesPerView: 'auto'
                }
            }
        }

        new Swiper(elem, settings);

    });
}());