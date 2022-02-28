$('.filter').on('submit', function (e) {
    e.preventDefault();
});


$('.filter').on('change', function (e) {
    e.preventDefault();

    $('.filter__submit').css('top',e.target.offsetTop+'px').addClass('active');
});

$('.filter__btn').on('click', function (e) {

    $('.filter__blocks').slideToggle(300);

    this.classList.toggle('active');

});