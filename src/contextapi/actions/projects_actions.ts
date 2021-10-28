import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebase'
import { IProjectsAction, IProjectsPayload } from '../reducer/projects_reducer'

export const get_projects = async (dispatch: React.Dispatch<IProjectsAction>) => {
  const q = query(collection(db, 'projects'))
  const payload = [] as IProjectsPayload[]

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const project = doc.data() as IProjectsPayload
    payload.push(project)
  })

  payload.sort((a, b) => {
    return a.page - b.page
  })

  dispatch({ type: 'GET_PROJECTS', payload })
}
