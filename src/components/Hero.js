import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name="hereo" className="w-full h-screen bg-[#1b1188]">

        <div className="container max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full">
            <p className="text-red-600">Hello, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"> Azeez Samad</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> I'm a Front-end developer and a UI/UX designer </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]"> I’m a front-end developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.</p>
          <div>
              <button className="text-white group border-2 px-6 py-2 my-4 flex items-center hover:bg-red-600 hover:border-red-600">View work 
              <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3"/>
                  </span></button>
          </div>
        </div>
 
    </div>
  );
}

export default Hero; 
