import { observable, action } from 'mobx';

class Todomodel {
    @observable title;
    @observable isCompleted;
    id;
    constructor(todoObject) {
        this.id = todoObject.id;
        this.title = todoObject.title;
        this.isCompleted = todoObject.completed;
    }
    @action.bound
    updateTodo(updatedTodo) {
        this.title = updatedTodo;
    }
    @action.bound
    changeStatusOfTodo() {
        this.isCompleted = !this.isCompleted;
    }
}

export default Todomodel;