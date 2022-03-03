//news
(function () {
    new Swiper('.news__swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        // autoplay: {
        //     delay: 1000,
        // },
        navigation: {
            nextEl: '.news__next',
            prevEl: '.news__prev',
        },
        breakpoints: {
            767.98: {
                slidesPerView: 2
            },
            1279.98: {
                slidesPerView: 3,
                pagination: {
                    el: '.news__pag',
                },
            }
        }
    });
}());