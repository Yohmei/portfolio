import React, { useContext, useEffect } from 'react'
import { PrevPathContext } from '../../contextapi/PrevPathProvider'
import { base_log, getHeight, getWidth, s } from '../../utils'
import layout from '../layout'
import { IPageProps } from './../layout'

const Home = ({ turn_page, opacity, to }: IPageProps) => {
  const { path } = useContext(PrevPathContext)

  useEffect(() => {
    const gx_center = getWidth() / 2
    const gy_center = getHeight() / 2
    const mou_move = (event: MouseEvent) => {
      if (s('.home > .content')) {
        const el = s('.home > .content')
        let x = gx_center - event.clientX
        let y = gy_center - event.clientY
        const base = 3

        if (x < 0) x = -base_log(base, x * -1)
        else if (x === 0) x = 0
        else x = base_log(base, x)

        if (y < 0) y = -base_log(base, y * -1)
        else if (y === 0) y = 0
        else y = base_log(base, y)

        el.style.setProperty('--x', String(`${x}px`))
        el.style.setProperty('--y', String(`${y}px`))
      }
    }

    document.addEventListener('mousemove', mou_move)

    return () => {
      document.removeEventListener('mousemove', mou_move)
    }
  }, [])

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
      <div className='signature'>maxim yourich</div>
      <div className='content'></div>
      <div onClick={() => turn_page('/projects')} className='global-links bottom-link'>
        <div className='down'></div>
      </div>
    </main>
  )
}

export default layout(Home, 'cover')
