import { observable, action } from "mobx";

import Todomodel from "../models/TodoModels";

class TodoStore {
    @observable todos;
    constructor() {
        this.todos = [];
    }
    @action.bound
    addingTodo(userEnteredTodo) {
        const todoObject = {
            id: Math.random(),
            title: userEnteredTodo,
            completed: false
        }
        const todoModel = new Todomodel(todoObject);
        this.todos.push(todoModel);
    }
    @action.bound
    deleteTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }
    @action.bound
    clearCompletedTodos() {

    }
}

const todoStore = new TodoStore;
export default todoStore;