import React, { Component } from 'react'

import './index.less'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'username'
    }
  }

  /**
   * @description 切换tab
   * @param {string} type 
   */
  changeTab(type) {
    this.setState({
      type
    })
  }

  render() {
    const { type } = this.state
    return (
      <div className="user-login">
        <div className="user-login-top flex flex-around">
          <div
            onClick={() => this.changeTab('username')}
            className={`user-login-top-tab ${type === 'username' ? 'user-login-top-tab-active' : null}`}
          >账号密码登录</div>
          <div
            onClick={() => this.changeTab('phone')}
            className={`user-login-top-tab ${type === 'phone' ? 'user-login-top-tab-active' : null}`}
          >手机号登录</div>
        </div>
        <div className="user-login-content">
          {
            type === 'username' ?
              (
                <div>
                  <div className="user-login-content-input">
                    <input type="text" placeholder="用户名: admin or user" />
                  </div>
                  <div className="user-login-content-input">
                    <input type="text" placeholder="密码: ant.design" />
                  </div>
                </div>
              ) :
              (
                <div>
                  <div className="user-login-content-input">
                    <input type="text" placeholder="手机号" />
                  </div>
                  <div className="user-login-content-input">
                    <input type="text" placeholder="验证码" />
                    <button>获取验证码</button>
                  </div>
                </div>
              )
          }
          <div className="user-login-content-input">
            <span className="span-checkbox">
              <input type="checkbox" defaultChecked />
              <span></span>
            </span>
            <span className="user-login-content-input-text">自动登录</span>
          </div>
        </div>
        <button className="user-login-btn">登录</button>
        <div className="user-login-bottom flex flex-between">
          <div className="user-login-bottom-left">
            <span>其他登录方式</span>
            <i className="icon icon-zfb"></i>
            <i className="icon icon-tb"></i>
            <i className="icon icon-wb"></i>
          </div>
          <a href="/user/register" className="user-login-bottom-right">注册用户</a>
        </div>
      </div>
    )
  }
}

export default Login