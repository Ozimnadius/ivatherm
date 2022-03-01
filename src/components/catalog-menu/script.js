//catalog-menu
(function () {
    if (document.querySelector('.catalog-menu')) {
        new OzimnadAccordion({
            selector: '.catalog-menu',
            openAll: true
        });
    }
}());
