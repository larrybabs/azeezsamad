import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaBehance,
} from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div  name="contact" className="w-full h-screen bg-[#1b1188] flex justify-center flex-col items-center p-4">
      <form method="POST" action="https://getform.io/f/00f5d63f-97e3-4e26-82c3-4d3126d229a4" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
            <p className="text-4xl inline border-b-4 border-purple-600 font-bold text-gray-300">Contact Me </p>
            <p className="text-gray-300 py-4">Submit the form or send me an email - azeezsamad88@yahoo.com</p>
        </div>
        <input className="p-2 outline-none" type="text" placeholder="Name" name="name" />
        <input className="my-4 p-2 outline-none" type="email" placeholder="Email" name="email" />
        <textarea className="p-2 outline-none" name="message" rows="10" placeholder="Enter message"></textarea>
        <button className="py-3 px-4 my-8 mx-auto text-white border-2 flex items-center hover:bg-purple-600 hover:border-purple-600">Let's Work</button>
      </form>
      <div className="">
      <ul className="flex lg:hidden justify-between mt-5 text-white">
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
        <div class="text-white mt-3 lg:mt-10">
                Copyright &copy; 2022 Samad Azeez
            </div>
      </div>
    </div>
  );
}

export default Contact;
