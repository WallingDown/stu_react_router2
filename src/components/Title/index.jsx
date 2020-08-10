import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

// withRouter可以实现在一般组件中使用路由组件特有的API
@withRouter
class Title extends Component {   
    // 编程式导航--->后退
    back = () =>{
        this.props.history.goBack()
    }
    // 编程式导航--->前进
    goto = () =>{
        this.props.history.goForward()
    }

    render() {
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={this.back}>《--后退</button>
                &nbsp;&nbsp;&nbsp;
                <button onClick={this.goto}>前进--》</button>
            </div>
        )
    }
}

// export default withRouter(Title)
export default Title