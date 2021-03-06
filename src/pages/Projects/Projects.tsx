import React, { useContext, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrevPathContext } from '../../contextapi/PrevPathProvider'
import layout, { IPageProps } from '../layout'
import Dashboard from './components/Dashboard'
import Project from './components/Project'

const Projects = ({ turn_page, opacity, to }: IPageProps) => {
  const [coming_from_project, set_coming_from_project] = useState(false)
  const [turning_project_page, set_turning_project_page] = useState(false)
  const { path } = useContext(PrevPathContext)

  return (
    <main
      className='projects'
      style={{
        opacity: opacity,
        transform: to(opacity, (coord: number) => {
          let new_coord = 0.5 - coord
          new_coord = 0.5 + new_coord

          if (path.next_path === '/' || path.prev_path === '/') return `translate3d(0,${new_coord * 100}px,0)`
          else if (path.next_path === '/about' || path.prev_path === '/about')
            return `translate3d(0,${new_coord * -100}px,0)`
        }),
      }}
    >
      <div onClick={() => turn_page('/')} className='global-links top-link projects-link'>
        <div className='up'></div>
      </div>
      <Switch>
        <Route exact path='/projects'>
          <Dashboard
            coming_from_project={coming_from_project}
            set_coming_from_project={set_coming_from_project}
            turning_project_page={turning_project_page}
            set_turning_project_page={set_turning_project_page}
          />
        </Route>
        <Route path={`/projects/:project_id`}>
          <Project
            set_coming_from_project={set_coming_from_project}
            turning_project_page={turning_project_page}
            set_turning_project_page={set_turning_project_page}
          />
        </Route>
      </Switch>
      <div onClick={() => turn_page('/about')} className='global-links bottom-link projects-link'>
        <div className='down'></div>
      </div>
    </main>
  )
}

export default layout(Projects, 'projects')
