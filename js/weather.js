
const API_KEY = "3e0609d2c193f0e190798ac796422777";

function onGeoOk(position) //위치를 잘 받았을때
{   
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);
}
function onGeoError() //위치를 받지 못하고 에러가 났을때
{
    alert("Can't find you. No Weather for you.")
     
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
