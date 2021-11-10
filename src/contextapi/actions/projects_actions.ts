import { getDownloadURL } from '@firebase/storage'
import { collection, getDocs, query } from 'firebase/firestore'
import { ref } from 'firebase/storage'
import { db, storage } from '../../firebase'
import { IProjectsAction, IProjectsPayload } from '../reducer/projects_reducer'
import { request } from './../../utils'
import { IProject } from './../../pages/Projects/mock-projects'

const get_img_blob = async (project: IProject) => {
  const img_download_url = await getDownloadURL(ref(storage, project.img))
  const blob = await request('GET', img_download_url, 'blob')
  return { project_id: project.id, blob }
}

const get_img_blobs = async (projects: IProject[]) => {
  let blobs = []

  for (let project of projects) {
    blobs.push(get_img_blob(project))
  }

  blobs = await Promise.all(blobs)

  return blobs
}

export const get_projects = async (dispatch: React.Dispatch<IProjectsAction>) => {
  const q = query(collection(db, 'projects'))
  let payload = [] as IProjectsPayload[]

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    const project = doc.data() as IProjectsPayload
    payload.push(project)
  })

  const img_blobs = await get_img_blobs(payload)

  for (let img_blob of img_blobs) {
    payload.map((project) => {
      if (project.id === img_blob.project_id) {
        project.img_url = URL.createObjectURL(img_blob.blob)
        const img_el = document.createElement('img')
        img_el.setAttribute('src', project.img_url)
        img_el.setAttribute('style', 'width: 200px; height: 100px; visibility: hidden;')
        document.body.appendChild(img_el)
      }
      return project
    })
  }

  payload.sort((a, b) => {
    return a.page - b.page
  })

  dispatch({ type: 'GET_PROJECTS', payload })
}
