import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import './scss/styles.scss'
import routes from './routes'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} component={route.component} exact={route.exact}></Route>
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App
