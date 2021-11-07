import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import PrevPathProvider from './contextapi/PrevPathProvider'
import ProjectsProvider from './contextapi/ProjectsProvider'
import routes from './routes'
import './scss/styles.scss'

const history = createBrowserHistory()

function App() {
  return (
    <div className='App'>
      <h1 className='hide'>maxim yourich portfolio</h1>
      <ProjectsProvider>
        <PrevPathProvider>
          <Router history={history}>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} component={route.component} exact={route.exact}></Route>
              ))}
            </Switch>
            <Nav />
          </Router>
        </PrevPathProvider>
      </ProjectsProvider>
    </div>
  )
}

export default App
