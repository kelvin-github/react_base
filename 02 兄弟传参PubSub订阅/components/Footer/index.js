import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Footer extends Component {
    mySubscriber = (_, data) => {
        console.log(data)
    }

    // 放在 挂载成功后
    componentDidMount() {
        PubSub.subscribe("myTopic", this.mySubscriber)
    }

    render() {
        return (
            <div>
                Footer
            </div>
        )
    }
}
