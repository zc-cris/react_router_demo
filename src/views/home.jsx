import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import MyNavLink from '../component/MyNavLink'
import News from './second/news'
import Message from './second/message'

export default class Home extends Component {

    render() {
        return (
            <div>
                <h2>home route component</h2>
                <div>
                    <ul className='nav nav-tabs'>
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Messages</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        )
    }
}