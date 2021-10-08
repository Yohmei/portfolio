import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring'
import { base_log, getHeight, getWidth, s } from '../../utils'
import layout from '../layout'
import Scroll from './components/Scroll'

const Home = () => {
  const ani_style = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })

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
    <main className='home'>
      <div className='signature'>maxim yourich</div>
      <animated.div style={ani_style} className='content'></animated.div>
      <Link to='/projects' className='global-links bottom-link'>
        PROJECTS
      </Link>
    </main>
  )
}

export default layout(Home, 'cover')
