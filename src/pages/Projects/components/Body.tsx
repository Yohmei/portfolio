import React from 'react'
import ParShadows from '../../../components/ParShadows'
import { Scrollbars } from 'react-custom-scrollbars'

const Body = () => {
  return (
    <main className='projects'>
      <div className='content'>
        <div className='project-box'>
          <div className='project example'></div>
          <div className='project description'>
            <ParShadows>
              <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax={'100%'}
                thumbMinSize={30}
                universal={true}
              >
                <div className='description-sack'>
                  <h2>Gala de Luxe</h2>
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
                </div>
              </Scrollbars>
            </ParShadows>
          </div>
        </div>
        <div className='paginator'>1/6</div>
      </div>
    </main>
  )
}

export default Body
