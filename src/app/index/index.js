import React, { Component } from 'react'
import axios from 'axios'
import { CSSTransition } from 'react-transition-group'
import Icon from '@components/icon'

import HeaderXl from '@app/index/header_xl'
import Tabs from '@app/index/tab'
import message from '@app/index/message/message'
import './index.less'

class Index extends Component {
  constructor(props) {
    super(props)
    this.searchInput = React.createRef()
    this.state = {
      searchInputIsShow: false,
      messages: [],
      tabShow: false,
      settingShow: false
    }
  }

  componentDidMount() {
    axios.get('/user/message').then(res => this.setState({
      messages: res.data
    }))
  }

  setNotificationRead(id) {
    let { messages } = this.state

    messages = messages.map(msg => {
      if (msg.id === id) {
        return {
          ...msg,
          read: true
        }
      }

      return msg
    })

    this.setState({
      messages
    })
  }

  /**
  * @description 过滤消息信息
  * @param {object[]} messages 
  * @returns {object}
  */
  getMessages(messages) {
    return {
      notifications: messages.filter(data => data.type === 'notification'),
      messages: messages.filter(data => data.type === 'message'),
      events: messages.filter(data => data.type === 'event')
    }
  }

  setStatusStyle(status) {
    const statusStyle = {
      todo: {
        color: 'rgba(0,0,0,.65)',
        backgroundColor: 'rgb(250, 250, 250)',
        borderColor: '#d9d9d9'
      },
      urgent: {
        color: '#f5222d',
        backgroundColor: '#fff1f0',
        borderColor: '#ffa39e'
      },
      doing: {
        color: '#faad14',
        backgroundColor: '#fffbe6',
        borderColor: '#ffe58f'
      },
      processing: {
        color: '#1890ff',
        backgroundColor: '#e6f7ff',
        borderColor: '#91d5ff'
      }
    }

    return statusStyle[status]
  }

  showSearchInput() {
    this.setState({
      searchInputIsShow: !this.state.searchInputIsShow
    })
    this.searchInput.current.focus()
  }

  render() {
    const { TabPane } = Tabs
    const { searchInputIsShow, messages, tabShow, settingShow } = this.state
    const { notifications, messages: msgs, events } = this.getMessages(messages)
    const { length } = messages.filter(msg => !msg.read)

    return (
      <div className="index flex flex-between">
        <HeaderXl />
        <div className="index-content">
          <header className="flex flex-between">
            <div className="fold-menu-icon"><i></i></div>
            <div className="header-handle-items flex flex-between">
              <div className="handle-search flex flex-both-center">
                <i onClick={() => this.showSearchInput()}></i>
                <div className="search-input" style={{ width: searchInputIsShow ? '210px' : '0' }}>
                  <input type="text" placeholder="站内搜索" ref={this.searchInput} onBlur={() => this.setState({ searchInputIsShow: false })} />
                </div>
              </div>
              <div className="handle-question">
                {/* eslint-disable-next-line */}
                <a href="https://pro.ant.design/docs/getting-started" target="_blank"></a>
                <div className="question-tip">使用文档</div>
              </div>
              <div className="handle-messages">
                <i onClick={() => this.setState({ tabShow: !tabShow })}>
                  <span>{length}</span>
                </i>
                <CSSTransition
                  in={tabShow}
                  timeout={200}
                  classNames="scaleY"
                  unmountOnExit>
                  <Tabs messages={messages} activeKey="1" className="self-tab">
                    <TabPane tab={`通知(${notifications.length})`} tabKey="1" className="self-tab-pane">
                      {
                        notifications.map(notification => (
                          <div className="list notification-list flex-vertical-center flex-between" key={notification.id} onClick={() => this.setNotificationRead(notification.id)} style={{ opacity: notification.read ? '.4' : '1' }}>
                            <div className="notification-list-left">
                              <img src={notification.avatar} alt="icon" />
                            </div>
                            <div className="notification-list-right">
                              <div className="top">{notification.title}</div>
                              <div className="bottom">{notification.datetime}</div>
                            </div>
                          </div>
                        ))
                      }
                      <div className="tab-footer flex flex-between">
                        <div className="tab-footer-item">清空通知</div>
                        <div className="tab-footer-item" onClick={() => message.info('查看更多click')}>查看更多</div>
                      </div>
                    </TabPane>
                    <TabPane tab={`消息(${msgs.length})`} tabKey="2" className="self-tab-pane">
                      {
                        msgs.map(msg => (
                          <div className="list msg-list flex flex-between" key={msg.id}>
                            <div className="msg-list-left">
                              <img style={{ borderRadius: '50%' }} src={msg.avatar} alt="icon" />
                            </div>
                            <div className="msg-list-right">
                              <div className="top">{msg.title}</div>
                              <div className="bottom">{msg.description}</div>
                              <div className="bottom">{msg.datetime}</div>
                            </div>
                          </div>
                        ))
                      }
                      <div className="tab-footer flex flex-between">
                        <div className="tab-footer-item">清空消息</div>
                        <div className="tab-footer-item" onClick={() => message.info('查看更多click')}>查看更多</div>
                      </div>
                    </TabPane>
                    <TabPane tab={`待办(${events.length})`} tabKey="3" className="self-tab-pane">
                      {
                        events.map(event => (
                          <div className="list event-list" key={event.id} >
                            <div className="event-list-top flex flex-between">
                              <div className="event-name">{event.title}</div>
                              <div className="event-status" style={this.setStatusStyle(event.status)}>{event.extra}</div>
                            </div>
                            <div className="event-list-bottom">
                              {event.description}
                            </div>
                          </div>
                        ))
                      }
                      <div className="tab-footer flex flex-between">
                        <div className="tab-footer-item">清空通知</div>
                        <div className="tab-footer-item" onClick={() => message.info('查看更多click')}>查看更多</div>
                      </div>
                    </TabPane>
                  </Tabs>
                </CSSTransition>

              </div>
              <div className="handle-person-setting" onMouseOver={() => this.setState({settingShow: true})} onMouseLeave={() => this.setState({settingShow: false})}>
                <div className="person-info flex flex-both-center">
                  <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="user-avatar" />
                  <span>CAEB</span>
                </div>
                <CSSTransition
                  in={settingShow}
                  timeout={200}
                  classNames="scaleY"
                  unmountOnExit>
                  <div className="person-handle-content">
                    <ul>
                      <li className="person-handle-item">
                        <Icon type="user" />
                        <span>个人中心</span>
                      </li>
                      <li className="person-handle-item">
                        <Icon type="setting" />
                        <span>个人设置</span>
                      </li>
                      <li className="person-handle-item">
                        <Icon type="close-circle" />
                        <span>触发报错</span>
                      </li>
                      <li className="person-handle-divider"></li>
                      <li className="person-handle-item">
                        <Icon type="logout" />
                        <span>退出登录</span>
                      </li>
                    </ul>
                  </div>
                </CSSTransition>

              </div>
            </div>
          </header>
        </div>
      </div>
    )
  }
}

export default Index