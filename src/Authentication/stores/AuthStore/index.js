import { observable, action } from "mobx";
import { API_INITIAL } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { setAccessToken, clearUserSession } from "../../../../src/utils/StorageUtils";

class AuthStore {
    @observable getUserSignInAPIStatus;
    @observable getUserSignInAPIError;
    authAPIService;
    constructor(authService) {
        this.authAPIService = authService;
        this.init();
    }
    init() {
        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
    }
    @action.bound
    setGetUserSignInAPIStatus(status) {
        this.getUserSignInAPIStatus = status;
    }
    @action.bound
    setUserSignInAPIResponse(response) {
        setAccessToken(response[0]["access_token"]);
    }
    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error;
    }

    @action.bound
    userSignOut() {
        this.init();
        clearUserSession();
        console.log("log out");

    }

    userSignIn() {
        console.log("log in");
        const getUserNamePromise = this.authAPIService.signInAPI();
        return bindPromiseWithOnSuccess(getUserNamePromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError);
    }
}

export default AuthStore;