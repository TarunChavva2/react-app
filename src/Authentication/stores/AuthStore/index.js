import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class AuthStore {
    @observable getUserSignInAPIStatus = API_INITIAL;
    @observable getUserSignInAPIError = null;
    authAPIService;
    constructor(authService) {
        this.authAPIService = authService;
    }
    @action.bound
    setGetUserSignInAPIStatus(status) {
        this.getUserSignInAPIStatus = status;
    }
    @action.bound
    setUserSignInAPIResponse(response) {
        const access_token = response[0];
    }
    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error;
    }

    @action.bound
    userSignOut() {

    }
    @action.bound
    userSignIn() {
        const getUserNamePromise = this.authAPIService.signInAPI();
        return bindPromiseWithOnSuccess(getUserNamePromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError);
    }
}

export default AuthStore;