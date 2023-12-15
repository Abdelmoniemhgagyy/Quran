import { useState } from "react"
import { Link } from "react-router-dom"
import data from "../data/downloadQuran"
function Download() {
    const [searchVal ,setSearchVal]=useState("")
    const dataSearch = data.filter((item)=> item.name.includes(searchVal))

  return (
<div className="min-h-screen bg-black text-white py-8  ">
            <div className="mx-auto text-center "> 
                <h1 className="text-2xl  font-semibold">تحميل القران الكريم كامل </h1>
            </div>



{/* Start search  */}
   <div className="pt-8 w-[70%] md:w-[500px] mx-auto">
    <input type="text" onChange={(e)=> setSearchVal(e.target.value)} placeholder="بحث"
    className="p-2 px-4 w-full text-center text-lg border border-[#333] outline-none rounded-full text-black" dir="rtl"/>
   </div>
{/* End Search  */}

 {/* download icon */}
 <div className="fixed left-4 md:left-7 top-5 text-3xl ">
  <Link to="/"> 
  <i className="bi bi-arrow-left-circle hover:text-green-300"></i>
  </Link> 
  </div>
 {/* End download icon */}


{/* show Data  */}
<div className=" pt-8 px-2 mx-auto grid grid-cols-2 md:grid-cols-3
  lg:grid-cols-4  xl:grid-cols-4 gap-[10px]
   items-center" dir="rtl">
  { dataSearch.map((item)=>{
   return(
    <div key={item.id} className="max-w-[307px] "> 

    <Link to={item.url} 
      className="p-3  block rounded-[20px] relative
       bg-blue-500 cursor-pointer text-right hover:scale-[1.05]
       transition duration-100">
           {item.name}
           <i className="bi bi-download absolute left-8  hover:text-green-300"></i>
       </Link>
    </div>
   )
             
            } 
            )}</div>

{/* End show Data  */}


</div>
  )
}

export default Download