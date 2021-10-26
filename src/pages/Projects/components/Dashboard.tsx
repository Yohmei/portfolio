import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import ParShadows from '../../../components/ParShadows'
import { ProjectsContext } from '../../../contextapi/ProjectsProvider'
import { useHistory } from 'react-router-dom'
import { transition_time } from '../../layout'
import { animated, useTransition } from 'react-spring'
import { PrevPathContext } from '../../../contextapi/PrevPathProvider'

interface IDashboardProps {
  coming_from_project: boolean
  set_coming_from_project: React.Dispatch<React.SetStateAction<boolean>>
}

const Dashboard = ({ coming_from_project, set_coming_from_project }: IDashboardProps) => {
  const { projects } = useContext(ProjectsContext)
  const [scroll_height, set_scroll_height] = useState(0)
  const { path } = useContext(PrevPathContext)
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
    set_coming_from_project(true)
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
              transform: opacity.to((coord: number) => {
                let new_coord = 0.5 - coord
                new_coord = 0.5 + new_coord

                if (coming_from_project) return `translate3d(${new_coord * -150}px,0,0)`
                else if (path.prev_path === '/') return `translate3d(0,${new_coord * 150}px,0)`
                else if (path.prev_path === '/about') return `translate3d(0,${new_coord * -150}px,0)`
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
