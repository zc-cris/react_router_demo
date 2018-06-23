import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {

    render() {
        return (
            /*将外部写在MyNavLink 标签里的属性全部传递给NavLink, activeClassName 来自官方文档，表示当前被选中的路由链接*/
            <NavLink {...this.props} activeClassName='activeClass'></NavLink>
        )
    }
}