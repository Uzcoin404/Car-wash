const menuBtn = document.querySelector('.menu_btn'),
aside = document.querySelector('.aside'),
clockText = document.querySelector('.clock_text'),
dateText = document.querySelector('.date_text');

menuBtn.addEventListener('click', function(){
    aside.classList.toggle('active');
});
const date = new Date();
let currentDate = String(date.getDate()).padStart(2, '0')  + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
let currentTime = String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0');
dateText.innerHTML = currentDate;
clockText.innerHTML = currentTime;