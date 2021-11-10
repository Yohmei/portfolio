export interface IProject {
  id: string
  title: string
  description: string[]
  page: number
  timestamp: Date
  img: string
  img_url?: string
}

export const projects: IProject[] = [
  {
    id: '_rd4qi66qqka',
    title: 'Gala de Luxe',
    description: ['Gala de Luxe description'],
    page: 1,
    timestamp: new Date(),
    img: '',
  },
  {
    id: '_ysrnjhxmbuf',
    title: 'Gala de Luxe Dashboard',
    description: ['Gala de Luxe Dashboard description'],
    page: 2,
    timestamp: new Date(),
    img: '',
  },
  {
    id: '_pkn0v37jetl',
    title: 'Kartons',
    description: ['Kartons description'],
    page: 3,
    timestamp: new Date(),
    img: '',
  },
  {
    id: '_0ctnuurkgosh',
    title: 'ReFire',
    description: ['ReFire description'],
    page: 4,
    timestamp: new Date(),
    img: '',
  },
  {
    id: '_3auugm5jv5x',
    title: 'Razzle Starter',
    description: ['Razzle Starter description'],
    page: 5,
    timestamp: new Date(),
    img: '',
  },
  {
    id: '_4lhyct4fsr8',
    title: 'Nature of Code',
    description: ['Nature of Code description'],
    page: 6,
    timestamp: new Date(),
    img: '',
  },
  {
    id: '_a9nt1kctdhl',
    title: 'Thinker',
    description: ['Thinker description'],
    page: 7,
    timestamp: new Date(),
    img: '',
  },
  {
    id: '_85jmy2ogu0e',
    title: 'JSON Web Token Auth',
    description: ['JSON Web Token Auth description'],
    page: 8,
    timestamp: new Date(),
    img: '',
  },
]
