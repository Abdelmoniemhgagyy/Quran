import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import Qurai from "../../data/qurai"
import { useState } from "react"
import { useContext } from "react"
import GloableContext from "../../store/GloableContext"
function MainPage() {
  
const { url, setUrl } = useContext(GloableContext);

  return (
    <div className="h-[1000px]  bg-black text-white text-center" >
      <div className="mb-[10px] mx-auto">

      <img src={Logo} alt="logo" className="rounded-full w-[100px] h-[100px] md:w-[250px] md:h-[250px] " />


      </div>
            <div className="mx-auto"> 
                <h1 className="text-xl  font-semibold">القران الكريم</h1>
            </div>

          
           {/* } */}

 <div className="container pt-10 mx-auto grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-[10px] items-center">{Qurai.map((item)=>{
   return(
    <div key={item.id} className="max-w-[307px]"> 
    <Link to="/quran" onClick={()=> setUrl(item.url_audio)} className="p-7 block rounded-[20px] bg-gray-700 cursor-pointer text-center">{item.name}</Link>
    {console.log(url)}
    </div>
   )
             
            } 
            )}</div>
    </div>
  )
}

export default MainPage