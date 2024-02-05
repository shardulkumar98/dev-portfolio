"use client";

import SchoolIcon from "@/assets/svg/schl";
import CollegeIcon from "@/assets/svg/clg";

const Education = () => {
  return (
    <div className="sm:w-4/5 sm:py-10 flex flex-col items-center gap-10">
      <div className="font-grapeNuts text-4xl sm:text-6xl text-[#FC6736] my-8">
        Education
      </div>
      <div className="w-full flex">
        <div className="flex gap-5 border-[1px] rounded-lg border-[#BCA37F] sm:w-1/2 p-4">
          <SchoolIcon />
          <div className="">
            <div className="text-[#FC6736]">10th</div>
            <div className=" text-sm text-[#BCA37F] font-palanquin font-light">2016</div>
            <div className="text-[#7D7C7C] font-palanquin font-light">Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="flex gap-5 border-[1px] rounded-lg border-[#BCA37F] sm:w-1/2  p-4">
          <SchoolIcon />
          <div className="">
            <div className="text-[#FC6736]">12th</div>
            <div className=" text-sm text-[#BCA37F] font-palanquin font-light">2016</div>
            <div className="text-[#7D7C7C] font-palanquin font-light">Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="flex gap-5 border-[1px] rounded-lg border-[#BCA37F] sm:w-1/2 p-4">
          <CollegeIcon />
          <div className="">
            <div className="text-[#FC6736]">B.Tech / CSE</div>
            <div className=" text-sm text-[#BCA37F] font-palanquin font-light">2022</div>
            <div className="text-[#7D7C7C] font-palanquin font-light">Amrapali Institue of Technology & Sciences, Haldwani</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
