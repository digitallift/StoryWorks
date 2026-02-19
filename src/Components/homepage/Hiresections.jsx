
import { FaCameraRetro } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { deliver } from "../../contant/links";
import { IoColorPalette } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hiresections = () => {

    const navigator = useNavigate();

  return (
    <div>

        {/* Two Powerful Divisions */}
       <section className="h-screen bg-[#091323] w-full">
           <div className="h-full w-full pt-10 md:pt-15 flex flex-col items-center justify-start">
                <h1 className="md:text-5xl mt-5 text-2xl text-center  font-semibold text-white ">Two Powerful Divisions.<span className="text-[#DE8617]">One Ecosystem.</span></h1>
                {/* cards details */}
                <div className="flex flex-col mt-10 md:mt-15 gap-10 px-3 md:gap-20 items-center  md:flex-row ">

                    <div className="flex hover:border-[#DE8617] items-start border border-white/60 md:px-10 md:min-h-70 md:py-8 py-3 px-5 rounded-2xl md:max-w-[480px] flex-col">
                        <div className="bg-[#DE8617] rounded-lg px-3 py-2">
                            <FaCameraRetro className="text-black" size={30}/>
                        </div>
                         <h1 className="text-white mt-3 text-xl md:text-3xl font-semibold" >Story Works Studio</h1>
                         <p className="text-gray-400 text-base mt-3 md:mt-5">We produce professional video content, ad films, podcasts, AI-powered creatives, and brand campaigns — fully managed by our in-house team.</p>
                    </div>

                   <div className="flex hover:border-[#DE8617] items-start border border-white/60 md:px-10 md:py-8 py-3 px-5 md:min-h-70 rounded-2xl md:max-w-[480px] flex-col">
                        <div className="bg-[#DE8617] rounded-lg px-3 py-2">
                            <FaUsers className="text-black" size={30}/>
                        </div>
                         <h1 className="text-white mt-3  text-xl md:text-3xl font-semibold" >Creator Platform</h1>
                         <p className="text-gray-400 text-base mt-3 md:mt-5">A real-time hiring marketplace where businesses can connect and book creators instantly based on availability.</p>
                    </div>
                </div>

                 <h6 className="text-gray-400 mt-8 md:mt-15 text-base md:text-xl">Production + Platform.<span className="text-[#DE8617]"> Structure + Speed.</span></h6>
           </div>
       </section>
        
        {/* What We Deliver */}
        <section className="min-h-screen bg-[#070F1C] w-full ">
             <div className="flex flex-col pt-10 pb-5 md:pt-30 justify-start items-center">
                  <h1 className="text-4xl md:text-5xl text-center  font-semibold text-white">What We <span className="text-[#DE8617]">Deliver</span></h1>
                
                <div className="grid mt-10 md:mt-20 gap-7 pb-5 sm:grid-cols-2 md:grid-cols-4 grid-rows-2">
                    {
                       deliver.map((item,index)=>
                        (<div key={index} className="text-white border gap-2 group rounded-xl border-white/70 flex flex-col hover:border-[#DE8617] items-center justify-center px-2 py-4 ">
                             <p className="text-[#DE8617] group-hover:scale-115 ">{item.img}</p> 
                             <div className="text-lg">{item.name}</div>
                        </div>
                        ))
                    }
                </div>
                  <h6 className="text-base md:mt-10 text-gray-400 md:text-xl" >Built for startups, agencies, and growing brands.</h6>
             </div>
        </section>

        {/* How It Works */}
        <section className="bg-[#091323] w-full min-h-screen">
            <div className="flex pt-10 px-2.5 md:px-0 md:pt-20 items-center justify-start flex-col ">
                <h1 className="text-3xl font-semibold text-white md:text-6xl" >How It<span className="text-[#DE8617]" > Works</span></h1>
              
                <div className="grid mt-10 md:mt-20 gap-10 md:gap-20 items-center md:grid-cols-2">

                    <div className="flex rounded-xl min-h-[270px] border border-white/80 px-5 py-5 text-white flex-col">
                        <h2 className="text-xl md:text-2xl font-semibold">🎬 Work With Our Studio</h2>
                        <p className=" text-sm md:text-base mt-2 text-gray-400">Full-service execution.</p>
                        <p className="mt-4"><span className="bg-[#DE8617] rounded-full px-2.5 mr-2 ">1</span> Submit your project brief</p>
                        <p className="mt-2"><span className="bg-[#DE8617] rounded-full px-2 mr-2  ">2</span> Strategy & concept development</p>
                        <p className="mt-2"><span className="bg-[#DE8617] rounded-full px-2 mr-2 ">3</span> Production & editing</p>
                        <p className="mt-2"><span className="bg-[#DE8617] rounded-full px-2 mr-2 ">4</span> Final delivery</p>
                     
                    </div>

                     <div className="flex rounded-xl min-h-[270px] border border-white/80 px-5 py-5 text-white flex-col">
                        <h2 className="text-xl md:text-2xl font-semibold">👥 Use Our Creator Platform</h2>
                        <p className=" text-sm md:text-base mt-2 text-gray-400">Direct collaboration. Real-time booking.</p>
                        <p className="mt-4" ><span className="bg-[#DE8617] rounded-full px-2.5 mr-2  ">1</span> Create an account</p>
                        <p className="mt-2"><span className="bg-[#DE8617] rounded-full px-2 mr-2 ">2</span> Choose your role (Business / Creator)</p>
                        <p className="mt-2"><span className="bg-[#DE8617] rounded-full px-2 mr-2  ">3</span> View real-time availability</p>
                        <p className="mt-2"><span className="bg-[#DE8617] rounded-full px-2 mr-2 ">4</span> Hire or accept projects</p>
                        <p className="mt-2"><span className="bg-[#DE8617] rounded-full px-2 mr-2 ">5</span> Manage work via dashboard</p>
                    </div>

                </div>
            </div>
        </section>
        
        {/* Join Our Creator Team  */}
        <section className="min-h-screen bg-[#070F1C] w-full " >
           <div className="flex pt-10   md:pt-20 justify-start items-center  flex-col ">
              <h1 className="text-3xl px-1 text-center md:text-5xl font-semibold text-white ">Join Our Creator Team & <span className="text-[#DE8617]"> Hire a Professional</span> </h1>
             
             <div className="grid gap-10 pb-10  md:gap-15 mt-10 md:mt-15 px-3 md:grid-cols-2">
                 <div className="flex gap-5 rounded-2xl px-3 py-5  md:px-10 md:py-10  hover:border-[#DE8617]  border border-white/70 text-white md:max-w-[450px] items-center justify-center flex-col">
                     <IoColorPalette className="text-[#DE8617]" size={50}/>
                     <h1 className="md:text-2xl text-xl  font-semibold">For Creators</h1>
                     <p className="text-gray-400 text-center">Showcase your portfolio, set your availability, and get hired by top brands. Join our growing community of creative professionals.</p>
                     <button onClick={()=>navigator("/contact")} className="hover:bg-white/10 cursor-pointer  border border-white/80 rounded-xl gap-5 flex items-center px-5 py-3">Join as Creator <FaArrowRight size={15}/>  </button>
                 </div>
                 <div className="flex gap-5 hover:border-[#DE8617]  rounded-2xl px-3 py-5 md:px-10 md:py-10  border border-white/70 text-white md:max-w-[450px] items-center justify-center flex-col">
                     <FaUserTie className="text-[#DE8617]" size={50}/>
                     <h1  className="md:text-2xl text-xl  font-semibold">For Businesses</h1>
                     <p className="text-gray-400 text-center">Browse skilled creators, check real-time availability, and hire instantly. Get your content produced faster with the right talent.</p>
                     <button onClick={()=>navigator("/services")} className="bg-[#DE8617] cursor-pointer gap-5 rounded-xl hover:bg-amber-600 flex items-center px-5 py-3">Hire a Creator <FaArrowRight size={15}/> </button>
                 </div>
             </div>
           
           </div>
        </section>
        {/* Ready to create or hire */}
        <div className="pt-25 pb-20 px-5 bg-[#091323]  ">
            <div className="flex flex-col justify-start items-center">
                 <h1 className="text-white text-5xl font-semibold">Ready to <span className="text-[#DE8617]">create or hire</span> ?</h1>
                 <div className="flex gap-5 mt-10 text-white md:gap-15 flex-col md:flex-row ">
                      <button onClick={()=>navigator("/services")} className="bg-[#DE8617] cursor-pointer gap-5 rounded-xl hover:bg-amber-600 flex items-center px-5 py-3">🎬 Launch Your Project <FaArrowRight size={15}/> </button>
                      <button onClick={()=>navigator("/contact")} className="hover:bg-white/10 cursor-pointer  border border-white/80 rounded-xl gap-5 flex items-center px-5 py-3">👥 Explore Creators </button>
                 </div>
            </div>
        </div>


    </div>
  )
}

export default Hiresections
