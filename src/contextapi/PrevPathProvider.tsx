import React, { createContext, useState } from 'react'

interface IPath {
  prev_path: string
  next_path: string
}

interface IPrevPathContext {
  path: IPath
  set_path: React.Dispatch<React.SetStateAction<IPath>>
}

export const PrevPathContext = createContext({} as IPrevPathContext)

const PrevPathProvider = ({ children }: any) => {
  const [path, set_path] = useState({ prev_path: 'undefined', next_path: 'undefined' })

  return <PrevPathContext.Provider value={{ path, set_path }}>{children}</PrevPathContext.Provider>
}

export default PrevPathProvider
