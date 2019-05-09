import React, { Component } from 'react'
import { withRouter, Route, Redirect } from 'react-router-dom'

class AuthRouter extends Component {
  render() {
    const {component: Component, ...rest} = this.props
    const isLogin = localStorage.getItem('user')
    return (
      <Route {...rest} render={props => {
        return isLogin ? <Component {...props}/> : <Redirect to="/user/login"/> 
      }} />      
    )
  }
}

export default withRouter(AuthRouter)
