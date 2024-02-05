"use client";

import { motion } from "framer-motion";
import React from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Intro from "@/views/landing/intro";

const Home = () => {
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
    <motion.div variants={Variant} initial="hidden" animate="visible">
      <Intro />

      <About />

      <Contact />
    </motion.div>
  );
};

export default Home;
