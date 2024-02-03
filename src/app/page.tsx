/* eslint-disable react/no-unescaped-entities */
"use client";
// import { motion } from "framer-motion";
import React from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Intro from "@/views/landing/intro";

const Home = () => {
  // const Variant = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   visible: {
  //     opacity: 1,
  //     tranisition: {
  //       duration: 1,
  //     },
  //   },
  // };

  return (
    <div
    //  variants={Variant} initial="hidden" animate="visible"
     >
      {/* <div className="w-full gap-4 sm:gap-8 md:gap-4 py-14 min-h-full sm:min-h-[50vh] px-5 md:px-24 flex flex-col justify-center">
        <div className="font-oxygen text-2xl text-[#FC6736]">Hello</div>
        <div className="font-oxygen text-3xl md:text-5xl lg:text-7xl">
          I'm Shardul Kumar
        </div>
        <div className="font-oxygen text-[#FC6736] text-2 md:text-xl lg:text-2xl">
          MERN Stack Developer
        </div>
        <div className="sm:w-1/2 md:w-full w-1/2" >
          Hi there! My name is Shardul Kumar and I'm a software engineer with
          over 2 years of experience in the industry.
        </div>
      </div> */}
      <Intro />
      {/* About Page */}
      <About />
      {/* Contact Page  */}
      <Contact />
    </div>
  );
};

export default Home;
