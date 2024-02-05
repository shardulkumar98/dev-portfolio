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
        <div className="border-[1px] rounded-lg border-[#BCA37F] sm:w-1/2 p-4">
          <SchoolIcon />
          <div>
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="border-[1px] rounded-lg border-[#BCA37F] p-4 sm:w-1/2">
          <SchoolIcon />
          <div>
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="border-[1px] rounded-lg border-[#BCA37F] p-4 sm:w-1/2">
          <CollegeIcon />
          <div>
            <div>B.Tech / CSE</div>
            <div>2022</div>
            <div>Amrapali Institue of Technology & Sciences, Haldwani</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
