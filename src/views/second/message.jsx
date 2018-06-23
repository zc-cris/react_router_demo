import React, {Component} from 'react'
import {Route} from 'react-router-dom'

import MessageDetail from '../thrid/message-detail'

export default class Message extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        setTimeout(() => {
            const messages = [
                {id: '1', title: 'message01'},
                {id: '2', title: 'message02'},
                {id: '3', title: 'message03'},
            ]
            this.setState({messages})
        }, 1000)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        /*ES6  新语法：占位符  {`xxx${yyy}`}*/
                        this.state.messages.map((m, index) => (
                                <li key={index}>
                                    <a href={`/home/message/${m.id}`}>{m.title}</a>
                                </li>
                            )
                        )
                    }
                </ul>
                <Route path='/home/message/:id' component={MessageDetail}/>
            </div>
        )
    }
}