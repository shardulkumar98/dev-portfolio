"use client";
import AboutMe from "@/views/about/aboutMe";
import Certificates from "@/views/about/certificates";
import Education from "@/views/about/education";
import Experince from "@/views/about/experince";
import Interest from "@/views/about/interest";
// import ExpressIcon from "@/assets/svg/express";
// import StrapiIcon from "@/assets/svg/strapi";
import Skills from "@/views/about/skills";
// import { motion } from "framer-motion";
import React from "react";

const About = () => {
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
      // variants={Variant}
      // initial="hidden"
      // animate="visible"
      className="flex flex-col w-full px-5 items-center"
    >
      <AboutMe />

      <Skills />

      <Experince />

      <Education />

      <Interest />

      <Certificates />
    </div>
  );
};

export default About;
