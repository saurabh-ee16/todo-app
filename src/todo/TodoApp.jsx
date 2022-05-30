import React from "react";
import { Component } from "react";
import './TodoStyle.css'
import './bootstrap.css'
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";
import ListTodoComponent from "./ListTodoComponent";
import AuthenticationService from "./AuthenticationService";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import TodoComponent from "./TodoComponent";

// const LoginComponentWithNavigation = WithNavigation(LoginComponent);


class TodoApp extends Component {

    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ListTodoComponentWithNavigation = withNavigation(ListTodoComponent);
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));
        return (
            <div className="todoApp">

                <Router>
                    <HeaderComponentWithNavigation />
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>} />
                        <Route path="/welcome/:name" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>} />
                        <Route path="/todos" element={<AuthenticatedRoute><ListTodoComponentWithNavigation/></AuthenticatedRoute>} />
                        <Route path="/todos/:id" element={<AuthenticatedRoute><TodoComponentWithParamsAndNavigation/></AuthenticatedRoute>}/>
                        <Route path='*' element={<ErrorComponent />} />
                    </Routes>
                    <FooterComponent />
                </Router>

            </div>
        )

    }

}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(`userlogged: ${isUserLoggedIn}`)
        return (

            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand">Todos</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/saurabh">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )

    }

}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All Rights Reserved 2022 @Saurabh</span>
            </footer>
        )

    }

}

class LogoutComponent extends Component {
    render() {

        return (
            <div>
                You have logged out!
            </div>

        )
    }


}


function ErrorComponent() {
    return (

        <div>Error occurred!</div>

    );

}



export default TodoApp;