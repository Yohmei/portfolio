import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrevPathContext } from '../../contextapi/PrevPathProvider'
import ProjectsProvider from '../../contextapi/ProjectsProvider'
import layout, { IPageProps } from '../layout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'

const Projects = ({ turn_page, opacity, to }: IPageProps) => {
  const [coming_from_project, set_coming_from_project] = useState(false)
  const { path } = useContext(PrevPathContext)

  return (
    <ProjectsProvider>
      <main
        className='projects'
        style={{
          opacity: opacity,
          transform: to(opacity, (coord: number) => {
            let new_coord = 0.5 - coord
            new_coord = 0.5 + new_coord

            if (path.next_path === '/') return `translate3d(0,${new_coord * 150}px,0)`
            else if (path.next_path === '/about') return `translate3d(0,${new_coord * -150}px,0)`
          }),
        }}
      >
        <div onClick={() => turn_page('/')} className='global-links top-link projects-link'>
          COVER
        </div>
        <Switch>
          <Route exact path='/projects'>
            <Dashboard coming_from_project={coming_from_project} set_coming_from_project={set_coming_from_project} />
          </Route>
          <Route path={`/projects/:project_id`}>
            <Project set_coming_from_project={set_coming_from_project} />
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
