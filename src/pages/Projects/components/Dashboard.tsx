import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import ParShadows from '../../../components/ParShadows'
import { ProjectsContext } from '../../../contextapi/ProjectsProvider'
import { useHistory } from 'react-router-dom'
import { transition_time } from '../../layout'
import { animated, useTransition } from 'react-spring'

const Dashboard = () => {
  const { projects } = useContext(ProjectsContext)
  const [scroll_height, set_scroll_height] = useState(0)
  const hist = useHistory()
  const content_ref = React.createRef<HTMLDivElement>()
  const [turning_project_page, set_turning_project_page] = useState(false)
  const transition = useTransition(turning_project_page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: transition_time },
    onRest: () => set_turning_project_page(false),
  })

  const open_project = (path: string) => {
    set_turning_project_page(true)
    setTimeout(() => {
      hist.push(path)
    }, transition_time)
  }

  useEffect(() => {
    if (content_ref.current) set_scroll_height(content_ref.current?.scrollHeight - 11)
    return () => {}
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
              transform: opacity.to((x: number) => {
                let new_x = 0.5 - x
                new_x = 0.5 + new_x
                return `translate3d(${new_x * -150}px,0,0)`
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
                        <div className='project-showcase'>{project.title}</div>
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
