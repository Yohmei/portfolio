import React, { useEffect, useState } from 'react'
import ParShadows from '../../../components/ParShadows'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link, useParams } from 'react-router-dom'
import { capitalise_words } from '../../../utils'

interface IPathParams {
  project_id: string
}

const Project = () => {
  const [scroll_height, set_scroll_height] = useState(0)
  const description_ref = React.createRef<HTMLDivElement>()
  let { project_id } = useParams<IPathParams>()

  useEffect(() => {
    if (description_ref.current) set_scroll_height(description_ref.current?.scrollHeight - 11)
    return () => {}
  }, [])

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
                  <h2>{capitalise_words(project_id.replaceAll('-', ' '))}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, error odio. Quas tempore
                    blanditiis consequuntur quos culpa. Eum recusandae enim excepturi officia non est cupiditate
                    pariatur sapiente, quis eligendi repudiandae.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus, a aut laudantium
                    recusandae autem accusamus. Praesentium fugit neque voluptate facilis, amet laboriosam deserunt
                    rerum! Nostrum ullam corrupti placeat voluptates!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus, a aut laudantium
                    recusandae autem accusamus. Praesentium fugit neque voluptate facilis, amet laboriosam deserunt
                    rerum! Nostrum ullam corrupti placeat voluptates!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus, a aut laudantium
                    recusandae autem accusamus. Praesentium fugit neque voluptate facilis, amet laboriosam deserunt
                    rerum! Nostrum ullam corrupti placeat voluptates!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus, a aut laudantium
                    recusandae autem accusamus. Praesentium fugit neque voluptate facilis, amet laboriosam deserunt
                    rerum! Nostrum ullam corrupti placeat voluptates!
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam doloribus, a aut laudantium
                    recusandae autem accusamus. Praesentium fugit neque voluptate facilis, amet laboriosam deserunt
                    rerum! Nostrum ullam corrupti placeat voluptates!
                  </p>
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
            <div className='left'>⮞</div>
            <div className='pages'>1/6</div>
            <div className='right'>⮞</div>
          </div>
          <div className='filler'>To Dashboard</div>
        </div>
      </div>
    </main>
  )
}

export default Project
