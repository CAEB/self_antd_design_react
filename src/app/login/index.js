import React, { Component } from 'react'

import './index.less'

class Login extends Component {
  
  render() {
    return (
      <div className="user-login">
        <div className="user-login-top flex flex-around">
          <div className="user-login-top-tab user-login-top-tab-active">账号密码登录</div>
          <div className="user-login-top-tab">手机号登录</div>
        </div>
        <div className="user-login-content">

        </div>
        <button className="user-login-btn">登录</button>
        <div className="user-login-bottom flex flex-between">
          <div className="user-login-bottom-left">
            <span>其他登录方式</span>
            <i className="icon icon-zfb"></i>
            <i className="icon icon-tb"></i>
            <i className="icon icon-wb"></i>
          </div>
          <div className="user-login-bottom-right">注册用户</div>
        </div>
      </div>
    )
  }
}

export default Login