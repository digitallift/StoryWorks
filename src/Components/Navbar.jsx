import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import {navlinks} from "../contant/links.jsx"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

  const navigation = useNavigate();

  const [isopen,SetIsopen] = useState(false);
  const [selected,SetSelected] = useState("Home");
 
 return (
    <div className="fixed left-0 z-50 w-full">
         <div className="flex px-5 border-b border-white/80 md:border-0 bg-[#091323] items-center justify-between ">
            <div className=" w-19">
             <img onClick={()=>navigation("/")} className=" object-cover" src={logo} alt="logo"/>
            </div>
            {/* Navbar for md */}
            <div className="hidden md:flex flex-row items-center space-x-5 font-light text-base">
                {
                  navlinks.map((item,index)=>(
                  <Link onClick={()=>SetSelected(item.name)} to={item.link} key={index} className={` hover:text-[#DE8617] ${selected === item.name ? "text-[#DE8617]" : "text-gray-400"}`}>
                      {item.name}
                  </Link>
                ))
                }
                <button onClick={()=>navigation("/login")} className="bg-[#DE8617] rounded-lg cursor-pointer px-2 py-1 font-medium">+ Sign Up / Log In</button>
            </div>
            {/* Mobile Menu icon  */}
            <div className="block md:hidden">
            {
              isopen ? <RxCross2 className="text-white" onClick={()=>SetIsopen(!isopen)} size={25}/> : <RxHamburgerMenu onClick={()=>SetIsopen(!isopen)}  className="text-white" size={25}/>
            }
            </div>
         </div>
          {/* Mobile Menu  */}
            {
              isopen&& 
              (<div className="px-3 space-y-5  transform-all duration-500 ease-in-out  flex flex-col items-center text-center bg-[#091323]  py-5">
                 {
                  navlinks.map((item,index)=>(
                  <a onClick={()=>SetIsopen(false)} href={item.link} key={index} className="text-gray-400 hover:text-[#DE8617]">
                      {item.name}
                  </a>))
                 }
                 <button onClick={()=>navigation("/login")} className="bg-[#DE8617]  max-w-[250px] rounded-lg cursor-pointer px-4 py-1 font-medium">+ Sign Up / Log In</button>
              </div>)
            }
    </div>
  )
}

export default Navbar
