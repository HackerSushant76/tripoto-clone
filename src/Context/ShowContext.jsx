import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ShowContext = createContext()
function ShowContextProvider({children}) {
    const [show, setShow] = useState(false)
    const [isAuth,setIsAuth]=useState(false)
  return (
    <ShowContext.Provider value={{show,setShow,isAuth,setIsAuth}}>
        {children}
    </ShowContext.Provider>
  )
}

export default ShowContextProvider