import { observable, action } from "mobx";
import { API_INITIAL, API_FETCHING, API_FAILED, API_SUCCESS } from "@ib/api-constants";

import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { create } from 'apisauce';
import { networkCallWithApisauce } from "../../utils/APIUtils";
import { apiMethods } from "../../constants/APIConstants";

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
        this.users = usersResponse.map((user) => user.name)
    }
    @action.bound
    setApiError(error) {
        this.getUsersApiError = error
        console.log(error);
    }
    @action.bound
    setUsersApiStatus(apiStatus) {
        this.getUsersApiStatus = apiStatus;
    }
    @action.bound
    getUsersApi() {
        this.getUsersApiStatus = API_FETCHING;
        const api = create({
            baseURL: "https://jsonplaceholder.typicode.com"
        })
        const userPromise = networkCallWithApisauce(api, "users/", {}, apiMethods.get)
        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setUsersApiStatus, this.setUsersApiResponse)
            .catch(this.getUsersApiError);
    }
}

const userstore = new UserStore()
export default userstore;