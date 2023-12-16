import { useState } from "react"
import GloableContext from "./GloableContext"

function ContextProvider({children}) {
    const [url,setUrl] = useState(localStorage.getItem("currentUrl")||"/")
    const[nameOfQarui,setNameOfQarui] = useState(localStorage.getItem("nameOfQauri")||"")

  return (
     <GloableContext.Provider value={{url,setUrl,nameOfQarui,setNameOfQarui}}>
        {children}
    </GloableContext.Provider>
  )
}

export default ContextProvider