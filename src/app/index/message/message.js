import React from 'react'
import { render } from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './message.less'

const icon = {
  info: <svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="#1890ff" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>,
  success: <svg viewBox="64 64 896 896" data-icon="check-circle" width="1em" height="1em" fill="#52c41a" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>,
  error: <svg viewBox="64 64 896 896" data-icon="close-circle" width="1em" height="1em" fill="#f5222d" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>,
  warning: <svg viewBox="64 64 896 896" data-icon="info-circle" width="1em" height="1em" fill="#faad14" aria-hidden="true" focusable="false"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>
}

const Message = ({ messages }) => (
  <div className="self-message flex">
    <TransitionGroup component={null}>
      {
        messages.map(({ id, type, title }) => (
          <CSSTransition
            timeout={300}
            classNames="message"
            key={id}
            unmountOnExit
          >
            <div className="self-message-list">
              {icon[type]}
              <span>{title}</span>
            </div>
          </CSSTransition>
        ))
      }
    </TransitionGroup>
  </div>
)


class RenderMessage {
  constructor() {
    this.inited = false
    this.id = 0
    this.messages = []
  }

  init() {
    this._div = document.createElement('div')
    document.body.appendChild(this._div)
    this.inited = true
  }

  initMessage() {
    !this.inited && this.init()
    this.id++
    this.render()
  }

  info(title = "提示", duration = 2, onClose) {
    this.initMessage()
    this.addMessage('info', title)
    this.removeMessage(this.id, duration, onClose && onClose)
  }

  success(title = "成功", duration = 2, onClose) {
    this.initMessage()
    this.addMessage('success', title)
    this.removeMessage(this.id, duration, onClose && onClose)
  }

  error(title = "错误", duration = 2, onClose) {
    this.initMessage()
    this.addMessage('error', title)
    this.removeMessage(this.id, duration, onClose && onClose)
  }

  warning(title = "警告", duration = 2, onClose) {
    this.initMessage()
    this.addMessage('warning', title)
    this.removeMessage(this.id, duration, onClose && onClose)
  }

  addMessage(type, title) {
    this.messages.push({
      id: this.id,
      type,
      title
    })
    this.render()
  }

  removeMessage(id, duration, onClose) {
    setTimeout(() => {
      this.messages = this.messages.filter(msg => msg.id !== id)
      this.render()
      onClose && onClose()
    }, duration * 1000)
  }

  render() {
    render(<Message messages={this.messages} />, this._div)
  }

}

export default new RenderMessage()