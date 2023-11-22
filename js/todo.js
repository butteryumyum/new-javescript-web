const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
	    const li = document.createElement("li"); //element (li)를 생성함
	    const span = document.createElement("span"); //elemnt (span)을 생성
    li.appendChild(span); //li안에 span을 종속
    span.innerText = newTodo; //text 교체
    toDoList.appendChild(li); //toDoList안에 li를 종속
}

function handleToDoList(event) { //submit event(새로고침)
    event.preventDefault(); //기본동작 막음
	    const newTodo = toDoInput.value;
	    toDoInput.value = "";
	    paintToDo(newTodo); //paintToDo 호출
}
	toDoForm.addEventListener("submit", handleToDoList);