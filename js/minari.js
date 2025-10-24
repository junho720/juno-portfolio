$(function() {
    
    var posterSwiper = new Swiper('.trailer-slider', {
    slidesPerView: 3,       // 화면에 3개 슬라이드
    spaceBetween: 30,
    centeredSlides: true,    // 중앙 슬라이드 강조
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
        // 초기 활성 슬라이드에 클래스 추가
        this.slides.forEach(slide => slide.classList.remove('is-active'));
        this.slides[this.activeIndex].classList.add('is-active');
        },
        slideChange: function () {
        // 슬라이드 변경 시 중앙 슬라이드 클래스 갱신
        this.slides.forEach(slide => slide.classList.remove('is-active'));
        this.slides[this.activeIndex].classList.add('is-active');
        }
    }
});

    
    var section4Swiper = new Swiper('.section--stills .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        pagination: { 
            el: '.section--stills .swiper-pagination', 
            clickable: true,
        },
        breakpoints: { 
            640: { slidesPerView: 3, spaceBetween: 20 },
            720: { slidesPerView: 4, spaceBetween: 40 },
            960: { 
                slidesPerView: 5, 
                spaceBetween: 10,
                autoplay: { delay: 1000 }, 
            },
        },
    });

   
    $('.section--poster .swiper-container').each(function(idx){
        $(this).addClass('newClass-' + idx);
         
        new Swiper('.newClass-' + idx, {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            pagination: {
                el: '.section--poster .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.section--poster .swiper-button-next',
                prevEl: '.section--poster .swiper-button-prev',
            },
        });
    });
});
