let filterBlocksAccordion = new OzimnadAccordion({
    selector:'.filter__blocks',
    openAll: true
});

$('.filter__btn').on('click', function (e){
   $('.filter__blocks').slideToggle(300);

   this.classList.toggle('active');
});