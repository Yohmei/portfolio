import React from 'react'
import { Route, Switch } from 'react-router-dom'
import TestProvider from '../../contextapi/TestProvider'
import layout from '../layout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'

const Projects = () => {
  return (
    <TestProvider>
      <Switch>
        <Route exact path='/projects'>
          <Dashboard></Dashboard>
        </Route>
        <Route path={`/projects/:project_id`}>
          <Project />
        </Route>
      </Switch>
    </TestProvider>
  )
}

export default layout(Projects, 'projects')
