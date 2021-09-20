import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: NotFound,
    path: '*',
    exact: false,
  },
]

export default routes
