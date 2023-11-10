
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { //event object는 기본적으로 preventDefault함수를 갖음.
    event.preventDefault(); //브라우저가 기본적으로 수행하는 동작(기본 행동)을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    painGreeting(username);
}

function painGreeting(username) {   
    greeting.innerText = `Hello ${username}`; //변수와 string을 결합할때, 변수를 string안에 집어넣고 싶을때
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){ //localStorage에 유저 정보가 없을때
    //from을 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);//null일때, form의 hidden class명을 지움
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //greeting을 보여줌
    painGreeting(savedUserName)
}

