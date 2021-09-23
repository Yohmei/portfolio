import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../routes'

const Nav = () => {
  return (
    <nav>
      <ul>
        {routes.map((route, i) => {
          if (route.link_name !== '' && route.link_name !== 'home')
            return (
              <li key={i}>
                <Link to={route.path}>{route.link_name.toUpperCase()}</Link>
              </li>
            )
          else return ''
        })}
      </ul>
    </nav>
  )
}

export default Nav
