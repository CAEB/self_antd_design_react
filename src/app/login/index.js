import React, { Component } from 'react'

import validateForm from '@utils/validate'
import './index.less'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'username',
      username: '',
      password: '',
      phoneNumber: '',
      verifyCode: '',
      validateRules: {
        username: {
          rules: [{
            name: 'required',
            text: '请输入用户名!'
          }],
          results: {
            verify: true
          }
        },
        password: {
          rules: [{
            name: 'required',
            text: '请输入密码！'
          }],
          results: {
            verify: true
          }
        },
        phoneNumber: {
          rules: [{
            name: 'required',
            text: '请输入手机号！'
          }, {
            name: 'isPhone',
            text: '手机号格式错误！'
          }],
          results: {
            verify: true
          }
        },
        verifyCode: {
          rules: [{
            name: 'required',
            text: '请输入验证码！'
          }],
          results: {
            verify: true
          }
        }
      },
      isShow: false,
      sendObj: {
        sended: false,
        sending: false,
        text: '获取验证码'
      }
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

  handleChange(name, event) {
    this.setState({
      [name]: event.target.value
    }, () => {
      const { validateRules } = this.state
      this.setState({
        validateRules: validateForm(validateRules, name, this.state[name])
      })
    })
  }

  /* 获取验证码 */
  getPhoneCode() {
    const { validateRules, phoneNumber, sendObj } = this.state;
    this.setState({
      validateRules: validateForm(validateRules, 'phoneNumber', phoneNumber)
    })

    const canGetCode = validateRules.phoneNumber.results.verify

    if (canGetCode) {
      sendObj.sending = true
      this.setState({
        sendObj
      })
      let second = 10
      setTimeout(() => {
        sendObj.sending = false
        sendObj.text = second + 's'
        sendObj.sended = true
        this.setState({
          sendObj
        })

        let timer = setInterval(() => {
          if (second === 1) {
            sendObj.sended = false
            sendObj.text = '获取验证码'
            clearInterval(timer)
          } else {
            sendObj.text = --second + 's'
          }
          this.setState({
            sendObj
          })
        }, 1000)

      }, 2000)
    }
  }

  formSubmit() {
    const { type, validateRules } = this.state
    let isValid = false

    if (type === 'username') {
      ['username', 'password'].forEach(data => {
        this.setState({
          validateRules: validateForm(validateRules, data, this.state[data])
        })
      })
      isValid = ['username', 'password'].every(data => validateRules[data].results.verify)
    } else {
      ['phoneNumber', 'verifyCode'].forEach(data => {
        this.setState({
          validateRules: validateForm(validateRules, data, this.state[data])
        })
      })
      isValid = ['phoneNumber', 'verifyCode'].every(data => validateRules[data].results.verify)
    }

    if (isValid) {
      localStorage.setItem('username', this.state.username || this.state.phoneNumber)
    }


  }

  render() {
    const { type, sendObj } = this.state
    const { username, password, phoneNumber, verifyCode } = this.state.validateRules
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
                    <input type="text" placeholder="用户名: admin or user" value={this.state.username} className={`${username.results.verify ? '' : 'has-error'}`} onChange={event => this.handleChange('username', event)} />
                  </div>
                  {username.results.text && <span className="has-error-text">{username.results.text}</span>}
                  <div className="user-login-content-input">
                    <input type="password" placeholder="密码: ant.design" value={this.state.password} className={`${password.results.verify ? '' : 'has-error'}`} onChange={event => this.handleChange('password', event)} />
                  </div>
                  {password.results.text && <span className="has-error-text">{password.results.text}</span>}
                </div>
              ) :
              (
                <div>
                  <div className="user-login-content-input">
                    <input type="text" placeholder="手机号" value={this.state.phoneNumber} className={`${phoneNumber.results.verify ? '' : 'has-error'}`} onChange={event => this.handleChange('phoneNumber', event)} />
                  </div>
                  {phoneNumber.results.text && <span className="has-error-text">{phoneNumber.results.text}</span>}
                  <div className="user-login-content-input">
                    <input type="text" placeholder="验证码" value={this.state.verifyCode} className={`${verifyCode.results.verify ? '' : 'has-error'}`} onChange={event => this.handleChange('verifyCode', event)} />
                    <button onClick={() => this.getPhoneCode()} disabled={sendObj.sended}>
                      {sendObj.sending ? <span className="loading"></span> : sendObj.text}
                    </button>
                  </div>
                  {verifyCode.results.text && <span className="has-error-text">{verifyCode.results.text}</span>}
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
        <button className="user-login-btn" onClick={() => this.formSubmit()}>登录</button>
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