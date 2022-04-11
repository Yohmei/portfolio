import React, { useContext, useEffect } from 'react'
import { PrevPathContext } from '../../contextapi/PrevPathProvider'
import { s } from '../../utils'
import layout from '../layout'
import { IPageProps } from './../layout'

const Home = ({ turn_page, opacity, to }: IPageProps) => {
  const { path } = useContext(PrevPathContext)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (path.prev_path === 'undefined')
      timeout = setTimeout(() => {
        s('#home-down') && s('#home-down').click()
      }, 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [path.prev_path])

  return (
    <main
      className='home'
      style={{
        opacity,
        transform: to(opacity, (coord: number) => {
          let new_coord = 0.5 - coord
          new_coord = 0.5 + new_coord

          if (path.next_path === '/projects' || path.prev_path === '/projects')
            return `translate3d(0,${new_coord * -100}px,0)`
        }),
      }}
    >
      <div className='signature'></div>
      <div className='content'>maxim yourich</div>
      <div onClick={() => turn_page('/projects')} className='global-links bottom-link'>
        <div className='down' id='home-down'></div>
      </div>
    </main>
  )
}

export default layout(Home, 'cover')
