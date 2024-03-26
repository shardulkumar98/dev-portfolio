"use client";

import React from "react";  
import { motion } from "framer-motion";
import AboutMe from "@/views/about/aboutMe";
// import Certificates from "@/views/about/certificates";
import Education from "@/views/about/education";
import Experince from "@/views/about/experince";
import Interest from "@/views/about/interest";
import Projects from "@/views/about/projects";
import Skills from "@/views/about/skills";

const About = () => {
  const Variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      tranisition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={Variant}
      initial="hidden"
      animate="visible"
      className="flex flex-col w-full px-5 items-center"
    >
      <AboutMe />

      <Experince />

      <Projects />

      <Skills />

      <Education />

      <Interest />

      {/* <Certificates /> */}
    </motion.div>
  );
};

export default About;
