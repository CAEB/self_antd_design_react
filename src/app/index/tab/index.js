import React, { Component } from 'react'
import className from 'classnames'
import { CSSTransition } from 'react-transition-group'

import './index.less'

const TabPane = props => {
  return <div></div>
}

export class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: props.activeKey,
      tabLinkWidth: 0,
      tabLinkLeft: 0
    }
  }

  static TabPane = TabPane


  componentDidUpdate() {
    if (this.state.tabLinkWidth === 0) {
      this.setState({
        tabLinkWidth: this.activeLink.clientWidth
      })
    }
  }

  /* 渲染tab头部 */
  renderTabHeader(children) {
    const { activeId } = this.state

    const headers = children.map(child => {
      const { tab, tabKey } = child.props
      const classNames = className('tab-header-item', { active: activeId === tabKey })
      return activeId === tabKey ? (
        <div className={classNames} key={tabKey} ref={ref => this.activeLink = ref} onClick={event => this.headerClick(tabKey, event)}>{tab}</div>
      ) :
        (
          <div className={classNames} key={tabKey} onClick={event => this.headerClick(tabKey, event)}>{tab}</div>
        )
    })

    return headers
  }

  /* 渲染tab内容 */
  renderTabContent(children) {
    const { activeId } = this.state
    const content = children.map(child => {
      const { children, tabKey, className: selfClassName } = child.props
      const classNames = className('tab-content-item', { active: activeId === tabKey }, selfClassName)

      return (
        <CSSTransition
          in={activeId === tabKey}
          timeout={300}
          classNames="tab-change"
          key={tabKey}
          unmountOnExit>
          <div className={classNames}>
            {children}
          </div>
        </CSSTransition>

      )
    })

    return content
  }


  headerClick(id, event) {
    this.setState({
      activeId: id,
      tabLinkWidth: event.target.clientWidth,
      tabLinkLeft: event.target.offsetLeft
    })
  }

  render() {
    const { tabLinkLeft, tabLinkWidth } = this.state
    const { children, className } = this.props

    return (
      <div className={`tab ${className}`}>
        <div className="tab-header">
          <div className="flex flex-between tab-header-wrapper">
            {this.renderTabHeader(children)}
            <div className="tab-link" style={{ left: `${tabLinkLeft}px`, width: `${tabLinkWidth}px` }}></div>
          </div>
        </div>

        <div className="tab-content">
          <div className="tab-content-wrapper flex">
            {this.renderTabContent(children)}
            {/* <div className="tab-content-item">
              <div className="list notification-list flex-vertical-center flex-between">
                <div className="notification-list-left">
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png" alt="icon" />
                </div>
                <div className="notification-list-right">
                  <div className="top">你收到了 14 份新周报</div>
                  <div className="bottom">2 年前</div>
                </div>
              </div>
            </div>
            <div className="tab-content-item">
              <div className="list message-list"></div>
            </div>
            <div className="tab-content-item">
              <div className="list event-list"></div>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Tab
