import React, { createContext, useEffect, useReducer } from 'react'
import { IProject } from '../pages/Projects/mock-projects'
import reducer, { initial_state, IProjectsAction } from './reducer/projects_reducer'
import { get_projects } from './actions/projects_actions'

interface IProjectsContext {
  projects: IProject[]
  dispatch: React.Dispatch<IProjectsAction>
}

export const ProjectsContext = createContext({} as IProjectsContext)

const ProjectsProvider = ({ children }: any) => {
  const [projects, dispatch] = useReducer(reducer, initial_state)

  useEffect(() => {
    get_projects(dispatch)
  }, [])
  return <ProjectsContext.Provider value={{ projects, dispatch }}>{children}</ProjectsContext.Provider>
}

export default ProjectsProvider
