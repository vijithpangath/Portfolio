/*
JS Import
*/

//=require app/base.js

var swiper = new Swiper('#slider', {
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 0,
  mousewheel: true,
  breakpoints: {
    768: {
      direction: 'horizontal'
    }
  },
});

feather.replace();


$('.menu-trigger').click(function(){
  $('body').toggleClass('menu-open');
});