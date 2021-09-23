// import Home from './pages/Home/Home'
// import NotFound from './pages/NotFound'
// import Works from './pages/Works/Works'
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'

const Home = loadable(() => pMinDelay(import('./pages/Home/Home'), 200))
const NotFound = loadable(() => pMinDelay(import('./pages/NotFound'), 200))
const Projects = loadable(() => pMinDelay(import('./pages/Projects/Projects'), 200))
const About = loadable(() => pMinDelay(import('./pages/About/About'), 200))

const routes = [
  {
    component: Home,
    link_name: 'home',
    path: '/',
    exact: true,
  },
  {
    component: About,
    link_name: 'about',
    path: '/about',
    exact: true,
  },
  {
    component: Projects,
    link_name: 'projects',
    path: '/projects',
    exact: true,
  },

  {
    component: NotFound,
    link_name: '',
    path: '*',
    exact: false,
  },
]

export default routes
