import React from 'react';
import CSS from '../assets/css.png';
import Github from '../assets/github.png';
import HTML from '../assets/html.png';
import REACT from '../assets/react.png';
import Figma from '../assets/figma.png';
import Javascript from '../assets/javascript.png';


const Skills = () => {
  return ( 
    <div name="skills" className="w-full h-screen bg-[#1b1188] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl inline border-b-4 border-red-600 font-bold">Skills</p>
                <p className="py-4">Technologies i'm skilled at</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 text-center">
                <div className="shadow-md shadow-[#16133a] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto"src={HTML} alt="html"/>
                    <p className="py-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#16133a] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto"src={CSS} alt="css"/>
                    <p className="py-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#16133a] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto"src={Javascript} alt="javascript"/>
                    <p className="py-4">Javascript</p>
                </div>
                <div className="shadow-md shadow-[#16133a] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto"src={REACT} alt="react"/>
                    <p className="py-4">React</p>
                </div>
                <div className="shadow-md shadow-[#16133a] hover:scale-110 duration-500">
                    <img className="w-10 mx-auto"src={Figma} alt="figma"/>
                    <p className="py-4">Figma</p>
                </div>
                <div className="shadow-md shadow-[#16133a] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto"src={Github} alt="github "/>
                    <p className="py-4">Github</p>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Skills;
