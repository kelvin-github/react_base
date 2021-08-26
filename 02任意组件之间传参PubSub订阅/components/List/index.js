import React, { Component } from 'react'
import Item from '../Item'

export default class List extends Component {
    state = {
        todos: [
            { id: 1, name: '001', done: true },
            { id: 2, name: '002', done: true },
            { id: 3, name: '003', done: true },
        ]
    }

    handleKeyUp = (event, b) => {
        if (event.keyCode == 13 && event.target.value != '') {  //获取到enter
            console.log("getInput", event.target.value, b)

            let todos = this.state.todos
            let obj = {
                id: todos.length + 1,
                name: event.target.value,
                done: false
            }
            todos = [obj, ...todos]
            this.setState({
                todos: todos
            })
            event.target.value = '' //清空 input
        }
    }

    subHandleTid = (tid) => {
        console.log(tid)

    }



    render() {
        const { todos } = this.state
        return (
            <div>
                <input onKeyUp={(c) => this.handleKeyUp(c, "a")} />
                <Item todos={todos} subHandleTid={this.subHandleTid} />
            </div>
        )
    }
}
