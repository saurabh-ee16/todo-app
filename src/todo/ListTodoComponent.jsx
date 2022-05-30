import React, { Component } from "react";
import TodoDataService from "./api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            message : null

        }
        this.deleteTodoOnClicked = this.deleteTodoOnClicked.bind(this)
        this.refreshTodo = this.refreshTodo.bind(this)
        this.updateTodoOnClicked = this.updateTodoOnClicked.bind(this)

    }

    componentDidMount() {
        this.refreshTodo();
    }

    refreshTodo() {
        let username = AuthenticationService.getLoggedInUserName();

        TodoDataService.retrieveAllTodos(username)
            .then(res => {
                this.setState({
                    todos: res.data
                })
            })
    }




    render() {
        return (
            <div className="container">
                <h1>List todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>Description</th>
                            <th>Is completed</th>
                            <th>Target date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('DD-MM-YYYY')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoOnClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoOnClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )

                        }
                    </tbody>

                </table>

            </div>

        )

    }

    deleteTodoOnClicked(id){
        let name = AuthenticationService.getLoggedInUserName();

        TodoDataService.deleteTodoById(name, id)
            .then(res => {
                this.setState({
                    message : `Delete of todo ${id} is successfull`      
                })
                this.refreshTodo();
            })
    }

    updateTodoOnClicked(id){
        this.props.navigate(`/todos/${id}`);

    }

}




export default ListTodoComponent;