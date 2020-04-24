import React from "react";
import { SignInDiv, UserName, UserPassword, SignInButton, Heading } from "./SignInStyles";
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class SignInPage extends React.Component {
    @observable username;
    @observable password;
    @observable errorMessage;

    onChangeUsername = () => {

    }
    onChangePassword = () => {

    }

    onClickSignIn = () => {

    }

    validateUserInputFields = () => {

    }
    render() {
        return (
            <form onSubmit={this.validateUserInputFields}>
                <SignInDiv>
                    <Heading>User SignIn</Heading>
                    <UserName placeholder="UserName" type="text" />
                    <UserPassword placeholder="Password" type="password" />
                    <SignInButton>Sign In</SignInButton>
                </SignInDiv>
            </form>
        )
    }
}

export default SignInPage;