import { BiCameraMovie } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FiClock } from "react-icons/fi";


const contactpage = () => {
  return (
     <>
      <section className="bg-[#091323] pt-30 py-20 md:px-10">
         <div className="flex items-center gap-8 flex-col justify-center">
             <p className="text-[#DE8617]  font-semibold text-lg">CONTACT</p>
             <h1 className="text-white text-4xl md:text-6xl font-semibold ">Let's<span className="text-[#DE8617] "> Work Together</span></h1>
            <p className="text-xl px-3  md:max-w-[650px] text-center text-gray-400">Story Works operates in two divisions. Select your requirement and contact us.</p>
            
           <div className="grid gap-20 md:grid-cols-2">
              <div className="flex flex-col mx-3 md:mx-0 items-start justify-center rounded-xl bg-white/1 px-8 py-8 border border-white/80  gap-2 md:max-w-[500px]">
                  <div className="bg-[#DE8617] px-3 py-3 rounded-lg ">
                    <BiCameraMovie size={30}/>
                  </div>
                  <h5 className="text-white text-xl ">Studio Project Enquiries</h5>
                  <p className="text-gray-400 text-sm  md:text-base">Looking for full production services? Submit a project brief and our team will connect with you.</p>
                  <a href="mailto:storyworksproductionhouse@gmail.com" className="text-white text-sm md:text-base flex items-center gap-5 cursor-pointer hover:text-[#DE8617]"><MdMailOutline className="text-[#DE8617]" size={20}/>storyworksproductionhouse@gmail.com</a>
                  <a href="tel:+918838406704" className="text-white text-sm md:text-base flex items-center gap-5 cursor-pointer hover:text-[#DE8617]"><FiPhoneCall className="text-[#DE8617]" size={20}/>+91 8838406704</a>
              </div>
              
              <div className="flex flex-col mx-3 md:mx-0 items-start justify-center rounded-xl bg-white/1 px-8 py-8 border border-white/80   gap-2 md:max-w-[500px]">
                  <div className="bg-[#DE8617] px-3 py-3 rounded-lg  ">
                    <FaUsers size={30}/>
                  </div>
                  <h5 className="text-white text-xl ">Creator Platform Support</h5>
                  <p className="text-gray-400 text-sm md:text-base">Want to hire or join as a creator? For onboarding, platform support, or demo requests.</p>
                  <a href="mailto:storyworksproductionhouse@gmail.com" className="text-white text-sm md:text-base flex items-center gap-5 cursor-pointer hover:text-[#DE8617]"><MdMailOutline className="text-[#DE8617]" size={20}/>storyworksproductionhouse@gmail.com</a>
                  <a href="tel:+918838406704" className="text-white text-sm md:text-base flex items-center gap-5 cursor-pointer hover:text-[#DE8617]"><FiPhoneCall className="text-[#DE8617]" size={20}/>+91 8838406704</a>
              </div>
           </div>
           <p className="text-white bg-white/1 border border-white px-3 py-1.5 rounded-xl flex items-center gap-5 text-sm md:text-lg "><FiClock className="text-[#DE8617]" size={20}/> Monday – Saturday, 10:00 AM – 7:00 PM</p>
         </div>
      </section>
     </>
  )
}

export default contactpage
