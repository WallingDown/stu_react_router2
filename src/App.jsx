import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import './App.css'
import Title from './components/Title'
import './decorator1'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Title/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* <a className="list-group-item" href="/about">About</a>
                            <a className="list-group-item active" href="/home" aria-current="page">Home</a> */}

                            {/* Link 是普通的路由链接 */}
                            {/* NavLink 是带有样式的路由链接 */}
                            {/* MyNavLink 是我自己封装的路由链接  */}

                            <MyNavLink  to="/about">About</MyNavLink>
                            <MyNavLink  to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                            {/* 注册路由 */}
                            <Switch>
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                                {/* 重定向 */}
                                <Redirect to="/about"/>
                            </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
