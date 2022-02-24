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