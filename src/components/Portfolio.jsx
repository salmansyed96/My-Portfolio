import React from "react";
import arrayDestruct from "../assets/portfolio/amazon.png";
import installNode from "../assets/portfolio/G-F.jpeg";
import navbar from "../assets/portfolio/swiggy.png";
import reactParallax from "../assets/portfolio/hy.jpeg";
import reactSmooth from "../assets/portfolio/swiggy2.jpg";
import reactWeather from "../assets/portfolio/TODo.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  
                  Demo
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                
              </div>
              {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos in commodi officia laudantium corrupti quam!</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;