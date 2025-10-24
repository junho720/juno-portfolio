$(function(){
    
    /* news 영역 */
    var $tabMenu = $('.news-left .tab-menu li'),
        $tabCon = $('.news-left .tab-con-wrap .tab-con');
    $tabMenu.on('click',function(e){
        e.preventDefault();
        $tabMenu.removeClass('on');
        $(this).addClass('on');
        let _href = $(this).children('a').attr('href');
        $tabCon.hide();
        $( _href ).show();
    });
    var swiper1 = new Swiper('.banner-t .swiper-container', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });
    
    $('.banner-t #prev').click(function(){
        swiper1.slidePrev();
    });
    $('.banner-t #next').click(function(){
        swiper1.slideNext();
    });
    
    $('.banner-t #play').on('click',function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            swiper1.autoplay.stop();
        }else{
            $(this).addClass('on');
            swiper1.autoplay.start();
        }
    });
    
    var swiper2 = new Swiper('.banner-b .swiper-container', {
        slidesPerView: 1,
        loop: true,
        pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });
    
    
    $('.banner-b #prev').click(function(){
        swiper2.slidePrev();
    });
    $('.banner-b #next').click(function(){
        swiper2.slideNext();
    });
    
    $('.banner-b #play').on('click',function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            swiper2.autoplay.stop();
        }else{
            $(this).addClass('on');
            swiper2.autoplay.start();
        }
    });
    
    /* 사업 영역 */
    $('.support-wrapper').bxSlider({
        slideMargin: 20,
        minSlides: 6,
        maxSlides: 6,
        moveSlides: 1,
        slideWidth: 180,
        nextText : '다음',
        prevText : '이전',
        nextSelector : '#support-next' ,
        prevSelector : '#support-prev',
        pager : false,
    });
    
    var swiper3 = new Swiper('.main-con3 .swiper-container', {
        slidesPerView: 7,
        moveSlides: 1,
        loop: true,
        autoplay: {
            delay: 1000,
        },
    });
});