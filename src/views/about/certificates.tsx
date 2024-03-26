
"use client";

import Carousel from "@/components/Carousel";

const Certificates = () => {
  return (
    <div className="w-4/5 sm:py-10 items-center flex flex-col gap-8">
      <div className="font-grapeNuts text-4xl sm:text-6xl text-[#FC6736] my-8">
        Certificates
      </div>
      <div className="border-2">
        <Carousel/>
      </div>
    </div>
  );
};

export default Certificates
