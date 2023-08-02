import React from "react";
import AmazonUi from "../assets/portfolio/Amazonn.png";
import GOogleForm from "../assets/portfolio/G-F.jpeg";
import Swiggy from "../assets/portfolio/swiggy2.jpg";
import HandM from "../assets/portfolio/h&m-web.jpeg";
import DIgitalMove from "../assets/portfolio/DIgital .png";
import ToDoList from "../assets/portfolio/TODo.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: AmazonUi, 
      link: 'https://amazon-ui-8717.vercel.app/',
      code: 'https://github.com/salmansyed96/portfolio-AmazonClone-responsive-master'
      
    },
    {
      id: 2,
      src: HandM,
      link: 'https://h-and-m-website-clone.vercel.app/',
      code: 'https://github.com/salmansyed96/H-M-website-clone'

    },
    {
      id: 3,
      src: Swiggy,
      link: 'https://swiggy-ui-iota.vercel.app/',
      code: 'https://github.com/salmansyed96/Swiggy-Ui'

    },
    {
      id: 4,
      src: DIgitalMove,
      link: 'https://reactmultipage-main.vercel.app/',
      code: 'https://github.com/salmansyed96/reactmultipage-main'

    },
    {
      id: 5,
      src: GOogleForm,
      link: 'https://g-form-roan.vercel.app/',
      code: 'https://github.com/salmansyed96/G-Form'

    },
    {
      id: 6,
      src: ToDoList,
      link: 'https://to-do-list-react-js-puce.vercel.app/',
      code: 'https://github.com/salmansyed96/ToDo-List-React.js'

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
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank" rel="noreferrer">
                  
                  Demo
                </a>
                <a href={code}  className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105" target="_blank" rel="noreferrer">
                  Code
                </a>
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
