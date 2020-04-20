import { observable, action } from "mobx";
import { API_INITIAL, API_FETCHING, API_FAILED, API_SUCCESS } from "@ib/api-constants";

class UserStore {
    @observable getUsersApiStatus;
    @observable getUsersApiError;
    @observable users;
    constructor() {
        this.init()
    }
    @action.bound
    init = () => {
        this.getUsersApiError = null;
        this.getUsersApiStatus = API_INITIAL;
        this.users = []
    }
    @action.bound
    clearStore() {
        this.init();
    }
    @action.bound
    setUsersApiResponse(usersResponse) {
        this.getUsersApiStatus = API_SUCCESS
        this.users = usersResponse.map((user) => user.name)
    }
    @action.bound
    setApiError(error) {
        this.getUsersApiError = error
        this.getUsersApiStatus = API_FAILED
        console.log(error);

    }
    @action.bound
    getUsersApi() {
        this.getUsersApiStatus = API_FETCHING;
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(this.setUsersApiResponse)
            .catch(this.setApiError)
    }
}

const userstore = new UserStore()
export default userstore;