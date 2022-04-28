import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  }


  return (
    <div className="fixed w-full h-[80] flex justify-between items-center px-4 bg-[#16133a] text-gray-300 ">
      <div className="text-5xl font-bold z-10">
        <h1>SA</h1>
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
      <div className="hidden"></div>
    </div>
  );
};

export default NavBar;
