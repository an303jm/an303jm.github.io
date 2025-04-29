document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const submenuParents = document.querySelectorAll(".has-submenu");

  // 햄버거 클릭 시 메뉴 토글
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // 서브메뉴 클릭 시 펼치기/접기
  submenuParents.forEach((parent) => {
    parent.addEventListener("click", (e) => {
      e.preventDefault(); // a태그 기본동작 방지
      parent.classList.toggle("open");
    });
  });

  // Swiper 초기화
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
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
