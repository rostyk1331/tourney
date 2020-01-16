import React from 'react';
import logo from './logo.png';
import { Auth } from 'aws-amplify';

class LoginPage extends React.Component {
    state = { email: '', password: '' };

    onEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    onPasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    onSignIn = async () => {
        // const { email, password } = this.state;
        // const user = await Auth.signIn(email, password);
        // console.log(user);
    }

    onGoogleSignIn = async () => {
        // const token = await Auth.federatedSignIn({ provider: "Google" });
        // console.log(token);
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <header>
                    <img src={logo}/>
                    <h1>Register for Tourney Master</h1>
                </header>
                <form>
                    <button type="button" onClick={this.onGoogleSignIn}>Sign in with Google</button>
                    <p>OR</p>
                    <label>Email Adddress*</label>
                    <input type='text' value={email} onChange={this.onEmailChange}/>
                    <label>Password*</label>
                    <input type='text'value={password} onChange={this.onPasswordChange}/>
                    <button type="button" onClick={this.onSignIn}>Sign In</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;