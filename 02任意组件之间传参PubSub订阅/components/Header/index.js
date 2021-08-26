import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Header extends Component {

    handerKeyWord = (event) => {
        const { keyCode, target } = event
        if (keyCode == 13 && target.value != "") {
            console.log(keyCode, target.value)
            PubSub.publish("myTopic", target.value)
            target.value = ""
        }

    }
    render() {
        return (
            <div>
                <input onKeyUp={(c) => this.handerKeyWord(c)} />
            </div>
        )
    }
}
