import React, { useContext, useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link, useHistory, useParams } from 'react-router-dom'
import ParShadows from '../../../components/ParShadows'
import { ProjectsContext } from '../../../contextapi/ProjectsProvider'
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

  const get_proj_id = (page: number) => {
    const proj = projects.find((proj) => {
      return proj.page === page
    })

    if (proj) return proj.id
    else return 'not found'
  }

  const turn_page = (n: number) => {
    let proj_id = ''
    if (project) proj_id = get_proj_id(project?.page + n)
    if (proj_id !== 'not found' && proj_id !== '') hist.push(`/projects/${proj_id}`)
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
    <main className='projects'>
      <div className='content'>
        <div className='project-box'>
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
        </div>
        <div className='paginator'>
          <Link className='to-dashboard-link' to='/projects'>
            <div>To Dashboard</div>
          </Link>
          <div className='pages'>
            <div className='left' onClick={() => turn_page(-1)}>
              ⮞
            </div>
            <div className='pages'>
              {project?.page} - {projects.length}
            </div>
            <div className='right' onClick={() => turn_page(+1)}>
              ⮞
            </div>
          </div>
          <div className='filler'>To Dashboard</div>
        </div>
      </div>
    </main>
  )
}

export default Project
