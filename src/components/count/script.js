(function () {
    $('body').on('click', '.count__down', function (e) {
        e.preventDefault();
        let btn = $(this),
            count = btn.closest('.count'),
            input = count.find('.count__input')[0];
        input.stepDown();
        input.dispatchEvent(new Event('change'));
    });

    $('body').on('click', '.count__up', function (e) {
        e.preventDefault();
        let btn = $(this),
            count = btn.closest('.count'),
            input = count.find('.count__input')[0];
        input.stepUp();
        input.dispatchEvent(new Event('change'));

    });

}());