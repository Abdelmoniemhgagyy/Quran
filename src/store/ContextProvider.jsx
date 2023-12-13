import { useState } from "react"
import GloableContext from "./GloableContext"

function ContextProvider({children}) {
    const [url,setUrl] = useState("/")


  return (
     <GloableContext.Provider value={{url,setUrl}}>
        {children}
    </GloableContext.Provider>
  )
}

export default ContextProvider