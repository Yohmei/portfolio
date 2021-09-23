import React, { useEffect } from 'react'
import { s } from '../../utils'

const Home = () => {
  useEffect(() => {
    const getWidth = () => {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      )
    }

    const getHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      )
    }

    const mou_move = (event: MouseEvent) => {
      if (event.clientX < getWidth() / 2) {
        console.log('o')
      }
    }

    document.addEventListener('mousemove', mou_move)

    return () => {
      document.removeEventListener('mousemove', mou_move)
    }
  }, [])
  return (
    <main className='home'>
      <div className='content'></div>
    </main>
  )
}

export default Home
