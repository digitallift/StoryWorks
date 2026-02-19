import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#091323] border-t border-white/80 text-gray-400 pt-16 pb-6 px-6 md:px-20">

      {/* Top Section */}
      <div className="grid md:grid-cols-3 gap-12">

        {/* LEFT */}
        <div className="space-y-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="border border-[#DE8617] p-2 text-[#DE8617]">
              ▶
            </div>
            <h2 className="text-white font-semibold tracking-wide">
              STORY WORKS
            </h2>
          </div>

          {/* Description */}
          <p className="leading-7 max-w-md">
            Production Power Meets Creator Access. Full-service video
            production studio and real-time creator marketplace.
          </p>

          {/* Contact */}
          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <FiMail className="text-lg" />
              <span>storyworksproductionhouse@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-lg" />
              <span>+91 8838406704</span>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="text-lg" />
              <span>@storyworksproductionhouse</span>
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-white text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-4">
            <li className="hover:text-[#DE8617] cursor-pointer">About Us</li>
            <li className="hover:text-[#DE8617] cursor-pointer">Services</li>
            <li className="hover:text-[#DE8617] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">
            Services
          </h3>

          <ul className="space-y-4">
            <li className="hover:text-[#DE8617] cursor-pointer">Ad Films</li>
            <li className="hover:text-[#DE8617] cursor-pointer">Social Media Ads</li>
            <li className="hover:text-[#DE8617] cursor-pointer">Podcasts</li>
            <li className="hover:text-[#DE8617] cursor-pointer">AI Video</li>
            <li className="hover:text-[#DE8617] cursor-pointer">Creator Hiring</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © 2026 Story Works. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
