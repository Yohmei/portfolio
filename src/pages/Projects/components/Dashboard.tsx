import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useHistory } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import ParShadows from '../../../components/ParShadows'
import { ProjectsContext } from '../../../contextapi/ProjectsProvider'
import { spring_easing } from '../../../utils'
import { transition_time } from '../../layout'
import gl from '../../../assets/img/gl.png'

interface IDashboardProps {
  coming_from_project: boolean
  set_coming_from_project: React.Dispatch<React.SetStateAction<boolean>>
  turning_project_page: boolean
  set_turning_project_page: React.Dispatch<React.SetStateAction<boolean>>
}

const Dashboard = ({
  coming_from_project,
  set_coming_from_project,
  turning_project_page,
  set_turning_project_page,
}: IDashboardProps) => {
  const { projects } = useContext(ProjectsContext)
  const [scroll_height, set_scroll_height] = useState(0)
  const hist = useHistory()
  const content_ref = React.createRef<HTMLDivElement>()
  let transition = useTransition(turning_project_page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: transition_time, easing: (t) => spring_easing(t) },
    onRest: () => turning_project_page && set_turning_project_page(false),
  })

  const open_project = (path: string) => {
    set_turning_project_page(true)
    set_coming_from_project(true)
    setTimeout(() => {
      hist.push(path)
    }, transition_time)
  }

  useEffect(() => {
    let is_mounted = true
    if (content_ref.current && is_mounted) set_scroll_height(content_ref.current?.scrollHeight - 11)
    return () => {
      is_mounted = false
    }
  }, [content_ref])

  return (
    <>
      {transition(({ opacity }: any, condition) => {
        return condition ? (
          ''
        ) : (
          <animated.div
            style={{
              opacity,
              transform: opacity.to((coord: number) => {
                let new_coord = 0.5 - coord
                new_coord = 0.5 + new_coord

                if (coming_from_project) return `translate3d(${new_coord * -100}px,0,0)`
              }),
            }}
            className='content'
            ref={content_ref}
          >
            <ParShadows width={'100%'} left={0}>
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
                <div className='projects-box'>
                  {projects.map((project) => {
                    return (
                      <div
                        key={project.id}
                        onClick={() => {
                          open_project(`/projects/${project.id}`)
                        }}
                      >
                        <div className='project-showcase'>
                          <div className='proj-img' style={{ backgroundImage: `url(${gl})` }}>
                            <div>{project.title}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Scrollbars>
            </ParShadows>
          </animated.div>
        )
      })}
    </>
  )
}

export default Dashboard
