import React from "react";
import { SignInDiv, UserName, UserPassword, SignInButton, Heading, ShowErrorMessage } from "./SignInStyles";
import { observer } from "mobx-react";
import { observable } from "mobx";

import { authStore } from "../../stores";

@observer
class SignInPage extends React.Component {
    @observable username;
    @observable password;
    @observable errorMessage;
    constructor() {
        super();
        this.username = "";
        this.password = "";
        this.errorMessage = "";
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
        if (this.password === "") {
            const PasswordError = "Enter Password";
            this.errorMessage = PasswordError;
        }
        else if (this.errorMessage === "") {
            authStore.userSignIn();
        }
    }
    formAction = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.formAction}>
                <SignInDiv>
                    <Heading>User SignIn</Heading>
                    <UserName placeholder="UserName" type="text" onChange={this.onChangeUsername} />
                    <UserPassword placeholder="Password" type="password" onChange={this.onChangePassword} />
                    <SignInButton type="submit" onClick={this.onClickSignIn}>Sign In</SignInButton>
                    <ShowErrorMessage>{this.errorMessage === "" ? this.errorMessage = "" : this.errorMessage}</ShowErrorMessage>
                </SignInDiv>
            </form>
        )
    }
}

export { SignInPage };