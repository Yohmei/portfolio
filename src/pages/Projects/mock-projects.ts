import { r_id } from '../../utils'

export interface IProject {
  id: string
  title: string
  description: string
  page: number
  timestamp: Date
}

export const projects: IProject[] = [
  {
    id: r_id(),
    title: 'Gala de Luxe',
    description: 'Gala de Luxe description',
    page: 1,
    timestamp: new Date(),
  },
  {
    id: r_id(),
    title: 'Gala de Luxe Dashboard',
    description: 'Gala de Luxe Dashboard description',
    page: 2,
    timestamp: new Date(),
  },
  {
    id: r_id(),
    title: 'Kartons',
    description: 'Kartons description',
    page: 3,
    timestamp: new Date(),
  },
  {
    id: r_id(),
    title: 'ReFire',
    description: 'ReFire description',
    page: 4,
    timestamp: new Date(),
  },
  {
    id: r_id(),
    title: 'Razzle Starter',
    description: 'Razzle Starter description',
    page: 5,
    timestamp: new Date(),
  },
  {
    id: r_id(),
    title: 'Nature of Code',
    description: 'Nature of Code description',
    page: 6,
    timestamp: new Date(),
  },
  {
    id: r_id(),
    title: 'Thinker',
    description: 'Thinker description',
    page: 7,
    timestamp: new Date(),
  },
  {
    id: r_id(),
    title: 'JSON Web Token Auth',
    description: 'JSON Web Token Auth description',
    page: 8,
    timestamp: new Date(),
  },
]
