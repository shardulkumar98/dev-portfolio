/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Home = () => {
  return (
    <div className="w-full gap-8 md:gap-4 min-h-[70vh] md:min-h-[83vh] p-5 md:p-24 flex flex-col justify-center">
      <div className="font-oxygen text-2xl">
        Hello
      </div>
      <div className="font-oxygen text-3xl  md:text-5xl lg:text-7xl">
        I'm Shardul Kumar
      </div>
      <div className="font-oxygen opacity-75 text-2 md:text-xl lg:text-2xl">
        MERN Stack Developer
      </div>
      <div
        className="opacity-50 w-1/2"
      >
        Hi there! My name is Shardul Kumar and I'm a software engineer with over
        2 years of experience in the industry.
      </div>
    </div>
  );
};

export default React.memo(Home);
