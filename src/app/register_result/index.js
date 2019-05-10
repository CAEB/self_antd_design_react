import React, { Component } from 'react'

import './index.less'

class RegisterResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
  }

  componentDidMount() {
    this.setState({
      email: localStorage.getItem('email')
    })
  }
  
  render() {
    return (
      <div className="register-result">
        <div className="register-result-top">
          <i></i>
        </div>
        <div className="register-result-content">
          <div className="register-result-content-email">你的账户：{this.state.email} 注册成功</div>
          <div className="register-result-content-tip">激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。</div>
        </div>
        <div className="register-result-bottom flex">
          <button className="look-email">查看邮箱</button>
          <button>返回首页</button>
        </div>
      </div>
    )
  }
}

export default RegisterResult