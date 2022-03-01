//filter-block
(function () {
    $('.filter-block__btn').on('click', function (){
        let $this = $(this);
        $this.next().slideToggle(300);
        $this.toggleClass('active');
    });

    $('[data-hide="btn"]').on('click', function () {
        let $this = $(this),
            $parent = $this.closest('[data-hide="parent"]'),
            items = $parent.find('[data-hidden]');

        items.slideToggle(100);
        $this.toggleClass('open');
    });
}());