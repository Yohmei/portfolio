import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProjectsProvider from '../../contextapi/ProjectsProvider'
import layout, { IPageProps } from '../layout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'

const Projects = ({ turn_page, style }: IPageProps) => {
  return (
    <ProjectsProvider>
      <a onClick={() => turn_page('/')} className='global-links top-link projects-link'>
        COVER
      </a>
      <Switch>
        <Route exact path='/projects'>
          <Dashboard style={style} turn_page={turn_page}></Dashboard>
        </Route>
        <Route path={`/projects/:project_id`}>
          <Project style={style} />
        </Route>
      </Switch>
      <a onClick={() => turn_page('/about')} className='global-links bottom-link projects-link'>
        ABOUT
      </a>
    </ProjectsProvider>
  )
}

export default layout(Projects, 'projects')
