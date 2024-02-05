"use client";
import React from "react";
import { motion } from "framer-motion";
import { data } from "./data";
import Link from "next/link";
// import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const navVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={navVariant}
      initial="hidden"
      animate="visible"
      className="flex justify-between items-center py-6 px-5 md:py-5 md:px-20 lg:py-10 border-b-[1px] border-[#BCA37F] bg-[#191717]"
    >
      <motion.div
        variants={navVariant}
        className="text-center md:text-left w-full font-caveat text-3xl text-[#FC6736]"
      >
        <Link href={"/"}>Shardul Kumar</Link>
      </motion.div>
      {/* <RxHamburgerMenu className="block sm:hidden lg:hidden" /> */}
      <div className="hidden w-full md:flex md:gap-16 justify-end">
        {data.map((e) => (
          <motion.div variants={navVariant} key={e?.label}>
            <Link
              href={e.path}
              className="font-grapeNuts text-2xl hover:text-[#FC6736]"
            >
              {e?.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Navbar;
