import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Footer extends Component {
    mySubscriber = (_, data) => {
        console.log(data)
    }

    // 放在 挂载成功后
    componentDidMount() {
        this.myTopic = PubSub.subscribe("myTopic", this.mySubscriber)
    }

    // 卸载挂载时 取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.myTopic)
    }

    render() {
        return (
            <div>
                Footer
            </div>
        )
    }
}
