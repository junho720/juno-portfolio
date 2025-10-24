// Scroll progress
window.addEventListener("scroll", () => {
  const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector(".progress-bar").style.width = `${progress}%`;
});

// Scroll top
document.getElementById("scrollTop").addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

// 🌙☀️ 다크모드 토글 (아이콘 교체 + 애니메이션)
const darkBtn = document.getElementById("darkModeToggle");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  // 아이콘 전환
  darkBtn.classList.add("switching");
  setTimeout(() => {
    darkBtn.textContent = isDark ? "☀️" : "🌙";
    darkBtn.classList.remove("switching");
  }, 200); // 아이콘 변경 시점
});



// custom cursor
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", e => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// ===== Film Countdown (3→2→1→🎬 + 링 그려짐 + 오버레이 제거 후 타이틀 표시) =====
window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".film-countdown");
  const countText = document.querySelector(".film-countdown .count");
  const content = document.querySelector(".intro__content");

  // 숫자 변경
  const seq = ["3", "2", "1", "🎬"];
  let i = 0;

  const tick = setInterval(() => {
    countText.textContent = seq[i];
    i++;
    if (i === seq.length) {
      clearInterval(tick);
      // 🎬 표시 잠깐 유지 → 오버레이 페이드아웃 → 컨텐츠 표시
      setTimeout(() => {
        overlay.classList.add("is-done");     // 오버레이 사라짐
        setTimeout(() => {
          content.classList.add("show");      // 아이콘/텍스트 나타남
        }, 600);                               // 오버레이 페이드 시간과 맞춤
      }, 400);                                 // 🎬 유지 시간
    }
  }, 1000);
});


// Star rating
document.querySelectorAll(".stars").forEach(starBox => {
  const stars = starBox.querySelectorAll("span");
  stars.forEach((star, i) => {
    star.addEventListener("click", () => {
      stars.forEach((s, j) => s.classList.toggle("active", j <= i));
    });
  });
});

// Goods hearts + count
document.querySelectorAll(".goods-item").forEach(item => {
  const minus = item.querySelector(".minus");
  const plus = item.querySelector(".plus");
  const input = item.querySelector("input");
  const heart = item.querySelector(".heart");
  minus.addEventListener("click", () => { if (input.value > 1) input.value--; });
  plus.addEventListener("click", () => input.value++);
  heart.addEventListener("click", () => {
    heart.classList.toggle("liked");
    heart.textContent = heart.classList.contains("liked") ? "❤" : "♡";
  });
});

// Guestbook
const addBtn = document.getElementById("addGuest");
const list = document.getElementById("guestList");
addBtn.addEventListener("click", () => {
  const name = document.getElementById("guestName").value.trim();
  const msg = document.getElementById("guestMessage").value.trim();
  if(!name || !msg) return alert("이름과 메시지를 입력해주세요!");
  const li = document.createElement("li");
  li.innerHTML = `<strong>${name}</strong> : ${msg}`;
  list.appendChild(li);
  document.getElementById("guestName").value = "";
  document.getElementById("guestMessage").value = "";
});


