import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { change_test } from '../../../contextapi/actions/test_actions'
import { TestContext } from '../../../contextapi/TestProvider'
import Test from './Test'

const Body = () => {
  const { dispatch } = useContext(TestContext)
  return (
    <div className='content works'>
      <h1>Works</h1>
      <Link to='/'>Home</Link>
      <p onClick={() => change_test('bla blu ble', dispatch)}>Change text below</p>
      <Test></Test>
    </div>
  )
}

export default Body
