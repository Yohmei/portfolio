import React from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'
import ProjectsProvider from '../../contextapi/ProjectsProvider'
import layout, { IPageProps, transition_time } from '../layout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'

const Projects = ({ set_turning_page, style }: IPageProps) => {
  const hist = useHistory()

  const turn_page = (to: string) => {
    set_turning_page(true)
    setTimeout(() => {
      hist.push(to)
    }, transition_time)
  }

  return (
    <ProjectsProvider>
      <a onClick={() => turn_page('/')} className='global-links top-link projects-link'>
        COVER
      </a>
      <Switch>
        <Route exact path='/projects'>
          <Dashboard style={style}></Dashboard>
        </Route>
        <Route path={`/projects/:project_id`}>
          <Project />
        </Route>
      </Switch>
      <a onClick={() => turn_page('/about')} className='global-links bottom-link projects-link'>
        ABOUT
      </a>
    </ProjectsProvider>
  )
}

export default layout(Projects, 'projects')
