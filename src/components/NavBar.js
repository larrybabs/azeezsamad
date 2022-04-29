import React, {useState} from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  }


  return (
    <div className="fixed w-full h-[80] flex justify-between items-center px-4 py-2 bg-[#16133a] text-gray-300 ">
      <div>
        <h1 className="text-5xl font-bold z-10">SA</h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div onClick={handleClick} className="cursor-pointer md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul className={!nav ? "hidden" : "absolute top-0 left-0 bg-[#16133a] w-full h-screen flex flex-col justify-center items-center"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      <div className="fixed hidden lg:flex flex-col top-[35%] left-0">
        <ul>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0966C2]">
            <a href="/" className="flex justify-between items-center w-full text-gray-300 font-bold">
              LinkedIn <FaLinkedin size="30"/> 
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a href="/" className="flex justify-between items-center w-full text-gray-300 font-bold">
              GitHub <FaGithub size="30"/> 
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0057FF]">
            <a href="/" className="flex justify-between items-center w-full text-gray-300 font-bold">
              Behance <FaBehance size="30"/> 
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a href="/" className="flex justify-between items-center w-full text-gray-300 font-bold">
              Resume <BsFillPersonLinesFill size="30"/> 
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a href="/" className="flex justify-between items-center w-full text-gray-300 font-bold">
              Email <HiOutlineMail size="30"/> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
