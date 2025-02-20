const todoForm = document.querySelector('form') 
const todoInput = document.querySelector('#todoInput'); 
const todoList = document.querySelector('#todoList');
let allTodos = getTodos();
updateTodoList(allTodos, todoList);

//Event listener for Add button click
todoForm.addEventListener('submit', function (e){
    e.preventDefault();
    addTodo();
})

//Add ToDo Function to fill the array
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText.length > 0){
        const todoObject = {
            text: todoText,
            completed: false
        }
        allTodos.push(todoObject);
        updateTodoList();
        saveTodo();
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
//Main Function to create a new TodoList
function createTodoItem(todo, todoIndex) {
    const todoLi = document.createElement('li');
    const todoText = todo.text;
    const todoId = 'todo-'+todoIndex;
    todoLi.className = "todo";

    todoLi.innerHTML = ` 
      <li id="${todoId}" class="mb-[10px] px-6 py-0 bg-[#1c1d20] rounded-[15px] flex items-center text-white font-mono">
        <input type="checkbox" id="checkbox-${todoId}" class="peer hidden"> <!-- Changed ID to avoid conflict -->
        
        <label for="checkbox-${todoId}" class="border-2 border-[#00ffc4] rounded-full min-w-[20px] min-h-[20px] flex justify-center items-center flex-shrink-0 transition-all duration-200 peer-checked:bg-[#00ffc4]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-[24px] fill-[#1C1D20]">
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
            </svg>
        </label>
        <label for="checkbox-${todoId}" class="p-15px pr-0 flex-grow peer-checked:line-through peer-checked:text-[#4A4D57] transition-all duration-200 ml-3">
            ${todoText}
        </label>
        <button id="deleteButton" class="p-[3px] bg-none border-none flex justify-center cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-[24px] fill-[#4A4D57] hover:fill-[#ff0033] transition-all duration-300">
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
        </button>
    </li>
`
 //todo Delete Button
    const deleteButton = todoLi.querySelector('#deleteButton');
    deleteButton.addEventListener('click', function (){
        deleteTodoItem(todoIndex);
    });
    const checkbox = todoLi.querySelector('input');
    checkbox.addEventListener('change', ()=>{
        allTodos[todoIndex].completed = checkbox.checked;
        saveTodo();
    });
    checkbox.checked = todo.completed;
    return todoLi;
}
function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((_,i)=> i !== todoIndex);
    saveTodo();
    updateTodoList();
}
//Save Todo list in local Storage
function saveTodo(){
    const todosJson = JSON.stringify(allTodos);
    localStorage.setItem('todos', todosJson);
}

function getTodos(){
    const todos = localStorage.getItem('todos') || "[]";
    return JSON.parse(todos);
}