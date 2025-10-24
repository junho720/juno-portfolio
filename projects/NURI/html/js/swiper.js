$(function(){

    var imgSwiper = new Swiper('.swiper-container',{
        loop:true,
        autoplay:{
          delay:3500,
            disableOnInteration : false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable : true,
        },
    });
});