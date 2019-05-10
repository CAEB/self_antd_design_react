import React, { Component } from 'react'

import HeaderXl from '@app/index/header_xl'
import './index.less'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="index flex flex-between">
        <HeaderXl />
        <div className="index-content">
        </div>
      </div>
    )
  }
}

export default Index