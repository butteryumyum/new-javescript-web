function onGeoOk(position) //위치를 잘 받았을때
{   
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live it", lat, lng);
}
function onGeoError() //위치를 받지 못하고 에러가 났을때
{
    alert("Can't find you. No Weather for you.")
     
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
