const todoForm = document.querySelector('form') 
const todoInput = document.querySelector('#todoInput'); 
const todoList = document.querySelector('#todoList');
let allTodos = [];

//Event listener for Add button click
todoForm.addEventListener('submit', function (e){
    e.preventDefault();
    addTodo();
})

//Add ToDo Function to fill the array
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0){
        allTodos.push(todoText);
        updateTodoList();
        createTodoItem(todoText);
        todoInput.value = '';
    }
    
}

//update TodoList
function updateTodoList() {
    todoList.innerHTML = '';
    allTodos.forEach((todo, todoIndex)=> {
        todoItem = createTodoItem(todo, todoIndex);
        todoList.append(todoItem);
    })
}
function createTodoItem(todo) {
    const todoLi = document.createElement('li');
    todoLi.innerText = todo;
    todoList.appendChild(todoLi);
    return todoItem;
}