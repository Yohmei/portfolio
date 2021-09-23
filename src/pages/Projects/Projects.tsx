import React from 'react'
import TestProvider from '../../contextapi/TestProvider'
import Body from './components/Body'

const Projects = () => {
  return (
    <TestProvider>
      <Body></Body>
    </TestProvider>
  )
}

export default Projects
