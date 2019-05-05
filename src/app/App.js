import React from 'react'
import { Switch, Route } from 'react-router-dom'

import User from '@app/user'

function App() {
  return (
    <Switch>
      <Route exact path='/user/:id' component={User} />
    </Switch>
  )
}

export default App
