import React from 'react'

const details = [
    {id: '1', title: 'message01', content: 'hello cris'},
    {id: '2', title: 'message02', content: 'hello 大帅'},
    {id: '3', title: 'message03', content: 'hello 克里斯'}
]
export default function MessageDetail(props) {

    // 得到请求路径对应的参数id
    const {id} = props.match.params
    // debugger
    // 若要使用单行箭头函数直接返回一个对象字面量，请使用一个括号包裹改对象字面量，而不是直接使用大括号，否则ES6解析引擎会将其解析为一个多行箭头函数
    const message = details.find((m) => (m.id === id))
    /*返回数组中第一个匹配的元素*/

    return (
        <ul>
            <li>{message.id}</li>
            <li>{message.title}</li>
            <li>{message.content}</li>
        </ul>
    )
}