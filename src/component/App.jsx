/*导入指定jsx文件的默认export组件React 以及其他组件Component（记得{Component}格式）*/
import React, {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import MyNavLink from './MyNavLink'
import About from '../views/about'
import Home from '../views/home'

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
                            <MyNavLink className='list-group-item' to='/about'>About</MyNavLink>
                            <MyNavLink className='list-group-item' to='/home'>Home</MyNavLink>
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