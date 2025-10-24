$(function () {
	//슬라이더

	$('.bxslider').bxSlider({
		auto: true,
		autoControls: true,
		stopAutoOnClick: true,
		pager: true,
		slideWidth: 1920
	});
	
	//선언
	var gnbMenu = $('.gnb'),
		sideMenu = $('.sub_side .depth_item'),
		qnaNum = -1;
	$loginWrap = $('#login_popup'),
		$login = $loginWrap.find('.login_wrap')
	$btn_login = $('.utill_login'),
		$btn_close = $loginWrap.find('.btn_close'),

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

	//사이드퀵메뉴
	$(".btn_side_quick").on('click', function (e) {
		if ($(this).hasClass("on") == false) {
			$("#side_quick").animate({
				"right": "-140"
			})
			$(this).addClass("on");
		} else {
			$("#side_quick").animate({
				"right": "0"
			})
			$(this).removeClass("on");
		}
	});

	// 로그인창 
	$btn_login.on('click', function () {
		$loginWrap.fadeIn(200);
		$login.animate({
			'left': '50%'
		}, 900);
	});
	$btn_close.on('click', function () {
		$loginWrap.fadeOut(100, function () {
			$login.animate({
				'left': '49%'
			}, 900);
		});
	});

	// 탭전환

    $(".tab_menu a").click(function () {
        var num = $(".tab_menu a").index($(this));
        $(".tab_menu a").removeClass("on");
        $(".tab_con").removeClass("on");

        $('.tab_menu a:eq(' + num + ')').addClass("on");
        $('.tab_con:eq(' + num + ')').addClass("on");
    });

	$(".tab_menu2 a").click(function () {
        var num = $(".tab_menu2 a").index($(this));
        $(".tab_menu2 a").removeClass("on");
        $(".tab_con2").removeClass("on");

        $('.tab_menu2 a:eq(' + num + ')').addClass("on");
        $('.tab_con2:eq(' + num + ')').addClass("on");
    });

	// side메뉴
	sideMenu.on('mouseenter', function () {
		$(this).addClass('active');
	});
	$(".depth_list > li > a").focus(function () {
		$(this).mouseover();
	});
	sideMenu.on('mouseleave', function () {
		$(this).removeClass('active');
	});
	$(".depth2_list > li:last-child > a,.depth_list > li > a").focusout(function () {
		$(this).mouseleave();
	});

	//자주 묻는 질문
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

	// 아코디언

	var accordionBtn = document.querySelectorAll('.accordionTitle');
	var allTexts = document.querySelectorAll('.accordion_list');

	accordionBtn.forEach(function (el) {
		el.addEventListener('click', toggleAccordion)
	});

	function toggleAccordion(el) {
	var targetText = el.currentTarget.nextElementSibling.classList;
	var targetAccIcon = el.currentTarget.children[0];
	var target = el.currentTarget;
	
	if (targetText.contains('show')) {
		targetText.remove('show');
		target.classList.remove('accordionTitleActive');
	} 
	else {
		accordionBtn.forEach(function (el) {
			el.classList.remove('accordionTitleActive');
			
			allTexts.forEach(function (el) {
				el.classList.remove('show');
			})
			
		})
		
			targetText.add('show');
			target.classList.add('accordionTitleActive');
		}  
	}

	// slide

	var swiper = new Swiper(".mySwiper", {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
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
