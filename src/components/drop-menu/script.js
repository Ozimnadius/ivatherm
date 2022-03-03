window.addEventListener('click', function (e){
   let target = e.target,
       drop = document.querySelector('.drop-menu__drop');

   if (target.closest('.drop-menu__btn')){
       console.log(e);
       e.preventDefault();
       drop.classList.add('active');
   } else{
       drop.classList.remove('active');
   }
});
