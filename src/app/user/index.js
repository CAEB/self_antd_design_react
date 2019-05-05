import React, { Component } from 'react'

import Register from '@app/register'
import Login from '@app/login'
import './index.less'
import logo from '@assets/user/logo.svg'

class User extends Component {
  
  routeObj = {
    register: <Register />,
    login: <Login />
  }

  render() {
    const { match } = this.props
    const { id } = match.params

    return (
      <div className="user">
        <div className="user-header">
          <div className="user-header-top">
            <img src={logo} alt="antd design"/>
            <span>Ant Design</span>
          </div>
          <div className="user-header-bottom">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
        </div>
        {this.routeObj[id]}
        <div className="user-footer">
          <div className="user-footer-lists">
            <a className="user-footer-list">帮助</a>
            <a className="user-footer-list">隐私</a>
            <a className="user-footer-list">条款</a>
          </div>
          <div className="user-footer-copyright">
            Copyright &copy; 2018 蚂蚁金服体验技术部出品
          </div>
        </div>
      </div>
    )
  }
}

export default User