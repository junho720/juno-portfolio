$(function(){

    /* lnb */
    var dep1 = $(".lnb > ul > li > a.dep-1"),
        dep2 = $(".lnb ul.dep-2 > li > a"),
        dep3 = $(".lnb ul.dep-2 > li > ul.dep-3 > li > a");

    dep1.click(function(){
        $(this).parent().siblings().children(".dep-2").slideUp();
        $(this).parent().siblings().children(".dep-2").children().children().removeClass("active");
        $(this).siblings().slideDown();
        $(this).addClass("active");

        if($(this).hasClass("active")){
            $(this).parent().siblings().children(".dep-1").removeClass("active");
        }else{
            $(this).addClass("active");
            $(this).slideDown();
        }
    });
    dep2.click(function(){
        $(this).parent().siblings().children(".dep-3").slideUp();
        $(this).siblings().slideDown();
        $(this).addClass("active");

        if($(this).hasClass("active")){
            $(this).parent().siblings().children("a").removeClass("active");
        }else{
            $(this).addClass("active");
            $(this).slideDown();
        }
    });
    dep3.click(function(){
        $(this).addClass("active");

        if($(this).hasClass("active")){
            $(this).parent().siblings().children("a").removeClass("active");
        }else{
            $(this).addClass("active");
        }
    });

});