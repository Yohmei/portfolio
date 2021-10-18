import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProjectsProvider from '../../contextapi/ProjectsProvider'
import layout, { IPageProps } from '../layout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'

const Projects = ({ turn_page, style }: IPageProps) => {
  return (
    <ProjectsProvider>
      <main className='projects' style={style}>
        <div onClick={() => turn_page('/')} className='global-links top-link projects-link'>
          COVER
        </div>
        <Switch>
          <Route exact path='/projects'>
            <Dashboard />
          </Route>
          <Route path={`/projects/:project_id`}>
            <Project />
          </Route>
        </Switch>
        <div onClick={() => turn_page('/about')} className='global-links bottom-link projects-link'>
          ABOUT
        </div>
      </main>
    </ProjectsProvider>
  )
}

export default layout(Projects, 'projects')
