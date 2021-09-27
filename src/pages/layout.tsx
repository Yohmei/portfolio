import React, { useEffect } from 'react'
import { s } from '../utils'

const layout = (Page: React.FunctionComponent<any>, child_name: string) => {
  return () => {
    useEffect(() => {
      s(`.bookmark-${child_name}`).style.setProperty('--bg-color', '#000')
      s(`.link-${child_name}`).classList.add('disabled-link')
      return () => {
        s(`.bookmark-${child_name}`).style.setProperty('--bg-color', 'transparent')
        s(`.link-${child_name}`).classList.remove('disabled-link')
      }
    }, [])
    return <Page />
  }
}

export default layout
