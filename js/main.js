// Smooth scroll
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

new fullpage('#fullpage', {
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',
  scrollingSpeed: 900,
  anchors: ['main', 'about', 'projects', 'designs', 'contact'],
  menu: '#header .menu',       // 상단 메뉴 클릭 시 이동
  keyboardScrolling: true,     // 키보드 ↑↓ 이동 가능
  touchSensitivity: 5,         // 모바일 터치 민감도 (낮추면 실수 이동 방지)
  dragAndMove: false,          // 드래그 이동 방지 (fullPage.js 4 이상)
  scrollHorizontally: false,   // 가로 스크롤 방지
  responsiveWidth: 900,

  // ✅ hero 섹션일 때만 영상 재생
  onLeave: function (origin, destination, direction) {
    const video = document.querySelector('.hero .bg-video');
    if (!video) return;

    if (destination.index === 0) {
      video.play().catch(err => console.log('Autoplay blocked:', err));
    } else {
      video.pause();
    }
  }
});

// 팝업 열기
const popup = document.getElementById("popup");
const openBtn = document.getElementById("openPopup");
const closeBtn = popup.querySelector(".close-popup");

openBtn.addEventListener("click", e => {
  e.preventDefault();
  popup.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// 배경 클릭 시 닫기
popup.addEventListener("click", e => {
  if (e.target === popup) popup.classList.remove("active");
});
