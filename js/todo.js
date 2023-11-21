const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDoList(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
}

toDoForm.addEventListener("submit", handleToDoList);