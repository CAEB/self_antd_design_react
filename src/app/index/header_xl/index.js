import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import MockMenus from '@mock/header'
import './index.less'

class HeaderXl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MockMenus: MockMenus,
      activeId: 1
    }
  }

  /* 切换菜单 */
  changeMenu(id) {
    let {activeId} = this.state

    activeId = activeId === id ? null : id
    this.setState({
      activeId
    })
  }

  render() {
    const {MockMenus, activeId} = this.state

    return (
      <div className="index-left-menu">
        <div className="index-left-menu-logo flex-both-center">
          <NavLink to="/index" className="flex-both-center"><i></i>Ant Design Pro</NavLink> 
        </div>
        <div className="index-left-menu-content">
          <ul className="menu-root">
            {
              MockMenus.map(menu => (
                <li className="menu" key={menu.id}>
                  <div className="menu-title flex flex-between" onClick={() => this.changeMenu(menu.id)} style={{color: menu.id === activeId ? '#fff' : ''}}>
                    <div className="menu-title-icon flex flex-both-center">
                      <i>{menu.icon}</i><span>{menu.title}</span>
                    </div>
                    <div className="menu-right flex flex-both-center"><i>{menu.id === activeId ? menu.icon_right_top : menu.icon_right_bottom}</i></div>
                  </div>
                  <ul className="menu-submenu" style={{height: menu.id === activeId ? 52 * menu.submenus.length : 0}}>
                    {
                      menu.submenus.map(submenu => (
                        <li key={submenu.id} className="menu-submenu-item">
                          <NavLink activeStyle={{backgroundColor: '#1890ff', color: '#fff'}} to={submenu.to}>{submenu.title}</NavLink>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default HeaderXl