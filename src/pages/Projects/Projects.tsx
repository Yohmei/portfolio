import React from 'react'
import TestProvider from '../../contextapi/TestProvider'
import layout from '../layout'
import Body from './components/Body'

const Projects = () => {
  return (
    <TestProvider>
      <Body></Body>
    </TestProvider>
  )
}

export default layout(Projects, 'projects')
