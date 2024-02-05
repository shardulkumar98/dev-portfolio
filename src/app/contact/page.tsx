"use client";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import { motion } from "framer-motion";
import React from "react";


const Contact = () => {
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
      className="sm:py-10 gap-8"
    >
      <div className="font-grapeNuts text-4xl sm:text-6xl text-[#FC6736] text-center my-8">
        Contact
      </div>
      <div className="w-full flex flex-col sm:flex-row lg:flex-row">
        <div className="sm:w-1/2 flex flex-col items-center gap-7 py-10">
          <input
            type="text"
            placeholder="name"
            className="w-4/5 rounded-lg bg-transparent focus:outline-none border-b-[1px] p-2"
          />
          <input
            type="text"
            placeholder="email"
            className="w-4/5 rounded-lg bg-transparent focus:outline-none border-b-[1px] p-2"
          />
          <textarea
            rows={5}
            placeholder="write here..."
            className="w-4/5 rounded-lg  bg-transparent focus:outline-none border-b-[1px] p-2"
          />
          <button type="submit" className="border-2 w-1/3 px-8 py-1 rounded-lg">
            Send
          </button>
        </div>
        <div className="sm:w-1/2 py-8 items-center flex flex-col gap-10 px-5">
          <div className="w-3/4 flex flex-col gap-5">
            <div>
              <span>Name: </span>
              <span>Shardul Kumar</span>
            </div>
            <div>
              <span>Email: </span>
              <span>kumarshardul1998@gmail.com</span>
            </div>
            <div>
              <span>Phone: </span>
              <span>+919368662818</span>
            </div>
            <SocialLinks/>
            <Button/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact
