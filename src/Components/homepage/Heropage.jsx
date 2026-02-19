import React from 'react'
import bg from "../../assets/herobg.jpg"
import { useNavigate } from "react-router-dom"

const Heropage = () => {

   const navigator = useNavigate();

    
  return (
     <section style={{ backgroundImage: `url(${bg})` }} className="h-screen w-full bg-cover bg-center">
        <div className="px-1.5 flex justify-center items-center w-full h-full bg-black/75 ">
          <div className=" md:max-w-4xl mt-10 md:mt-0 text-center">
            <h1 className="text-4xl md:text-7xl text-white font-semibold">Where Content Gets Created.<span className="text-[#DE8617]"> Where Creators Get Hired.</span></h1>
            <p className="text-base md:text-xl max-w-[850px] mt-8 text-center text-gray-400">Story Works is a full-service video production studio and a real-time creator marketplace — built for brands that move fast.</p>
        
          <div className="flex gap-8 md:gap-13 mt-8 flex-col md:flex-row items-center justify-center ">
              <button onClick={()=>navigator("/contact")} className="bg-[#DE8617] hover:bg-[#DD7D1E] text-base rounded-xl cursor-pointer px-3.5 py-3 text-white">🎬 Start a Studio Project</button>
              <button onClick={()=>navigator("/services")}  className="text-white rounded-xl text-base hover:bg-gray-100/10 cursor-pointer px-3.5 py-3 border border-white/80">👥 Hire a Creator</button>
          </div>
        </div>
      
        </div>
     </section>
     )
}

export default Heropage
