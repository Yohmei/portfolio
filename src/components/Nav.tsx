import React, { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { PrevPathContext } from '../contextapi/PrevPathProvider'
import routes from '../routes'
import { s, sa } from '../utils'

const Nav = () => {
  const nav_ref = React.createRef<HTMLElement>()
  const { path, set_path } = useContext(PrevPathContext)
  const hist = useHistory()

  const turn_page = (to: string) => {
    set_path({ next_path: to, prev_path: '' })
    setTimeout(() => {
      hist.push(to)
    }, 0)
  }

  useEffect(() => {
    const nav = nav_ref.current
    const show_nav_content = () => {
      if (s('li > div > span')) {
        const els = sa('li > div > span')
        for (let i = 0; i < els.length; i++) {
          const el = els[i]
          el.style.setProperty('--opacity', '1')
        }
      }
    }

    const hide_nav_content = () => {
      if (s('li > div > span')) {
        const els = sa('li > div > span')
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
                <div onClick={() => turn_page(route.path)} className={`nav-link link-${route.link_name}`}>
                  <div className={`bookmark bookmark-${route.link_name}`}></div>
                  <span>{route.link_name.toUpperCase()}</span>
                </div>
              </li>
            )
          else return ''
        })}
      </ul>
    </nav>
  )
}

export default Nav
