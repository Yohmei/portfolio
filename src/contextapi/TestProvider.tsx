import React, { createContext, useReducer } from 'react'
import reducer, { initial_state, ITestAction, ITestPayload } from './reducer/test_reducer'

interface ITestContext {
  state: ITestPayload
  dispatch: React.Dispatch<ITestAction>
}

export const TestContext = createContext({} as ITestContext)

const TestProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initial_state)
  return <TestContext.Provider value={{ state, dispatch }}>{children}</TestContext.Provider>
}

export default TestProvider
