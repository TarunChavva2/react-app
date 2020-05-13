import React from "react";
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import SignInPage from "../../components/SignInForm"

@inject("authStore")
@observer
class SignInRoute extends React.Component {
    @observable username;
    @observable password;
    @observable errorMessage;
    @observable isLoading;

    constructor() {
        super();
        this.username = "";
        this.password = "";
        this.errorMessage = null;
        this.isLoading = false;
    }
    authStore = () => {
        return this.props.authStore;
    }

    onChangeUsername = (event) => {
        this.username = event.target.value;
    }
    onChangePassword = (event) => {
        this.password = event.target.value;
    }

    onClickSignIn = () => {
        if (this.username === "") {
            const UserNameError = "Enter UserName";
            this.errorMessage = UserNameError;
        }
        else if (this.password === "") {
            const PasswordError = "Enter Password";
            this.errorMessage = PasswordError;
        }
        else {
            this.errorMessage = null;
            this.isLoading = true;
            this.authStore().userSignIn({}, this.onSuccess, this.onFailure);
        }
    }

    onFailure = () => {
        this.isLoading = false;
        this.errorMessage = "NETWORK_ERROR";
    }
    onSuccess = () => {
        this.isLoading = false;
        const { history } = this.props;
        history.replace({ pathname: "/products" })
    }

    render() {
        const { onChangeUsername,
            onChangePassword,
            onClickSignIn,
            username,
            password,
            errorMessage,
            isLoading,
        } = this;

        return (
            <SignInPage
                onChangeUsername={onChangeUsername}
                onChangePassword={onChangePassword}
                onClickSignIn={onClickSignIn}
                errorMessage={errorMessage}
                username={username}
                password={password}
                isLoading={isLoading}
            />
        )

    }

}

export default withRouter(SignInRoute);