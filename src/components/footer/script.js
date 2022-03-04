(function () {
    if (media.mobile.matches) {
        document.querySelectorAll('.footer__title--arr').forEach(function (i) {
            i.addEventListener('click', function (e) {
                let $this = $(this),
                    list = $this.next();

                list.slideToggle(300);
                $this.toggleClass('active');

            });
        });
    }
}());