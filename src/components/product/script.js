//product
(function () {

    let swiperProductThumbs = new Swiper(".product__thumbs", {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });

    let swiperProductGallery = new Swiper(".product__swiper", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".product__next",
            prevEl: ".product__prev",
        },
        thumbs: {
            swiper: swiperProductThumbs,
        },
    });


    let count = document.querySelector('.product__count input');

    if (count) {
        document.querySelector('.product__count input').addEventListener('change', function () {
            let price = document.querySelector('[data-product="price"]').innerHTML;

            let sum = Number(price * this.value).toLocaleString(true);

            document.querySelector('.product__buy-price').innerHTML = sum + ' руб.';
        });
    }
}());