$(function() {
    
    // 메인 슬라이더
    var mainSwiper = new Swiper(".main-slider", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "fade", 
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });

});
