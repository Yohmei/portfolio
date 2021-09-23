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
      <Router history={history}>
        <Nav />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} component={route.component} exact={route.exact}></Route>
          ))}
        </Switch>
        <footer>
          <Link to='/'>maxim yourich</Link>
        </footer>
      </Router>
    </div>
  )
}

export default App
