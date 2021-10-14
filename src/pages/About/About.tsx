import React from 'react'
import layout, { IPageProps } from '../layout'

const About = ({ turn_page, style }: IPageProps) => {
  return (
    <main className='about' style={style}>
      <a onClick={() => turn_page('/projects')} className='global-links top-link about-link'>
        PROJECTS
      </a>
      <div className='content'>
        <h1>About</h1>
      </div>
      <div style={{ flex: '1 1 auto', content: '', height: '140px' }}></div>
    </main>
  )
}

export default layout(About, 'about')
