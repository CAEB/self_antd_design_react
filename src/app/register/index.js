import React, { Component } from 'react'

import './index.less'

class Register extends Component {
  
  render() {
    return (
      <div className="user-register">
        <div className="user-register-title">注册</div>
        <div className="user-register-input">
          <input type="text" placeholder="邮箱"/>
        </div>
        <div className="user-register-input">
          <input type="text" placeholder="至少6位密码，区分大小写"/>
        </div>
        <div className="user-register-input">
          <input type="text" placeholder="确认密码"/>
        </div>
        <div className="user-register-input">
          <input type="text" placeholder="手机号"/>
        </div>
        <div className="user-register-input">
          <input type="text" placeholder="验证码"/>
          <button>获取验证码</button>
        </div>
        <div className="user-register-bottom">
          <button>注册</button>
          <a>使用已有账户登录</a>
        </div>
      </div>
    )
  }
}

export default Register