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
    }

    userSignIn(requestObject, onSuccess, onFailure) {
        const getUserNamePromise = this.authAPIService.signInAPI();
        return bindPromiseWithOnSuccess(getUserNamePromise)
            .to(this.setGetUserSignInAPIStatus, (response) => {
                this.setUserSignInAPIResponse(response);
                onSuccess();
            })
            .catch((error) => {
                this.setGetUserSignInAPIError(error);
                onFailure();
            });
    }
}

export default AuthStore;