import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link, useHistory, useParams } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import ParShadows from '../../../components/ParShadows'
import { ProjectsContext } from '../../../contextapi/ProjectsProvider'
import { transition_time } from '../../layout'
import { IProject } from './../mock-projects'

interface IPathParams {
  project_id: string
}

const Project = () => {
  const { projects } = useContext(ProjectsContext)
  const [scroll_height, set_scroll_height] = useState(0)
  const description_ref = React.createRef<HTMLDivElement>()
  const { project_id } = useParams<IPathParams>()
  const hist = useHistory()
  const [project, set_project] = useState<IProject>()
  const [turning_project_page, set_turning_project_page] = useState(false)
  const [amplifier, set_amplifier] = useState(150)
  const transition = useTransition(turning_project_page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: transition_time },
    onRest: () => set_turning_project_page(false),
  })

  const get_proj_id = (page: number) => {
    const proj = projects.find((proj) => {
      return proj.page === page
    })

    if (proj) return proj.id
    else return 'not found'
  }

  const open_dashboard = () => {
    let amplifier = 150
    set_turning_project_page(true)
    set_amplifier(amplifier)
    setTimeout(() => {
      hist.push(`/projects`)
    }, transition_time)
  }

  const turn_project_page = (n: number) => {
    let proj_id = ''
    if (project) proj_id = get_proj_id(project?.page + n)
    if (proj_id !== 'not found' && proj_id !== '') {
      let amplifier = 150
      if (project) {
        if (project?.page < project?.page + n) set_amplifier(-amplifier)
        else set_amplifier(amplifier)
      }

      set_turning_project_page(true)
      setTimeout(() => {
        if (project) {
          if (project?.page < project?.page + n) set_amplifier(amplifier)
          else set_amplifier(-amplifier)
        }

        hist.push(`/projects/${proj_id}`)
      }, transition_time)
    }
  }

  useEffect(() => {
    if (description_ref.current) set_scroll_height(description_ref.current?.scrollHeight - 11)
    return () => {}
  }, [description_ref])

  useEffect(() => {
    const proj = projects.filter((proj) => {
      return proj.id === project_id
    })

    if (proj[0]) set_project(proj[0])
  }, [projects, project_id])

  return (
    <div className='content'>
      {transition(({ opacity }: any, condition) => {
        return condition ? (
          ''
        ) : (
          <animated.div
            style={{
              opacity,
              transform: opacity.to((x: number) => {
                let new_x = 0.5 - x
                new_x = 0.5 + new_x
                return `translate3d(${new_x * amplifier}px,0,0)`
              }),
            }}
            className='project-box'
          >
            <div className='project example'></div>
            <div className='project description' ref={description_ref}>
              <ParShadows>
                <Scrollbars
                  autoHide
                  autoHideTimeout={500}
                  autoHideDuration={300}
                  autoHeight
                  autoHeightMin={0}
                  autoHeightMax={scroll_height}
                  universal={true}
                  renderThumbVertical={(props) => <div {...props} className='thumb-vertical' />}
                >
                  <div className='description-sack'>
                    <h2>{project?.title}</h2>
                    {project?.description.map((desc, i) => {
                      return <p key={i}>{desc}</p>
                    })}
                  </div>
                </Scrollbars>
              </ParShadows>
            </div>
          </animated.div>
        )
      })}
      <div className='paginator'>
        <div onClick={open_dashboard} className='to-dashboard-link'>
          <div>To Dashboard</div>
        </div>
        <div className='pages'>
          <div className='left' onClick={() => turn_project_page(-1)}>
            ⮞
          </div>
          <div className='pages'>
            {project?.page} - {projects.length}
          </div>
          <div className='right' onClick={() => turn_project_page(+1)}>
            ⮞
          </div>
        </div>
        <div className='filler'>To Dashboard</div>
      </div>
    </div>
  )
}

export default Project
