"use strict";

let todos = [];

function addToDo(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random}`
    }

    todos.push(todo);
}

function deleteToDo(id) {
    
}