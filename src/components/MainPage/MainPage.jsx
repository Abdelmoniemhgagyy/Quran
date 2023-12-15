import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import Qurai from "../../data/qurai"
import { useState } from "react"
import { useContext } from "react"
import GloableContext from "../../store/GloableContext"
function MainPage() {
  
const { setUrl } = useContext(GloableContext);
const [searchVal ,setSearchVal]=useState("")
 const dataSearch = Qurai.filter((item)=> item.name.includes(searchVal))
 console.log(dataSearch)
  return (
    <div className="pb-8  bg-black text-white text-center" >
      <div className="mb-[10px] mx-auto pt-[30px]">

      <img src={Logo} alt="logo" className="rounded-full mx-auto w-[100px] h-[100px] md:w-[150px] md:h-[150px] " />


      </div>
            <div className="mx-auto"> 
                <h1 className="text-2xl  font-semibold">القران الكريم</h1>
            </div>
   <div className="mt-4 w-[70%] md:w-[500px] mx-auto">
    <input type="text" onChange={(e)=> setSearchVal(e.target.value)} placeholder="بحث" name=""  id=""  className="p-2 px-4 w-full text-center text-lg border border-[#333] outline-none rounded-full text-black" dir="rtl"/>
   </div>
          
        

 <div className=" pt-6 px-2 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-4 gap-[10px] items-center" dir="rtl">{dataSearch.map((item)=>{
   return(
    <div key={item.id} className="max-w-[307px] "> 
    <Link to="/quran" onClick={()=> {
      localStorage.setItem("currentUrl",item.url_audio)
      setUrl(localStorage.getItem("currentUrl"))}} 
      
      className="p-5 text-sm md:text-md block rounded-[20px] bg-[#4a69ff] cursor-pointer text-center hover:scale-[1.05] transition duration-100">
      {item.name}</Link>
    </div>
   )
             
            } 
            )}</div>
    </div>
  )
}

export default MainPage