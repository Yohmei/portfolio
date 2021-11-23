import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useHistory, useParams } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import ParShadows from '../../../components/ParShadows'
import { ProjectsContext } from '../../../contextapi/ProjectsProvider'
import { s, sa, spring_easing } from '../../../utils'
import { transition_time } from '../../layout'
import { IProject } from './../mock-projects'

interface IPathParams {
  project_id: string
}

interface IProjectProps {
  set_coming_from_project: React.Dispatch<React.SetStateAction<boolean>>
  turning_project_page: boolean
  set_turning_project_page: React.Dispatch<React.SetStateAction<boolean>>
}

const Project = ({ set_coming_from_project, turning_project_page, set_turning_project_page }: IProjectProps) => {
  const [force_descr_height_update, set_force_descr_height_update] = useState('undefined')
  const img_ref = React.useRef<HTMLImageElement>(null)
  const { projects } = useContext(ProjectsContext)
  const [scroll_height, set_scroll_height] = useState(0)
  const description_ref = React.createRef<HTMLDivElement>()
  const { project_id } = useParams<IPathParams>()
  const hist = useHistory()
  const [project, set_project] = useState<IProject>()
  const [amplifier, set_amplifier] = useState(100)
  let transition = useTransition(turning_project_page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: transition_time, easing: (t) => spring_easing(t) },
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
    s('body').style.transform = 'translate3d(0, 0, 0)'
    set_turning_project_page(true)
    set_coming_from_project(true)
    setTimeout(() => {
      hist.push(`/projects`)
    }, transition_time)
  }

  const turn_project_page = (n: number) => {
    if (sa('.pager').length > 0) {
      sa('.pager').forEach((pager) => {
        pager.style.pointerEvents = 'none'
      })

      setTimeout(() => {
        sa('.pager').forEach((pager) => {
          pager.style.pointerEvents = 'auto'
        })
      }, 500)
    }

    let proj_id = ''
    if (project) proj_id = get_proj_id(project?.page + n)
    if (proj_id !== 'not found' && proj_id !== '') {
      let amplifier = 100
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
    let is_mounted = true
    if (description_ref.current && is_mounted) set_scroll_height(description_ref.current?.scrollHeight - 11)
    return () => {
      is_mounted = false
    }
  }, [description_ref])

  useEffect(() => {
    const proj = projects.filter((proj) => {
      return proj.id === project_id
    })

    if (proj[0]) set_project(proj[0])
  }, [projects, project_id])

  useEffect(() => {
    const dashboard_link_mouseover_listener = () => {
      s('body').style.transform = 'translate3d(20px, 0, 0)'
      s('.filler').style.letterSpacing = '10px'
    }
    const link_mouseleave_listener = () => {
      s('body').style.transform = 'translate3d(0, 0, 0)'
      s('.filler').style.letterSpacing = '0'
    }

    if (s('.to-dashboard-link')) {
      s('.to-dashboard-link').addEventListener('mouseover', dashboard_link_mouseover_listener)
      s('.to-dashboard-link').addEventListener('mouseleave', link_mouseleave_listener)
    }

    return () => {
      if (s('.to-dashboard-link')) {
        s('.to-dashboard-link').removeEventListener('mouseover', dashboard_link_mouseover_listener)
        s('.to-dashboard-link').removeEventListener('mouseleave', link_mouseleave_listener)
      }
    }
  }, [])

  useEffect(() => {
    if (s('#proj-img')) {
      if (Number(s('#proj-img').clientHeight) > 20) {
        set_force_descr_height_update('defined')

        if (force_descr_height_update === 'defined')
          s('.project.description').style.setProperty('--height', `${s('#proj-img').clientHeight}px`)
      }
    }
  }, [img_ref.current?.height, force_descr_height_update])

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
            <h2>{project?.title}</h2>
            <div className='proj-details'>
              <div
                id={project && project.id}
                className='project example'
                // style={{ backgroundImage: `url(${project?.img_url})` }}
              >
                <img id='proj-img' ref={img_ref} src={`${project?.img_url}`} alt={project?.title} />
              </div>
              <div className='project description' ref={description_ref}>
                <ParShadows>
                  <Scrollbars
                    // autoHide
                    // autoHideTimeout={500}
                    // autoHideDuration={300}
                    autoHeight
                    autoHeightMin={0}
                    autoHeightMax={scroll_height}
                    universal={true}
                    renderThumbVertical={(props) => <div {...props} className='thumb-vertical' />}
                  >
                    <div className='description-sack'>
                      {project?.description.map((desc, i) => {
                        return <p key={i}>{desc}</p>
                      })}
                    </div>
                  </Scrollbars>
                </ParShadows>
              </div>
            </div>
          </animated.div>
        )
      })}
      <div className='paginator'>
        <div onClick={open_dashboard} className='to-dashboard-link'>
          back
        </div>
        <div className='pages'>
          <div className='pager-wrap' style={{ cursor: 'pointer' }}>
            <div
              className='left pager'
              onClick={() => turn_project_page(-1)}
              style={project && projects.indexOf(project) === 0 ? { visibility: 'hidden' } : { visibility: 'visible' }}
            >
              <div className='arrow'></div>
            </div>
          </div>
          <div className='pages'>
            {project?.page} - {projects.length}
          </div>
          <div className='pager-wrap' style={{ cursor: 'pointer' }}>
            <div
              className='right pager'
              onClick={() => turn_project_page(+1)}
              style={
                project && projects.indexOf(project) === projects.length - 1
                  ? { visibility: 'hidden' }
                  : { visibility: 'visible' }
              }
            >
              <div className='arrow'></div>
            </div>
          </div>
        </div>
        <div className='filler'>back</div>
      </div>
    </div>
  )
}

export default Project
