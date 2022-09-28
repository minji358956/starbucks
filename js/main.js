const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' //요소 자체를 없애줘서 클릭x , js에서 문자는 반드시 따옴표 처리
    }); //gsap(요소, 지속시간, 옵션);

    //버튼 보이기
    gsap.to('#to-top', .2,{
      x: 0
    });
  }
  else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    //버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300)); // 스크롤 할 때 0.3초 단위로 부하를 줘서 함수가 한 번에 실행되는 것을 막음
//.throttle(함수, 시간(ms))

toTopEl.addEventListener('click', function () {
  gsap.to(window, .5, {
    scrollTo: 0
  }); //window 화면에 출력되는 자체
});

const fadeEls = document.querySelectorAll('.visual .fade-in'); //모든 것을 찾음
fadeEls.forEach(function(fadeEl, index) { //반복되는 요소
  gsap.to(fadeEl, 1, {
    delay: (index + 1) *.7, //*으로 순차처리 index=0, 1, 2,... => 0.7, 1.4, 2.1, 2.7 ...
    opacity: 1
  }); //애니메이션 처리, gsap(요소, 지속시간, 옵션);
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
})
new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})
new Swiper('.awards .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,
    }) //특정한 요소를 감시하는 메서드 Scene
    .setClassToggle(spyEl, 'show') //show라는 클래스가 추가됨
    .addTo(new ScrollMagic.Controller()); 
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) { //true일 때(숨겨져 있을 때)
    promotionEl.classList.add('hide');
  }
  else { //false일 때(보여질 때)
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), { //1.5초 2.5초
    y: size, //y축 얼만큼 움직이면서 애니메이션 처리?
    repeat: -1, //무한반복
    yoyo: true, //한 번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut, //반복을 원하는 형태로 제어
    delay: random(0, delay) //지연시간
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);
