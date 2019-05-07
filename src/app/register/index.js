import React, { Component } from 'react'

import validateForm from '@utils/validate'
import './index.less'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      phoneNumber: '',
      verifyCode: '',
      validateRules: {
        email: {
          rules: [{
            name: 'required',
            text: '请输入邮箱地址！'
          }, {
            name: 'isEmail',
            text: '邮箱地址格式错误！'
          }],
          results: {
            verify: true
          }
        },
        password: {
          rules: [{
            name: 'required',
            text: '请输入密码！'
          }, {
            name: 'minLength:6',
            text: ''
          }],
          results: {
            verify: true
          }
        },
        confirmPassword: {
          rules: [{
            name: 'required',
            text: '请确认密码！'
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

  handleChange(name, event) {
    if (name === 'password') {
      this.setState({
        isShow: event.target.value !== '' ? true : false
      })
    }

    this.setState({
      [name]: event.target.value
    }, () => {
      const { password, validateRules, confirmPassword } = this.state
      if (name === 'confirmPassword' && confirmPassword !== '') {
        validateRules.confirmPassword.results = password !== confirmPassword ? {
          verify: false,
          text: '两次输入的密码不匹配!'
        } : {
            verify: true
          }

        this.setState({
          validateRules
        })
      } else {
        this.setState({
          validateRules: validateForm(validateRules, name, this.state[name])
        })
      }
    })
  }

  /* 获取密码的浮层 */
  getPopover() {
    const { isShow, password } = this.state
    const processLen = password.length * 10 >= 100 ? '100%' : password.length * 10 + '%'
    const getLevel = password => {
      let len = password.length
      if (len < 6) {
        return {
          level: '太短',
          color: '#f5222d'
        }
      } else if (len >= 6 && len <= 9) {
        return {
          level: '中',
          color: '#faad14'
        }
      } else {
        return {
          level: '强',
          color: '#52c41a'
        }
      }
    }

    return isShow ? (
      <div className="user-register-input-popover">
        <div className="arrow"></div>
        <div className="title" style={{ color: getLevel(password).color }}>强度：{getLevel(password).level}</div>
        <div className="process">
          <div className="inner-process" style={{ width: processLen, background: getLevel(password).color }}></div>
        </div>
        <div className="tip">
          请至少输入 6 个字符。请不要使用容易被猜到的密码。
        </div>
      </div>
    ) : null
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
    const { validateRules } = this.state;
    ['email', 'password', 'confirmPassword', 'phoneNumber', 'verifyCode'].forEach(data => {
      this.setState({
        validateRules: validateForm(validateRules, data, this.state[data])
      })
    })

    const isValid = Object.keys(validateRules).every(data => validateRules[data].results.verify)
    if (isValid) {
      console.log('submit')
    }
  }

  render() {
    const { sendObj } = this.state
    const { email, password, confirmPassword, phoneNumber, verifyCode } = this.state.validateRules
    return (
      <div className="user-register">
        <div className="user-register-title">注册</div>
        <div className="user-register-input">
          <input type="text" placeholder="邮箱" className={`${email.results.verify ? '' : 'has-error'}`} onChange={event => this.handleChange('email', event)} />
        </div>
        {email.results.text && <span className="has-error-text">{email.results.text}</span>}
        <div className="user-register-input">
          <input type="password" placeholder="至少6位密码，区分大小写" className={`${password.results.verify ? null : 'has-error'}`} onChange={event => this.handleChange('password', event)} />
          {this.getPopover()}
        </div>
        {password.results.text && <span className="has-error-text">{password.results.text}</span>}
        <div className="user-register-input">
          <input type="password" placeholder="确认密码" className={`${confirmPassword.results.verify ? null : 'has-error'}`} onChange={event => this.handleChange('confirmPassword', event)} />
        </div>
        {confirmPassword.results.text && <span className="has-error-text">{confirmPassword.results.text}</span>}
        <div className="user-register-input">
          <input type="text" placeholder="手机号" className={`${phoneNumber.results.verify ? null : 'has-error'}`} onChange={event => this.handleChange('phoneNumber', event)} />
        </div>
        {phoneNumber.results.text && <span className="has-error-text">{phoneNumber.results.text}</span>}
        <div className="user-register-input">
          <input type="text" placeholder="验证码" className={`${verifyCode.results.verify ? null : 'has-error'}`} onChange={event => this.handleChange('verifyCode', event)} />
          <button onClick={() => this.getPhoneCode()} disabled={sendObj.sended}>
            {sendObj.sending ? <span className="loading"></span> : sendObj.text}
          </button>
        </div>
        {verifyCode.results.text && <span className="has-error-text">{verifyCode.results.text}</span>}
        <div className="user-register-bottom">
          <button disabled onClick={() => this.formSubmit()}>
          </button>
          <a href="/user/login">使用已有账户登录</a>
        </div>
      </div>
    )
  }
}

export default Register