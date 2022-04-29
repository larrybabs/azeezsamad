import React from "react";
import Cars from "../assets/cars.png";
import Manage from "../assets/manage.png";
import Memory from "../assets/memory.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#16133a] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-4 border-red-600 font-bold">
            Work
          </p>
          <p className="py-4">Checkout some of my recent works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* card */}
          <div
            style={{ backgroundImage: `url(${Cars})` }}
            className="shadow-lg shadow-[#1b1188] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider">
                Super Cars
              </span>
              <div className="pt-8 text-center">
                <a href="https://super-cars.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/larrybabs/super-cars">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* card */}
          <div
            style={{ backgroundImage: `url(${Manage})` }}
            className="shadow-lg shadow-[#1b1188] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider">
                Manage Landing page
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/larrybabs/manage-landing-page">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card */}
          <div
            style={{ backgroundImage: `url(${Memory})` }}
            className="shadow-lg shadow-[#1b1188] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl text-white font-bold tracking-wider">
                Memory game
              </span>
              <div className="pt-8 text-center">
                <a href="https://memory-game-eosin-kappa.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/larrybabs/memory-game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
};

export default Work;
