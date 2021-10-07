import React, { useEffect, useState } from 'react'
import ParShadows from '../../../components/ParShadows'
import { Scrollbars } from 'react-custom-scrollbars'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [scroll_height, set_scroll_height] = useState(0)
  const description_ref = React.createRef<HTMLDivElement>()

  useEffect(() => {
    if (description_ref.current) set_scroll_height(description_ref.current?.scrollHeight - 11)
    return () => {}
  }, [])

  return (
    <main className='projects'>
      <div className='content' ref={description_ref}>
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
              <Link to={`/projects/${'gala-de-luxe'}`}>
                <div className='project-showcase'>Gala de Luxe</div>
              </Link>
              <Link to={`/projects/${'gala-de-luxe-dashboard'}`}>
                <div className='project-showcase'>Gala de Luxe Dashboard</div>
              </Link>
              <Link to={`/projects/${'kartons'}`}>
                <div className='project-showcase'>Kartons</div>
              </Link>
              <Link to={`/projects/${'refire'}`}>
                <div className='project-showcase'>ReFire</div>
              </Link>
              <Link to={`/projects/${'razzle-starter'}`}>
                <div className='project-showcase'>Razzle Starter</div>
              </Link>
              <Link to={`/projects/${'nature-of-code'}`}>
                <div className='project-showcase'>Nature of Code</div>
              </Link>
              <Link to={`/projects/${'thinker'}`}>
                <div className='project-showcase'>Thinker</div>
              </Link>
              <Link to={`/projects/${'json-web-Token-auth'}`}>
                <div className='project-showcase'>JSON Web Token Auth</div>
              </Link>
            </div>
          </Scrollbars>
        </ParShadows>
      </div>
    </main>
  )
}

export default Dashboard
