import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWordService from "./api/todo/HelloWordService";
import TodoDataService from "./api/todo/TodoDataService";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveMessage = this.retrieveMessage.bind(this);

        this.state = {
            message: []
        }

    }


    render() {
        let name = this.props.params.name;

        return (

            <div>
                <h3>
                    Welcome, {name}! You can manage your todos <br /><Link to="/todos">here</Link>
                </h3>
                {/* <div>
                    <button className="btn" onClick={this.retrieveMessage}>click</button>
                </div> */}
                {/* <div className="container">
                    {this.state.message.map(msg => <div> {msg.description}</div>) }
                </div> */}
            </div>
        );

    }

    retrieveMessage() {

        TodoDataService.retrieveAllTodos()
            .then(
                (result) => {
                    this.setState({
                        message: result
                    })
                }

            )
    }

}

export default WelcomeComponent;