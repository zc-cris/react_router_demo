import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './component/App'
/*导入自定义的css文件,一定要用在src目录下，且记得使用相对路径*/
import './index.css'

render(
    (
        /*使用BrowserRouter 来管理我们的应用*/
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById("root")
)