//slider
(function () {
    let sliders = document.querySelectorAll('[data-slider]');

    sliders.forEach(function (slider) {

        let elem = slider.querySelector('.slider__swiper'),
            settings = {
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                    nextEl: slider.querySelector('.slider__next'),
                    prevEl: slider.querySelector('.slider__prev'),
                },
            };

        if (elem.dataset.sliderType == 2) {
            settings.slidesPerView = 'auto'
        }

        new Swiper(elem, settings);

    });
}());