//banner
(function () {
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
}());