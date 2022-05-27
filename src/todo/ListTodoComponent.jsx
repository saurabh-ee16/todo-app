import React, { Component } from "react";


class ListTodoComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { id: 1, description: 'learn react', done: false, tagetDate: new Date()},
                { id: 2, description: 'learn Java', done: false, tagetDate: new Date() },
                { id: 3, description: 'learn todos', done: false, tagetDate: new Date() },
                { id: 4, description: 'learn angular', done: false, tagetDate: new Date()},

            ]

        }

    }

    render() {
        return (
            <div className="container">
                <h1>List todos</h1>
                <table className="table table-sm">
                    <thead className="thead-dark">
                        <tr>
                            
                            <th>Description</th>
                            <th>Is completed</th>
                            <th>Target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.todos.map(
                                todo =>
                                <tr key={todo.id}>
                                   
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.tagetDate.toString()}</td>
                                </tr>
                            )
                        
                        }
                    </tbody>

                </table>

            </div>

        )

    }

}

export default ListTodoComponent;