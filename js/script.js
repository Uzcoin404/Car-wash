const menuBtn = document.querySelector('.menu_btn'),
aside = document.querySelector('.aside'),
clockText = document.querySelector('.clock_text'),
dateText = document.querySelector('.date_text');

menuBtn.addEventListener('click', function(){
    aside.classList.toggle('active');
});
const date = new Date();
let currentDate = String(date.getDate()).padStart(2, '0')  + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
let currentTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
dateText.innerHTML = currentDate;
clockText.innerHTML = currentTime;