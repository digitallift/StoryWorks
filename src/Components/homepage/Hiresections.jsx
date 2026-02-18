
import { FaCameraRetro } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Hiresections = () => {
  return (
    <div>
       <section className="h-screen bg-[#091323] w-full">
           <div className="h-full w-full flex flex-col items-center justify-center">
                <h1 className="md:text-5xl mt-5 text-2xl text-center  font-semibold text-white ">Two Powerful Divisions.<span className="text-[#DE8617]">One Ecosystem.</span></h1>
                {/* cards details */}
                <div className="flex flex-col mt-5 md:mt-15 gap-5 px-3 md:gap-20 items-center  md:flex-row ">

                    <div className="flex hover:border-[#DE8617] items-start border border-white/60 md:px-10 md:min-h-70 md:py-8 py-3 px-5 rounded-2xl md:max-w-[480px] flex-col">
                        <div className="bg-[#DE8617] rounded-lg px-3 py-2">
                            <FaCameraRetro className="text-black" size={30}/>
                        </div>
                         <h1 className="text-white mt-3 text-lg md:text-3xl font-semibold" >Story Works Studio</h1>
                         <p className="text-gray-400 text-sm md:text-base md:mt-5">We produce professional video content, ad films, podcasts, AI-powered creatives, and brand campaigns — fully managed by our in-house team.</p>
                    </div>

                   <div className="flex hover:border-[#DE8617] items-start border border-white/60 md:px-10 md:py-8 py-3 px-5 md:min-h-70 rounded-2xl md:max-w-[480px] flex-col">
                        <div className="bg-[#DE8617] rounded-lg px-3 py-2">
                            <FaUsers className="text-black" size={30}/>
                        </div>
                         <h1 className="text-white mt-3  text-lg md:text-3xl font-semibold" >Creator Platform</h1>
                         <p className="text-gray-400 text-sm md:text-base  md:mt-5">A real-time hiring marketplace where businesses can connect and book creators instantly based on availability.</p>
                    </div>
                </div>

                 <h6 className="text-gray-400 mt-5 md:mt-10 text-base md:text-xl">Production + Platform.<span className="text-[#DE8617]"> Structure + Speed.</span></h6>
           </div>
       </section>
    </div>
  )
}

export default Hiresections
