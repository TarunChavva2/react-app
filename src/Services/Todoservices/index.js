import { create } from "apisauce";
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethode } from "../../constants/APIConstants";

class TodoService {
    api;
    constructor() {
        this.api = create({
            baseURL: "https://jsonplaceholder.typicode.com";
        });
    }
    getTodoApi() {
        return networkCallWithApisauce(
            this.api,
            "todos",
            {},
            apiMethode.get,
        );
    }
}
export default TodoService;