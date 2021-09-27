import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import routes from '../routes'
import { s, sa } from '../utils'

const Nav = () => {
  const nav_ref = React.createRef<HTMLElement>()

  useEffect(() => {
    const nav = nav_ref.current
    const show_nav_content = () => {
      if (s('li > a > span')) {
        const els = sa('li > a > span')
        for (let i = 0; i < els.length; i++) {
          const el = els[i]
          el.style.setProperty('--opacity', '1')
        }
      }
    }

    const hide_nav_content = () => {
      if (s('li > a > span')) {
        const els = sa('li > a > span')
        for (let i = 0; i < els.length; i++) {
          const el = els[i]
          el.style.setProperty('--opacity', '0')
        }
      }
    }

    if (nav) {
      nav.addEventListener('mouseenter', show_nav_content)
      nav.addEventListener('mouseleave', hide_nav_content)
    }

    return () => {
      if (nav) {
        nav.removeEventListener('mouseenter', show_nav_content)
        nav.addEventListener('mouseleave', hide_nav_content)
      }
    }
  }, [nav_ref])

  return (
    <nav ref={nav_ref}>
      <ul>
        {routes.map((route, i) => {
          if (route.link_name !== '')
            return (
              <li key={i}>
                <Link to={route.path} className={`link-${route.link_name}`}>
                  <div className={`bookmark bookmark-${route.link_name}`}></div>
                  <span>{route.link_name.toUpperCase()}</span>
                </Link>
              </li>
            )
          else return ''
        })}
      </ul>
    </nav>
  )
}

export default Nav
