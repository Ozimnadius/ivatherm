//filter
(function () {
    $('.filter').on('submit', function (e) {
        e.preventDefault();
    });


    $('.filter').on('change', function (e) {
        e.preventDefault();

        $('.filter__submit').css('top', e.target.offsetTop + 'px').addClass('active');
    });

    $('.filter__btn').on('click', function (e) {

        if (window.matchMedia("(min-width: 1920px)").matches) {
            $('.filter__blocks').slideToggle(300);
            this.classList.toggle('active');
        } else {
            $('.aside__filter').removeClass('active');
        }

    });
}());

if (document.querySelector('.filter')) {
    window.addEventListener('click', function (e) {
        let target = e.target,
            filter = document.querySelector('.aside__filter');

        if (target.closest('.catalog__filter-btn')) {
            filter.classList.add('active');
        } else if (!target.closest('.aside__filter')) {
            filter.classList.remove('active');
        }
    });
}