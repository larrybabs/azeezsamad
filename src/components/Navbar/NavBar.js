import React from 'react';
import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className="fixed w-full h-[80] flex justify-between items-center px-4 bg-[#16133a] text-gray-300 ">
      <div className="text-4xl font-bold">SA</div>
      <div>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Work</li>
              <li>Contact</li>
          </ul>
      </div>
      <FaBars />
    </div>
  );
}

export default NavBar;
