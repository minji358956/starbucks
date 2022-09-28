const searchEl = document.querySelector('.search'); //1개 찾기
const searchInputEl = searchEl.querySelector('input'); //.search에서 input 1개 찾기

searchEl.addEventListener('click', function() {
  searchInputEl.focus(); //input요소에 focus
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색'); //html의 속성을 지정(힌트)
})
searchInputEl.addEventListener('blur', function() { //focus 제거
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder',''); //html의 속성을 지정(힌트)
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //textContent = 글자 내용을 알아내거나 지정하는 용도
//Date = 현재 날짜를 뽑아냄