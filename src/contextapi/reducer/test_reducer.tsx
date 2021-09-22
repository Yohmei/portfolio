export const initial_state = {
  test: 'initial_state',
}

export interface ITestPayload {
  test: string
}

export interface ITestAction {
  type: string
  payload: ITestPayload
}

const reducer = (state: ITestPayload = initial_state, action: ITestAction) => {
  const { type, payload } = action
  switch (type) {
    case 'CHANGE_TEST':
      return payload
    default:
      return state
  }
}

export default reducer
