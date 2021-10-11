import React, { useContext, useEffect, useState } from 'react'
import ParShadows from '../../../components/ParShadows'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../../../contextapi/ProjectsProvider'

const Dashboard = () => {
  const { projects } = useContext(ProjectsContext)
  const [scroll_height, set_scroll_height] = useState(0)
  const content_ref = React.createRef<HTMLDivElement>()

  useEffect(() => {
    if (content_ref.current) set_scroll_height(content_ref.current?.scrollHeight - 11)
    return () => {}
  }, [content_ref])

  return (
    <main className='projects'>
      <div className='content' ref={content_ref}>
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
                  <Link key={project.id} to={`/projects/${project.id}`}>
                    <div className='project-showcase'>{project.title}</div>
                  </Link>
                )
              })}
            </div>
          </Scrollbars>
        </ParShadows>
      </div>
    </main>
  )
}

export default Dashboard
