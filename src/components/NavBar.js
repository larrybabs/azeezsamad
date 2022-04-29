import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80] flex justify-between items-center px-4 py-2 bg-[#16133a] text-gray-300 ">
      <div>
        <h1 className="text-5xl font-bold z-10">SA</h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
          </li>
          <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>
      </div>
      <div onClick={handleClick} className="cursor-pointer md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 bg-[#16133a] w-full h-screen flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="fixed hidden lg:flex flex-col top-[35%] left-0">
        <ul>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0966C2]">
            <a
              href="https://www.linkedin.com/in/samad-azeez-656b6621a/"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              LinkedIn <FaLinkedin size="30" />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/larrybabs"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              GitHub <FaGithub size="30" />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0057FF]">
            <a
              href="https://www.behance.net/samadolanrewaju"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Behance <FaBehance size="30" />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://www.notion.so/Professional-Resume-6ed0ad28ff1246399e8d6678e9dbb3d2"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Resume <BsFillPersonLinesFill size="30" />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="azeezsamad88@yahoo.com"
              className="flex justify-between items-center w-full text-gray-300 font-bold"
            >
              Email <HiOutlineMail size="30" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
