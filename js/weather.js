const API_KEY = "1fac9a45a0105d6151e98192809a2ea4"

function success(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`; //&units=metric는 화씨온도를 섭씨온도로 변경
    fetch(url).then(response=>response.json()).then(data=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = `You live in ${data.name}!`;
        weather.innerText=`${data.weather[0].main} / ${data.main.temp}`;
        ;
    });
}
function fail(){
    alert("I can't findㅜㅠ");
}
navigator.geolocation.getCurrentPosition(success,fail);