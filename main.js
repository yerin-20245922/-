const toogleBtn = document.querySelector('.navbar__toogle');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

const menuSort = document.querySelector('.container__menu');

const block = document.querySelector('#menu');
const random = document.querySelector('#random');

var menuArray = new Array();
var menuArray = new Array();
menuArray[0] = "커피";
menuArray[1] = "몸 건강을 위해 디카페인";
menuArray[2] = "콜드브루";
menuArray[3] = "부드럽게 밀크(라떼)";
menuArray[4] = "달달시원 블렌디드(스무디)";
menuArray[5] = "에이드";
menuArray[6] = "티";
menuArray[7] = "주스";

toogleBtn.addEventListener('click', function () {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});


block.addEventListener('click', function () {
    menuSort.classList.add('active');
    placeSort.classList.remove('active');
});


random.addEventListener('click', function () {
    let imgNum = Math.round(Math.random() * 7);
    let selected = menuArray[imgNum];
    alert("오늘은 " + selected + " 어떠신가요?");
});
