import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { API_INITIAL } from "@ib/api-constants";
import { observable, action } from "mobx";

import Todomodel from "../models/TodoModels";

class TodoStore {
    @observable getTodoListAPIStatus = API_INITIAL;
    @observable getTodoListAPIError = null;
    @observable todos;
    constructor(todosAPIService) {
        this.todosAPIService = todosAPIService;
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
    // @action.bound
    // clearCompletedTodos() {

    // }
    @action.bound
    setGetTodoListAPIStatus(status) {
        this.getTodoListAPIStatus = status;
    }

    @action.bound
    setGetTodoListAPIError(error) {
        this.getTodoListAPIError = error;
    }

    @action.bound
    setGetTodosAPIResponse(response) {
        response.map(todo => {
            const todoObject = {
                id: todo.id,
                title: todo.title,
                completed: todo.completed
            }
            const todoModel = new Todomodel(todoObject);
            this.todos.push(todoModel);
        }
        )
    }

    @action.bound
    getTodoList() {
        const getTodosPromise = this.todosAPIService.getTodoApi();
        return bindPromiseWithOnSuccess(getTodosPromise)
            .to(this.setGetTodoListAPIStatus, this.setGetTodosAPIResponse)
            .catch(this.setGetTodoListAPIError);
    }
}

export default TodoStore;