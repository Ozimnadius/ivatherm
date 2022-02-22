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