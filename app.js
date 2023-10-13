
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) { //event object는 기본적으로 preventDefault함수를 갖음.
    event.preventDefault(); //브라우저가 기본적으로 수행하는 동작(기본 행동)을 막음
    console.log(loginInput.value); //예시로, from을 submit 했을 때 브라우저가 새로고침 하는 것(기본 행동)등을 막음
   
 }

loginForm.addEventListener("submit", onLoginSubmit); //submit할때 onLoginSubmit 함수를 호출한다는 의미

