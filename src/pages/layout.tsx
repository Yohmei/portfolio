import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import { spring_easing, s } from '../utils'
import { PrevPathContext } from './../contextapi/PrevPathProvider'

export interface IPageProps {
  turn_page: (to: string) => void
  opacity: any
  to: (opacity: number, func: (coord: number) => string | undefined) => string | undefined
}

export const transition_time = 200

const layout = (Page: React.FunctionComponent<any>, child_name: string) => {
  Page = animated(Page)
  return () => {
    const [turning_page, set_turning_page] = useState(false)
    const { set_path } = useContext(PrevPathContext)
    const hist = useHistory()
    const transition = useTransition(turning_page, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: {
        duration: transition_time,
        easing: (t) => spring_easing(t),
      },
    })

    const turn_page = (to: string) => {
      set_turning_page(true)
      set_path({ next_path: to, prev_path: hist.location.pathname })
      setTimeout(() => {
        hist.push(to)
      }, transition_time)
    }

    const to = (opacity: number, func: (coord: number) => string | undefined) => {
      return func(opacity)
    }

    useEffect(() => {
      s('body').style.transform = 'translate3d(0, 0, 0)'
      const top_link_mouseover_listener = () => (s('body').style.transform = 'translate3d(0, 20px, 0)')
      const bottom_link_mouseover_listener = () => (s('body').style.transform = 'translate3d(0, -20px, 0)')
      const link_mouseleave_listener = () => (s('body').style.transform = 'translate3d(0, 0, 0)')
      s(`.bookmark-${child_name}`).style.setProperty('--bg-color', '#000')
      s(`.link-${child_name}`).classList.add('disabled-link')

      if (s('.top-link')) {
        s('.top-link').addEventListener('mouseover', top_link_mouseover_listener)
        s('.top-link').addEventListener('mouseleave', link_mouseleave_listener)
      }

      if (s('.bottom-link')) {
        s('.bottom-link').addEventListener('mouseover', bottom_link_mouseover_listener)
        s('.bottom-link').addEventListener('mouseleave', link_mouseleave_listener)
      }

      return () => {
        s(`.bookmark-${child_name}`).style.setProperty('--bg-color', 'transparent')
        s(`.link-${child_name}`).classList.remove('disabled-link')

        if (s('.top-link')) {
          s('.top-link').removeEventListener('mouseover', top_link_mouseover_listener)
          s('.top-link').removeEventListener('mouseleave', link_mouseleave_listener)
        }

        if (s('.bottom-link')) {
          s('.bottom-link').removeEventListener('mouseover', bottom_link_mouseover_listener)
          s('.bottom-link').removeEventListener('mouseleave', link_mouseleave_listener)
        }
      }
    }, [])

    return (
      <>
        {transition(({ opacity }: any, condition) => {
          return condition ? '' : <Page opacity={opacity} turn_page={turn_page} to={to} />
        })}
      </>
    )
  }
}

export default layout
