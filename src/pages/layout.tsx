import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import { s } from '../utils'
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
    const { path, set_path } = useContext(PrevPathContext)
    const hist = useHistory()
    const transition = useTransition(turning_page, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: transition_time },
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
      s(`.bookmark-${child_name}`).style.setProperty('--bg-color', '#000')
      s(`.link-${child_name}`).classList.add('disabled-link')
      return () => {
        s(`.bookmark-${child_name}`).style.setProperty('--bg-color', 'transparent')
        s(`.link-${child_name}`).classList.remove('disabled-link')
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
