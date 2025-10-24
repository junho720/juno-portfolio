
$(function(){
    /* gnb */
    $('#gnb > li').on('mouseenter',function(){
        $('.twoD-bg').stop().slideDown();
        $(this).children('.twoD-box').stop().slideDown();
    });
    $('#gnb > li').on('mouseleave',function(){
        $(this).children('.twoD-box').stop().slideUp();
        $('.twoD-bg').stop().slideUp();
    });
    
    /* 검색, 사이트맵 */
    $('.header-right .srch').mouseenter(function(){
        $(this).addClass('hover');
    });
    $('.header-right .srch').mouseleave(function(){
        $(this).removeClass('hover');
    });
    $('.header-right .srch').click(function(){
        if( $(this).hasClass('on')){
            $(this).removeClass('on');
            $('.search-wrap').slideUp();
        }else{
            $(this).addClass('on');
            $('.search-wrap').slideDown();
        }
    });
    
    $('.header-right .sMap').click(function(){
        $('.sMap-wrap').show();
    });
    $('.Map-top a').click(function(){
        $('.sMap-wrap').hide();
    });

    /* 언어 */
    $('#util .language > a').mouseenter(function(){
        $(this).next().fadeIn('fast');
    });
    $('#util .language > div').mouseleave(function(){
        $(this).fadeOut('fast');
    });
});