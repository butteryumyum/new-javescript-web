const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //todos를 변수로 선언함(오타방지)
const toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { //X를 클릭할때, event를 얻게 됨
	const li = event.target.parentElement; //event가 target을 주고, button의 부모에 접근함
	li.remove(); //	button의 부모는 li이므로, li를 삭제 = button을 삭제
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); //element (li)를 생성함
    const span = document.createElement("span"); //elemnt (span)을 생성
		span.innerText = newTodo; //text 교체	
	const button = document.createElement("button");	
		button.innerText = "❌";
		button.addEventListener("click", deleteToDo);
	li.appendChild(span); //li안에 span을 종속
	li.appendChild(button); //li안에 button을 종속
    
    toDoList.appendChild(li); //toDoList안에 li를 종속
}

function handleToDoSubmit(event) { //submit event(새로고침)
    event.preventDefault(); //기본동작 막음
	    const newTodo = toDoInput.value;
	    toDoInput.value = "";
		toDos.push(newTodo);
	    paintToDo(newTodo); //paintToDo 호출
		saveToDos(); 
}
	toDoForm.addEventListener("submit", handleToDoSubmit);

	
	const savedToDos = localStorage.getItem(TODOS_KEY);	
	if(saveToDos !== null) { //localStorage에 값이 없으면 null이 출력됨. //null을 구별하기 위한 if문
		const parsedToDos = JSON.parse(savedToDos); //string값을 array로 바꿔 parsedToDos에 넣음
		parsedToDos.forEach((item) => console.log("hi" , item)); //foreach: array에 있는 각각의 item에 대해 실행시킴
	
	}