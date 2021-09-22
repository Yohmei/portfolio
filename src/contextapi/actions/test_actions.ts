import { ITestAction } from '../reducer/test_reducer'

export const change_test = (diff_str: string, dispatch: React.Dispatch<ITestAction>) => {
  dispatch({ type: 'CHANGE_TEST', payload: { test: diff_str } })
}
