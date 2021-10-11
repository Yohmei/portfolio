import { projects } from '../../pages/Projects/mock-projects'
import { IProjectsAction } from '../reducer/projects_reducer'

export const get_projects = (dispatch: React.Dispatch<IProjectsAction>) => {
  dispatch({ type: 'GET_PROJECTS', payload: projects })
}
