"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import AboutMe from "@/views/about/aboutMe";
import Skills from "@/views/about/skills";
import Experince from "@/views/about/experince";
import Education from "@/views/about/education";
import Certificates from "@/views/about/certificates";
import Interest from "@/views/about/interest";

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
      className="flex flex-col items-center w-full px-5"
    >
      <AboutMe />

      <Skills />

      <Experince />

      <Education />

      <Interest />

      <Certificates />
    </motion.div>
  );
};

export default memo(About);
