import { createBrowserHistory } from 'history'
import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import routes from './routes'
import './scss/styles.scss'

// interface IWheelEvent extends Event {
//   wheelDeltaY: number
// }

const history = createBrowserHistory()
// const mouse_scroll = fromEvent(document, 'wheel').pipe(throttleTime(2000))

function App() {
  // useEffect(() => {
  //   const push_next_page = (route: { state: number }) => {
  //     const new_route_state = route.state + 1
  //     if (routes[new_route_state] && routes[new_route_state].path !== '*') {
  //       history.push(routes[new_route_state].path)
  //       route.state = new_route_state
  //     }
  //   }

  //   const push_prev_page = (route: { state: number }) => {
  //     const new_route_state = route.state - 1
  //     if (routes[new_route_state]) {
  //       history.push(routes[new_route_state].path)
  //       route.state = new_route_state
  //     }
  //   }

  //   const key_press_scroll = (e: KeyboardEvent) => {
  //     let route = { state: routes.findIndex((obj) => obj.path === window.location.pathname) }
  //     if (e.key === 'ArrowDown') {
  //       push_next_page(route)
  //     } else if (e.key === 'ArrowUp') {
  //       push_prev_page(route)
  //     }
  //   }

  //   const sub = mouse_scroll.subscribe((event) => {
  //     let route = { state: routes.findIndex((obj) => obj.path === window.location.pathname) }
  //     const wheel_event: IWheelEvent = event as IWheelEvent

  //     if (wheel_event.wheelDeltaY < 0) {
  //       push_next_page(route)
  //     } else if (wheel_event.wheelDeltaY > 0) {
  //       push_prev_page(route)
  //     }
  //   })

  //   document.addEventListener('keydown', key_press_scroll)
  //   return () => {
  //     sub.unsubscribe()
  //     document.removeEventListener('keydown', key_press_scroll)
  //   }
  // }, [])

  return (
    <div className='App'>
      <h1 className='hide'>maxim yourich portfolio</h1>
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} component={route.component} exact={route.exact}></Route>
          ))}
        </Switch>
        <Nav />
      </Router>
    </div>
  )
}

export default App
