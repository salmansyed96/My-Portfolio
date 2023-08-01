import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Accomplished Front-End Developer with a demonstrated history of creating visually appealing, interactive, and responsive websites and web applications. I possess a deep understanding of JavaScript, React.js, Node.js, Next.js, and Out-Systems. My unique blend of creative vision and technical expertise allows me to deliver solutions that are not only aesthetically pleasing but also centered around user needs and functionality.
        </p>

        <br />

        <p className="text-xl">
        Highly skilled Frontend Developer with extensive
experience in React. js, CSS Bootstrap, and JavaScript.
Successfully managed multiple projects, demonstrating
expertise in building UI components and pages. Proven
track record of delivering exceptional work on three
live web and mobile projects. Committed to staying
current with industry trends and technologies to create
outstanding user experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
