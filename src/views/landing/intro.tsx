"use client";

import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full gap-4 sm:gap-8 md:gap-4 py-14 min-h-full sm:min-h-[50vh] px-5 md:px-24 flex items-center">
      <div className="">
        <div className="font-oxygen text-2xl text-[#FC6736]">Hello</div>
        <div className="font-oxygen text-3xl md:text-5xl lg:text-7xl">
          I&apos;m Shardul Kumar
        </div>
        <div className="font-oxygen text-[#FC6736] text-2 md:text-xl lg:text-2xl">
          MERN Stack Developer
        </div>
        <div className="sm:w-1/2 xl:w-full ">
          Hi there! My name is Shardul Kumar and I&apos;m a software engineer
          with over 2 years of experience in the industry.
        </div>
        <div className=" flex items-center gap-10 py-5">
          <SocialLinks />
          <div className="w-full">
            <Button />
          </div>
        </div>
      </div>
      <div className="rounded-full">
        <img className="rounded-[180px] hidden sm:block" src="https://imgs.search.brave.com/h31PorOBhTlpFmX2Eif4kko9aXaBMtlqnwDpE1iuve0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtYW5p/bWUtY2hhcmFjdGVy/LWNhcnRvb24tc2Nl/bmVfMjMtMjE1MTAz/NTE1Ni5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt={"loading"} />
      </div>
    </div>
  );
};

export default Intro;
