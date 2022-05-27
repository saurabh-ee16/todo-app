import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWordService from "./api/todo/HelloWordService";

class WelcomeComponent extends Component {

    constructor(props){
        super(props)
        this.retrieveMessage = this.retrieveMessage.bind(this);

        this.state={
            welcomeMessage : ''
        }

    }


    render() {
        let name = this.props.params.name;

        return (

            <div>
                <h3>
                    Welcome, {name}! You can manage your todos <Link to="/todos">here</Link>
                </h3>
                <div>
                    <button className="btn" onClick={this.retrieveMessage}>click</button>
                </div>
                <div className="container">{this.state.welcomeMessage}</div>
            </div>
        );

    }

    retrieveMessage(){
        
        HelloWordService.executeHelloWorld()
        .then(response => { this.setState({welcomeMessage : response.data}); console.log(response); } )

 
    }

}

export default WelcomeComponent;