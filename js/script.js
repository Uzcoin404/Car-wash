const menuBtn = document.querySelector('.menu_btn'),
aside = document.querySelector('.aside'),
clockText = document.querySelector('.clock_text'),
weatherText = document.querySelector('.weather_text'),
navWeather = document.querySelector('.nav_weather'),
dateText = document.querySelector('.date_text');

menuBtn.addEventListener('click', function(){
    aside.classList.toggle('active');
});
let date = new Date();
let currentDate = String(date.getDate()).padStart(2, '0')  + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
dateText.innerHTML = currentDate;

function setTime() {
    date = new Date();
    let currentTime = String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0') + ':' + String(date.getSeconds()).padStart(2, '0');
    clockText.innerHTML = currentTime;
    setTimeout(() => setTime(), 1000);
}
setTime();

// Weather api
const apiKey = "f8a5bad3350244a8de0e63e569b95894";
window.addEventListener('load', function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } else {
        this.alert("Your browser does'nt support Geolocation");
    }
});

function onSuccess(position) {
    const {latitude, longitude} = position.coords;
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    fetch(api).then(response => response.json()).then(result => weatherDetails(result));
    weatherText.innerHTML = '...';
}
function weatherDetails(result) {
    console.log(result);
    if (result.cod !== 404) {
        const city = result.name;
        const country = result.sys.country;
        const temp = Math.round(result.main.temp);
        weatherText.innerHTML = `${temp}°`;
        navWeather.setAttribute('title', `Shahar: ${city}, ${country}`);
    } else {
        alert("Does'nt connect api");
    }
}
function onError(error) {
    console.log(error);
    weatherText.innerHTML = '<i class="fas fa-map-marker-alt-slash"></i>';
    navWeather.setAttribute('title', "Joylashuvni olib bo'lmadi Iltimos lokatsiyaga ruxsat bering");
}