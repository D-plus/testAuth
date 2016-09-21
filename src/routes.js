import React from 'react'
import { Route } from 'react-router'
import { App } from './containers/App'
import Signin from './components/auth/signin'

export const routes = (
  <div>
    <Route path='/' component={App} >
      <Route path='/signin' component={Signin} />
    </Route>
  </div>
)
