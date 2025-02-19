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
        todoInput.value = '';
    }
    
}