import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
// import loadable from '@loadable/component'
// import pMinDelay from 'p-min-delay'

// const Home = loadable(() => pMinDelay(import('./pages/Home/Home'), 300))
// const NotFound = loadable(() => pMinDelay(import('./pages/NotFound'), 300))
// const Projects = loadable(() => pMinDelay(import('./pages/Projects/Projects'), 300))
// const About = loadable(() => pMinDelay(import('./pages/About/About'), 300))

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
