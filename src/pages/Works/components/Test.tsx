import React, { useContext } from 'react'
import { TestContext } from '../../../contextapi/TestProvider'

const Test = () => {
  const { state } = useContext(TestContext)
  const { test } = state
  return <div>{test}</div>
}

export default Test
