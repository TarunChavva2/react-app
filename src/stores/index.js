import TodoStore from "./TodoStore";
import TodoService from "../Services/Todoservices";

const todoService = new TodoService();
const todoStore = new TodoStore(todoService);

export default todoStore;