import React from 'react'
import { Switch, Route } from 'react-router-dom'

import User from '@app/user'
import Index from '@app/index'
import AuthRouter from '@app/auth_router'

function App() {

  return (
    <Switch>
      <Route exact path='/user/:id' component={User} />
      <AuthRouter path='/' component={Index}/>
    </Switch>
  )
}

export default App
