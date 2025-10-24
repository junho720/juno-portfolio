$(function () {

    //선언
    var gnbMenu = $('.gnb'),
        $loginWrap = $('#login_popup'),
        $login = $loginWrap.find('.login_wrap')
    $btn_login = $('.btn_login'),
        $btn_close = $loginWrap.find('.btn_close'),
        qnaNum = -1;

    // gnb메뉴
    gnbMenu.on('mouseenter', function () {
        $(this).addClass('active');
    });
    $(".gnb_dep1 > li > a").focus(function () {
        $(this).mouseover();
    });
    gnbMenu.on('mouseleave', function () {
        $(this).removeClass('active');
    });
    $(".gnb_dep1 > li:last-child > ul > li:last-child > a").focusout(function () {
        $(this).mouseleave();
    });

    // lnb
    $('.lnb .lnb_dep1 > li').on('mouseenter', function () {
        $(this).addClass('active');
    });
    $('.lnb .lnb_dep1 > li').on('mouseleave', function () {
        $(this).removeClass('active');
    });
    //사이드퀵메뉴
    /* $(".btn_side_quick").on('click', function(e){
        if($(this).hasClass("on") == false){
            $("#side_quick").animate({"right":"-140"})
            $(this).addClass("on");
            setCookieTab( "footer_fix", "close" , 10);
        }else{
            $("#side_quick").animate({"right":"0"})
            $(this).removeClass("on");
            setCookieTab( "footer_fix", "open" , 10); 
        }
    });   
    
    
	if ( getCookieTab("footer_fix") == "close" ) {
		$("#side_quick").animate({"right":"-140"})
        $(this).removeClass("on");
	} else {
		$("#side_quick").animate({"right":"0"})
        $(this).addClass("on");
	} */


    //일반
	$(".side_btn1").click(function(e){
		$(".side1").toggle(500);
		$(".side2").toggle();	
		setCookie( "side_quick", "close" , 10);
	});
	
	$(".side_btn2").click(function(e){
		$(".side1").toggle(500);
		$(".side2").toggle(500);
		setCookie( "side_quick", "open" , 10); 
	});
	
	
	if ( getCookie("side_quick") == "close" ) {
		$(".side1").toggle();
		$(".side2").toggle();
	} else {
		$(".side1").toggle();
		$(".side2").toggle();
	}
    // 로그인창 
    $btn_login.on('click', function () {
        $loginWrap.fadeIn(200);
        $login.animate({
            'top': '50%'
        }, 900);
    });
    $btn_close.on('click', function () {
        $loginWrap.fadeOut(100, function () {
            $login.animate({
                'top': '49%'
            }, 900);
        });
    });

    //lnb
    $(".lnbArea .lnb > div > a").on('click', function () {
        if (!$(this).hasClass("on")) {
            $(".lnbArea .lnb > div > a").removeClass("on");
            $(".lnbArea .lnb > div > div").css("z-index", "0").slideUp(300);
            $(this).addClass("on");
            $(this).next().css("z-index", "15").slideDown(300);
        } else {
            $(this).removeClass("on");
            $(this).next().css("z-index", "0").slideUp(300);
        }
    });

    //자주묻는질문//
    $(".qna_list").eq(0).find("li").each(function (q) {
        $(this).find("a").click(function () {
            if (qnaNum == q) {
                $(".qna_list").eq(0).find("li a p").eq(qnaNum).removeClass("on");
                $(".qna_list").eq(0).find("li").eq(qnaNum).find(".anw").stop().slideUp(350);
                qnaNum = -1;
            } else if (qnaNum != q) {
                $(".qna_list").eq(0).find("li a p").eq(qnaNum).removeClass("on");
                $(".qna_list").eq(0).find("li").eq(qnaNum).find(".anw").stop().slideUp(350);
                qnaNum = q;
                $(".qna_list").eq(0).find("li a p").eq(qnaNum).addClass("on");
                $(".qna_list").eq(0).find("li").eq(qnaNum).find(".anw").stop().slideDown(350);
            };
        })
    });

    //탭 클래스 전환//    
    $(".tabBtn a").on('click', function (e) {
        $(".tabBtn a").removeClass("on");
        $(this).addClass("on");
    });
    //$(".semt_tabBtn a").on('click', function(e){
    // $(".semt_tabBtn a").removeClass("on");
    // $(this).addClass("on");
    //});
    // 
    $(".tabArea").each(function (i) {
        $(".tabArea").eq(i).find(".tabBtn a").each(function (j) {
            $(this).click(function () {
                $(".tabArea").eq(i).find(".tabBtn a").removeClass("on");
                $(this).addClass("on");
                $(".tabArea").eq(i).find(".tabCon").hide();
                $(".tabArea").eq(i).find(".tabCon").eq(j).show();
            });
        });
    });
    $(".semt_tabArea").each(function (i) {
        $(".semt_tabArea").eq(i).find(".semt_tabBtn a").each(function (j) {
            $(this).click(function () {
                $(".semt_tabArea").eq(i).find(".semt_tabBtn a").removeClass("on");
                $(this).addClass("on");
                $(".semt_tabArea").eq(i).find(".tabCon").hide();
                $(".semt_tabArea").eq(i).find(".tabCon").eq(j).show();
            });
        });
    });
    //탭 메뉴 전환 pay_list

    $(".tabscript_inner .con_box .mypage_tab a").click(function () {
        var num = $(".tabscript_inner .con_box .mypage_tab a").index($(this));
        $(".tabscript_inner .con_box .mypage_tab a").removeClass("on");
        $(".tabscript_inner .con_box .tab").removeClass("on");

        $('.tabscript_inner .con_box .mypage_tab a:eq(' + num + ')').addClass("on");
        $('.tabscript_inner .con_box .tab:eq(' + num + ')').addClass("on");
    });

    //탭 메뉴 전환 explain
    $(".tabscript_inner .mypage_tab a").click(function () {
        var num = $(".tabscript_inner .mypage_tab a").index($(this));
        $(".tabscript_inner .mypage_tab a").removeClass("on");
        $(".tabscript_inner .img_vb").removeClass("on");

        $('.tabscript_inner .mypage_tab a:eq(' + num + ')').addClass("on");
        $('.tabscript_inner .img_vb:eq(' + num + ')').addClass("on");
    });

    //학점은행제
    $(".guide_inner .tabBtn a").click(function () {
        var num = $(".guide_inner .tabBtn a").index($(this));
        $(".guide_inner .tabBtn a").removeClass("on");
        $(".guide_inner .guide_con").removeClass("on");

        $('.guide_inner .tabBtn a:eq(' + num + ')').addClass("on");
        $('.guide_inner .guide_con:eq(' + num + ')').addClass("on");
    });

    // 클릭 열기
    $(document).on("click", ".show_btn a", function () {
        if ($('.show_con').css("display") == "none") {
            $('.show_con').show();
        } else {
            $('.show_con').hide();
        }
    });


    출처: https: //aramk.tistory.com/48 [깨순이네]

        function IsEmpty(str) {
            for (var i = 0; i < str.length; i++) {
                if (str.substring(i, i + 1) != " ") return false;
            }
            return true;
        }



    function OpenWindow(nLink, nTarget, nWidth, nHeight, xPos, yPos) {
        if (typeof nLink == "object") url = nLink.href;
        else url = nLink;

        adjX = xPos ? xPos : (window.screen.width / 2 - nWidth / 2);
        adjY = yPos ? yPos : (window.screen.height / 2 - nHeight / 2 - 50);
        var qResult = window.open(url, nTarget, "width=" + nWidth + ", height=" + nHeight + ",left=" + adjX + ",top=" + adjY + ",toolbar=no,status=no,scrollbars=yes,resizable=no");
        //return qResult;
    }

    function OpenWindows(nLink, nTarget, nWidth, nHeight, xPos, yPos) {
        if (typeof nLink == "object") url = nLink.href;
        else url = nLink;

        adjX = xPos ? xPos : (window.screen.width / 2 - nWidth / 2);
        adjY = yPos ? yPos : (window.screen.height / 2 - nHeight / 2 - 50);
        var qResult = window.open(url, nTarget, "width=" + nWidth + ", height=" + nHeight + ",left=" + adjX + ",top=" + adjY + ",toolbar=no,status=no,scrollbars=1,resizable=no");
        //return qResult;
    }

});