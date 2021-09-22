import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import Works from './pages/Works/Works'

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Works,
    path: '/works',
    exact: true,
  },
  {
    component: NotFound,
    path: '*',
    exact: false,
  },
]

export default routes
