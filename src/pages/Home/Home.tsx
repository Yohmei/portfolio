import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { base_log, getHeight, getWidth, s } from '../../utils'
import layout, { transition_time } from '../layout'
import { IPageProps } from './../layout'

const Home = ({ set_turning_page, style }: IPageProps) => {
  const hist = useHistory()

  const turn_page = () => {
    set_turning_page(true)
    setTimeout(() => {
      hist.push('/projects')
    }, transition_time)
  }

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
    <main className='home' style={style}>
      <div className='signature'>maxim yourich</div>
      <div className='content'></div>
      <a onClick={turn_page} className='global-links bottom-link'>
        PROJECTS
      </a>
    </main>
  )
}

export default layout(Home, 'cover')
