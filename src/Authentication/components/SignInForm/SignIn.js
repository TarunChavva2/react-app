import React from "react";
import { SignInDiv, UserName, UserPassword, SignInButton, Heading, ShowErrorMessage } from "./SignInStyles";
import { observer } from "mobx-react";
import ReactLoading from "react-loading";

@observer
class SignInPage extends React.Component {
    userNameRef = React.createRef();
    constructor(props) {
        super(props);
        this.isLoading = false;
    }
    componentDidMount() {
        this.userNameRef.current.focus();
    }
    onClickSignIn = (event) => {
        event.preventDefault();
        const { onClickSignIn } = this.props;
        onClickSignIn();
    }

    render() {
        const {
            onChangeUsername,
            username,
            password,
            onChangePassword,
            errorMessage,
            isLoading
        } = this.props;
        return (
            <form >
                <SignInDiv>
                    <Heading>User SignIn</Heading>
                    <UserName ref={this.userNameRef} placeholder="Username" type="text" onChange={onChangeUsername} value={username} />
                    <UserPassword placeholder="Password" type="password" onChange={onChangePassword} value={password} />
                    <SignInButton type="button" onClick={this.onClickSignIn}>{isLoading ? (
                        <ReactLoading type="spin" width="20px" height="20px" alt="loader" />) : ("Sign in")}
                    </SignInButton>
                    <ShowErrorMessage>{errorMessage}</ShowErrorMessage>
                </SignInDiv>
            </form>
        )
    }


}

export default SignInPage;