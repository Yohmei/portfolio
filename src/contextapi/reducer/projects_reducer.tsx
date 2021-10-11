import { IProject } from '../../pages/Projects/mock-projects'

export interface IProjectsPayload extends IProject {}

export interface IProjectsAction {
  type: string
  payload: IProjectsPayload[]
}

export const initial_state = []

const reducer = (state: IProjectsPayload[] = initial_state, action: IProjectsAction) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_PROJECTS':
      return payload
    default:
      return state
  }
}

export default reducer
