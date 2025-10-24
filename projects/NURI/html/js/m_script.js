$(function () {
  $(".menu_btn").click(function () {
    $('nav').show();
		$('nav').stop().animate({left:"0px"}, 400);
  });
  $(".m_close_bt").click(function () {
    $('nav').show();
		$('nav').stop().animate({left:"-100%"}, 400);
  });

  var mGnbOne = -1;
  $("nav .gnb_area .one_dep").each(function (q) {
    if ($(this).hasClass("on")) {
      mGnbOne = q;
    }
    $(this).click(function () {
      if (mGnbOne != q) {
        $("nav .gnb_area .one_dep").eq(mGnbOne).removeClass("on");
        $("nav .gnb_area .two_dep").eq(mGnbOne).stop().slideUp(300);
        mGnbOne = q;
        $("nav .gnb_area .one_dep").eq(mGnbOne).addClass("on");
        if ($("nav .gnb_area .two_dep").find("a").length > 0) {
          $("nav .gnb_area .two_dep").eq(mGnbOne).stop().slideDown(300);
        }
      } else if (mGnbOne == q) {
        $("nav .gnb_area .one_dep").eq(mGnbOne).removeClass("on");
        $("nav .gnb_area .two_dep").eq(mGnbOne).stop().slideUp(300);
        mGnbOne = -1;
      }
    });
  });

  $(".m_course1 > .m_tab > a").click(function(){
    var num = $(".m_course1 > .m_tab > a").index($(this));
    $(".m_course1 > .m_tab > a").removeClass("on");
    $(".m_course1 > .tb").removeClass("on");

    $('.m_course1 > .m_tab > a:eq(' + num + ')').addClass("on");
    $('.m_course1 > .tb:eq(' + num + ')').addClass("on");
  });

  $(".m_guide > .m_tab > a").click(function(){
    var num = $(".m_guide > .m_tab > a").index($(this));
    $(".m_guide > .m_tab > a").removeClass("on");
    $(".m_guide > .tb").removeClass("on");

    $('.m_guide > .m_tab > a:eq(' + num + ')').addClass("on");
    $('.m_guide > .tb:eq(' + num + ')').addClass("on");
  });

  $(".m_guide > .tb > .m_tab_in > a").click(function(){
    var num = $(".m_guide > .tb > .m_tab_in > a").index($(this));
    $(".m_guide > .tb > .m_tab_in > a").removeClass("on");
    $(".m_guide > .tb > .tb_in").removeClass("on");

    $('.m_guide > .tb > .m_tab_in > a:eq(' + num + ')').addClass("on");
    $('.m_guide > .tb > .tb_in:eq(' + num + ')').addClass("on");
  });


});
