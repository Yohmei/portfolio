import React, { useContext } from 'react'
import { PrevPathContext } from '../../contextapi/PrevPathProvider'
import layout, { IPageProps } from '../layout'

const About = ({ turn_page, opacity, to }: IPageProps) => {
  const { path } = useContext(PrevPathContext)

  return (
    <main
      className='about'
      style={{
        opacity,
        transform: to(opacity, (coord: number) => {
          let new_coord = 0.5 - coord
          new_coord = 0.5 + new_coord

          if (path.next_path === '/projects' || path.prev_path === '/projects')
            return `translate3d(0,${new_coord * 150}px,0)`
        }),
      }}
    >
      <div onClick={() => turn_page('/projects')} className='global-links top-link about-link'>
        PROJECTS
      </div>
      <div className='content'>
        <h1>About</h1>
      </div>
      <div style={{ flex: '1 1 auto', content: '', height: '140px' }}></div>
    </main>
  )
}

export default layout(About, 'about')
