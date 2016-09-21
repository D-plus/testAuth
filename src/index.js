import React from 'react'
import { configureStore } from './store/configureStore'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from './routes'



const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} >
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
