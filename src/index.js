import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './component/App'

render(
    (
        /*使用BrowserRouter 来管理我们的应用*/
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ),
    document.getElementById("root")
)