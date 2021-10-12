import React, { useEffect, useState } from 'react'
import { animated, SpringValue, useTransition } from 'react-spring'
import { s } from '../utils'

export interface IPageProps {
  set_turning_page: React.Dispatch<React.SetStateAction<boolean>>
  style: any
}

export const transition_time = 200

const layout = (Page: React.FunctionComponent<any>, child_name: string) => {
  Page = animated(Page)
  return () => {
    const [turning_page, set_turning_page] = useState(false)
    const transition = useTransition(turning_page, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: { duration: transition_time },
    })

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
          return condition ? '' : <Page style={style} set_turning_page={set_turning_page} />
        })}
      </>
    )
  }
}

export default layout
