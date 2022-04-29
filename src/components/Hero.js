import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#1b1188]">

        <div className="container max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full">
            <p className="text-purple-600">Hello, my name is</p>
            <h1 className="text-6xl sm:text-7xl font-bold text-[#ccd6f6]"> Azeez Samad</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> I'm a Front-end developer and a UI/UX <span className="text-purple-600 sm:text-8xl">designer.</span> </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]"> I’m a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.</p>
          <div>
          <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-2 my-4 flex items-center hover:bg-purple-600 hover:border-purple-600">View work 
              <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3"/>
                  </span></button>
                  </Link>
          </div>
        </div>
 
    </div>
  );
}

export default Hero; 
