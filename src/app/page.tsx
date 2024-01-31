/* eslint-disable react/no-unescaped-entities */
import React from "react";
import About from "./about/page";
import Contact from "./contact/page";

const Home = () => {
  return (
    <>
      <div className="w-full gap-8 md:gap-4 min-h-[65vh] px-5 md:px-24 flex flex-col justify-center">
        <div className="font-oxygen text-2xl text-[#FC6736]">Hello</div>
        <div className="font-oxygen text-3xl md:text-5xl lg:text-7xl">
          I'm Shardul Kumar
        </div>
        <div className="font-oxygen text-[#FC6736] text-2 md:text-xl lg:text-2xl">
          MERN Stack Developer
        </div>
        <div className="w-1/2">
          Hi there! My name is Shardul Kumar and I'm a software engineer with
          over 2 years of experience in the industry.
        </div>
      </div>
      {/* About Page */}
      <About />
      {/* Contact Page  */}
      <Contact />
    </>
  );
};

export default React.memo(Home);
