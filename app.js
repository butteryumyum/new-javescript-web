
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a"); // 링크 a로 이동함

function onLoginSubmit(event) { //event object는 기본적으로 preventDefault함수를 갖음.
    event.preventDefault(); //브라우저가 기본적으로 수행하는 동작(기본 행동)을 막음
    console.log(loginInput.value); //예시로, from을 submit 했을 때 브라우저가 새로고침 하는 것(기본 행동)등을 막음
   
 }

function handleLinkClick(evnet) {
    event.preventDefault(); // 다른 페이지로 이동하는 동작을 막음
    console.log(event);

}

loginForm.addEventListener("submit", onLoginSubmit); //submit할때 onLoginSubmit 함수를 호출한다는 의미
link.addEventListener("click", handleLinkClick)
