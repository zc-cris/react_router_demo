import React, {Component} from 'react'

export default class News extends Component {

    state = {
        news: [
            'news01',
            'news02',
            'news03'
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.news.map((n, index) => <li key={index}>{n}</li>)
                    }
                </ul>
            </div>
        )
    }
}