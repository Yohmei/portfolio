import React from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'
import './scss/styles.scss'
import routes from './routes'
import { createBrowserHistory } from 'history'
import Nav from './components/Nav'

const history = createBrowserHistory()

function App() {
  return (
    <div className='App'>
      <div className='hide'>
        <h1>font load</h1>
      </div>
      <Router history={history}>
        <header>
          <Link to='/'>maxim yourich</Link>
        </header>

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
