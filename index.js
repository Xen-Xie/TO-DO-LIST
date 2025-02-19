const todoForm = document.querySelector('form') 
const todoInput = document.querySelector('#todoInput'); 
const todoList = document.querySelector('#todoList');
let allTodos = [];

//Event listener for Add button click
todoForm.addEventListener('submit', function (e){
    e.preventDefault();
})