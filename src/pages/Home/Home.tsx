import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home content'>
      <h1>Home</h1>
      <Link to='/works'>Works</Link>
    </div>
  )
}

export default Home
