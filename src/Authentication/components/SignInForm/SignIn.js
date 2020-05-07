import React from "react";
import { withRouter } from "react-router-dom";
import { SignInDiv, UserName, UserPassword, SignInButton, Heading, ShowErrorMessage } from "./SignInStyles";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";

@inject("authStore")
@observer
class SignInPage extends React.Component {
    @observable username;
    @observable password;
    @observable errorMessage;
    constructor() {
        super();
        this.username = "";
        this.password = "";
        this.errorMessage = null;
    }

    onChangeUsername = (event) => {
        this.username = event.target.value;
    }
    onChangePassword = (event) => {
        this.password = event.target.value;
    }

    onClickSignIn = (event) => {
        event.preventDefault();
        if (this.username === "") {
            const UserNameError = "Enter UserName";
            this.errorMessage = UserNameError;
        }
        else if (this.password === "") {
            const PasswordError = "Enter Password";
            this.errorMessage = PasswordError;
        }
        else {
            this.errorMessage = "";
            this.props.authStore.userSignIn();
            setTimeout(() => {
                this.redirectToProductPage();
            }, 1000);

        }
    }
    redirectToProductPage = () => {
        const { history } = this.props;
        history.replace({ pathname: "/products" })
    }

    render() {
        return (
            <form >
                <SignInDiv>
                    <Heading>User SignIn</Heading>
                    <UserName placeholder="UserName" type="text" onChange={this.onChangeUsername} value={this.username} />
                    <UserPassword placeholder="Password" type="password" onChange={this.onChangePassword} value={this.password} />
                    <SignInButton type="submit" onClick={this.onClickSignIn}>Sign In</SignInButton>
                    <ShowErrorMessage>{this.errorMessage}</ShowErrorMessage>
                </SignInDiv>
            </form>
        )
    }

}

export default withRouter(SignInPage);