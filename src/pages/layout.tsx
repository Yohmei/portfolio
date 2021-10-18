import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import { s } from '../utils'

export interface IPageProps {
  turn_page: (to: string) => void
  style: any
}

export const transition_time = 200

const layout = (Page: React.FunctionComponent<any>, child_name: string) => {
  Page = animated(Page)
  return () => {
    const [turning_page, set_turning_page] = useState(false)
    const hist = useHistory()
    const transition = useTransition(turning_page, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: transition_time },
    })

    const turn_page = (to: string) => {
      set_turning_page(true)
      setTimeout(() => {
        hist.push(to)
      }, transition_time)
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
        {transition((style, condition) => {
          return condition ? '' : <Page style={style} turn_page={turn_page} />
        })}
      </>
    )
  }
}

export default layout
