import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import TestProvider from '../../contextapi/TestProvider'
import layout from '../layout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'

const Projects = () => {
  return (
    <TestProvider>
      <Link to='/' className='global-links top-link projects-link'>
        COVER
      </Link>
      <Switch>
        <Route exact path='/projects'>
          <Dashboard></Dashboard>
        </Route>
        <Route path={`/projects/:project_id`}>
          <Project />
        </Route>
      </Switch>
      <Link to='/about' className='global-links bottom-link projects-link'>
        ABOUT
      </Link>
    </TestProvider>
  )
}

export default layout(Projects, 'projects')
