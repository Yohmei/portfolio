import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import routes from './routes'
import './scss/styles.scss'

const history = createBrowserHistory()

function App() {
  return (
    <div className='App'>
      <h1 className='hide'>maxim yourich portfolio</h1>
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} component={route.component} exact={route.exact}></Route>
          ))}
        </Switch>
        <Nav />
      </Router>
    </div>
  )
}

export default App
