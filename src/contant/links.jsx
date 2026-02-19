import { BsFillCameraReelsFill } from "react-icons/bs";
import { ImVideoCamera } from "react-icons/im";
import { PiFilmReelFill } from "react-icons/pi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";

const navlinks = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"About",
        link:"/about"
    },
    {
        name:"Services",
        link:"/services"
    },
      {
        name:"Contact",
        link:"/contact"
    },

]

const deliver = [
    {
        name:"Commercial Ad Films",
        img:<BsFillCameraReelsFill size={25}/>,
    },
        {
        name:"Social Media Video Ads",
        img:<ImVideoCamera size={25}/>,
    },
        {
        name:"Reel & Vertical Content",
        img:<PiFilmReelFill size={25}/>,
    },
        {
        name:"Video & Audio Podcasts",
        img:<FaMicrophoneAlt size={25}/>,
    },
        {
        name:"AI Video & Avatar Creation",
        img:<BsRobot size={25}/>,
    },
        {
        name:"Influencer Marketing",
        img:<TbSpeakerphone size={25}/>,
    },
        {
        name:"UGC Content Production",
        img:<FaUsers size={25}/>,
    },
        {
        name:"On-demand Creator Hiring",
        img:<TbUsersPlus size={25}/>,
    }
]

export {navlinks,deliver};