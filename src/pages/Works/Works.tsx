import React from 'react'
import TestProvider from '../../contextapi/TestProvider'
import Body from './components/Body'

const Works = () => {
  return (
    <TestProvider>
      <Body></Body>
    </TestProvider>
  )
}

export default Works
