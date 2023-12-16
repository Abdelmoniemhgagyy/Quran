import  { useEffect, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import namesOfsura from "../../data/quran"
import 'react-h5-audio-player/lib/styles.css';
import "./styles.css"
import { useContext } from 'react';
import GloableContext from '../../store/GloableContext';
function Player1() {
    const [num, setNum]= useState(1);
    const {url,nameOfQarui} = useContext(GloableContext)
    const [id,setId] = useState(0)
    const[nameOfSura,setNameOfSura] =useState("الفاتحة")
     
    console.log(nameOfQarui)
// السور من 1-9 بضفلهم 00 y
// السور من 10-99 بضفلهم 0 y 

 const urlAduio = id < 10 ? `${url}00${num}.mp3`: id < 100 ? `${url}0${num}.mp3`:`${url}${num}.mp3`
 const[mainColor,setMainColor]=useState("#333")
 useEffect(()=>{
  window.scroll({
    top:0,
    behavior:"smooth"
  })
 },[])
//  console.log(urlAduio )
  return (
<div className='mt-2 mb-[100px] '>

{/* name Of Quari  */}
              <nav className='   min-w-screen '>
                <div className=' bg-blue-900 text-white p-2 rounded text-2xl '>
                <div  title="home" className='   text-center transition duration-150 '  >
                    <p className="text-sm p-1"> الشيخ : {localStorage.getItem("nameOfQauri")}</p>
                    <p className="text-sm p-1"> سورة : {nameOfSura} </p>
                </div> 
                </div>
      </nav>
{/* End name Of Quari  */}

{/* namesOfsura */}
      {namesOfsura.map((item,index)=>(
      <div className='rounded-[10px]' 
           style={{backgroundColor:mainColor}} 
           onClick={()=>{setNum(`${item.id}`)
                         setId(item.id)
                         setNameOfSura(`${item.name}`)
           
           
           }} key={index}> 
              <p className='text-center text-white p-2 border-bottom cursor-pointer m-1  '>{item.name}</p>
      </div>

      
      ))}
       {/* audio bar  */}
      <div className='fixed bottom-0 left-0 w-screen'>
          <AudioPlayer
                className='bg-black'
            style={{direction:"ltr"}}
              autoPlay
              src={urlAduio}
              onPlay={e => console.log("onPlay")}
            />
        </div>




{/* change background color  */}
      <nav className='fixed bottom-[95px] left-1  md:left-4'>
                <div className='flex  bg-blue-900 p-2 rounded-full text-2xl '>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 '  onClick={()=>setMainColor("#333")}>
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#333] rounded-full"></p>
                </div>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 ' onClick={()=>setMainColor("#c344ed")} >
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#c344ed] rounded-full"></p>
                </div>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 ' onClick={()=>setMainColor("#fca5a5")} >
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#fca5a5] rounded-full"></p>
                </div>
                <div  title="home" className='p-1   hover:scale-[1.15] transition duration-150 '  onClick={()=>setMainColor("#58d2d6")}>
                    <p className="w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#58d2d6] rounded-full"></p>
                </div>
                
                </div>
      </nav>
    </div>
  )
}

export default Player1