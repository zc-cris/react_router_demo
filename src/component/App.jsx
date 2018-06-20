import React, {Component} from 'react'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'

import About from '../view/about'
import Home from '../view/home'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*路由链接，用于切换路由组件的链接*/}
                            <NavLink className='list-group-item' to='/about'>About</NavLink>
                            <NavLink className='list-group-item' to='/home'>Home</NavLink>
                        </div>
                    </div>

                    <div className='col-xs-6'>
                        <div className='panel'>
                            <div className='panel-body'>
                                {/*Switch 标签用于切换路由组件*/}
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    {/*首次进入页面默认显示 about 路由组件*/}
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}