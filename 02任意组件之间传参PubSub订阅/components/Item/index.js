import React, { Component } from 'react'

export default class Item extends Component {
    state = {

    }
    checked = (id) => {
        console.log("checked", id)
        this.props.subHandleTid(id)
    }


    render() {
        const { todos } = this.props
        console.log(todos)
        return (
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo.id} >
                                <input type="checkbox" onChange={(c) => this.checked(todo.id)} defaultChecked={todo.done} />{todo.name}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
