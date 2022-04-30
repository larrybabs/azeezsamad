import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaBehance,
  } from "react-icons/fa";
  import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="w-full p-5 md:h-full lg:hidden bg-[#16133a] text-gray-300">
      <ul className="flex justify-center items-center text-white">
        <li>
            <a
              href="https://www.linkedin.com/in/samad-azeez-656b6621a/"
            >
              <FaLinkedin size="30" />
            </a>
          </li>
          <li >
            <a
              href="https://github.com/larrybabs"
            >
              <FaGithub size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/samadolanrewaju"
              
            >
              <FaBehance size="30" />
            </a>
          </li>
          <li>
            <a
              href="https://www.notion.so/Professional-Resume-6ed0ad28ff1246399e8d6678e9dbb3d2"
            >
               <BsFillPersonLinesFill size="30" />
            </a>
          </li>
        </ul>
        <div class="flex justify-center text-white mt-5">
                Copyright &copy; 2022 Samad Azeez
            </div>
      </div>
    </div>
  );
}

export default Footer;
