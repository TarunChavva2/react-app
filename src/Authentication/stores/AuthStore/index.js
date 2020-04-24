import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";

class AuthStore {
    @observable getUserSignInAPIStatus = API_INITIAL;
    @observable getUserSignInAPIError = null;
    authAPIService;
    constructor() {

    }

    @action.bound
    userSignIn() {

    }
    @action.bound
    setUserSignInAPIResponse() {

    }
    @action.bound
    setGetUserSignInAPIError() {

    }
    @action.bound
    setGetUserSignInAPIStatus() {

    }
    @action.bound
    userSignOut() {

    }
}

export default AuthStore;