import React from "react";
import { Component } from "react";
import AuthenticationService from "./AuthenticationService";



class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        /* this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this); */

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }


    render() {
        return (
            <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                    <label class="form-label" htmlFor="username">User name:</label>
                    <input class="form-control" type="text" id="username" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} required />

                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                    <label class="form-label" htmlFor="password">Password:</label>
                    <input class="form-control" type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />

                </div>

                {/* <!-- Submit button --> */}
                <div>
                    <button onClick={this.loginClicked} class="btn btn-primary btn-block">Login</button>
                </div>
                <div id="loginMsg">
                    <IsValidCredentials hasLoginFailed={this.state.hasLoginFailed} hasLoginSuccess={this.state.showSuccessMessage}></IsValidCredentials>
                </div>
            </form>

        )

    }


    loginClicked() {

        if (this.state.username === 'saurabh' && this.state.password === '123') {
            console.log("Successful");
            AuthenticationService.registerSuccessfulLogin(this.state.username)
            let navigate = this.props.navigate;
            navigate(`/welcome/${this.state.username}`)
            this.setState(
                { showSuccessMessage: true }
            )
            this.setState({ hasLoginFailed: false })

        }
        else {
            console.log("Invalid credentials");
            this.setState({ hasLoginFailed: true })
            this.setState({ showSuccessMessage: false })
        }

    }

    // generic change handle 
    handleChange(event) {
        // console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }
    /* 
        handleUsernameChange(event) {
            console.log(event.target.value);
            this.setState({ username: event.target.value })
        }
    
    
        handlePasswordChange(event) {
            console.log(event.target.value);
            this.setState({ password: event.target.value })
        } */


}


function IsValidCredentials(props) {
    if (props.hasLoginFailed === true) {
        return <div className="alert alert-warning">Invalid credentials</div>
    }
    else if (props.hasLoginSuccess === true) {
        return <div>Successfull login</div>
    }

    return null

}

export default LoginComponent;