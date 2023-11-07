
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) { //event object는 기본적으로 preventDefault함수를 갖음.
    event.preventDefault(); //브라우저가 기본적으로 수행하는 동작(기본 행동)을 막음
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
    greeting.innerText = `Hello ${username}`; //변수와 string을 결합할때, 변수를 string안에 집어넣고 싶을때
    greeting.classList.remove(HIDDEN_CLASSNAME)
}


loginForm.addEventListener("submit", onLoginSubmit); //submit할때 onLoginSubmit 함수를 호출한다는 의미

