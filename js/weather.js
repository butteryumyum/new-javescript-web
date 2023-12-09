
const API_KEY = "3e0609d2c193f0e190798ac796422777";

function onGeoOk(position) //위치를 잘 받았을때
{   
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {//fetch는 promise임 promise는 당장 일어나지 않고 시간이 걸린 뒤 일어남
            const weather = document.querySelector("#weather span:first-child"); //span의 첫번째 child을 얻음
            const city = document.querySelector("#weather span:last-child"); 
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp }`;
    })); 
}
function onGeoError() //위치를 받지 못하고 에러가 났을때
{
    alert("Can't find you. No Weather for you.")
     
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//The End
