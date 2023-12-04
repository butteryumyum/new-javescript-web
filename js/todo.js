const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; //todos를 변수로 선언함(오타방지)
let toDos = [];

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) { //X를 클릭할때, event를 얻게 됨
	const li = event.target.parentElement; //event가 target을 주고, button의 부모에 접근함
	li.remove(); //	button의 부모는 li이므로, li를 삭제 = button을 삭제
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //li.id와 toDo.id가 타입이 다르므로 parseInt로 똑같이 만듦
	//toDo의 id가 li의 id와 다른걸 남김
	saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); //element (li)를 생성함
	li.id = newTodo.id; 
    const span = document.createElement("span"); //elemnt (span)을 생성
		span.innerText = newTodo.text; //text가 아닌 object를 받기에 text로 나타내야함.
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
		const newTodoObj = { //text와 id를 분리해 obj를 전달
			text:newTodo,
			id:Date.now(), //id로 item 구별
		};
		toDos.push(newTodoObj);
	    paintToDo(newTodoObj); //paintToDo 호출
		saveToDos(); 
}
	toDoForm.addEventListener("submit", handleToDoSubmit);

	
	const savedToDos = localStorage.getItem(TODOS_KEY);	
	
	if (savedToDos !== null) { //localStorage에 값이 없으면 null이 출력됨. //null을 구별하기 위한 if문
	const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);	
	}