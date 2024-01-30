import React from "react";
// import Stepper from "@/components/Stepper";
// import { educationData } from "@/customData/education";

const About = () => {
  return (
    <div className="border-2 border-red-600 flex flex-col w-full p-5 ">
      <div className="border-2 border-red-500 w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl">About Me</div>
        <div className="font-oxygen md:text-xl">
          Hi there! My name is Shardul Kumar and I am a software engineer with
          over 2 years of experience in the industry. add more...
        </div>
      </div>
      <div className=" border-2 border-red-500 w-4/5 my-10 m-auto flex flex-col items-center gap-8">
        <div className="font-grapeNuts text-6xl">Education</div>
        <div className="w-full flex">
          <div className="border-2 w-1/2 p-4">
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="border-2 p-4 w-1/2">
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="border-2 p-4 w-1/2">
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-500 w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl text-center">professional skills</div>
        <div>
          <div>Frontend:</div>
          <div>
            <li>html</li>
            <li>css</li>
            <li>javscript</li>
          </div>
        </div>
        <div>
          <div>Backend:</div>
          <div>
            <li>html</li>
            <li>css</li>
            <li>javscript</li>
          </div>
        </div>
        <div>
          <div>Devops:</div>
          <div>
            <li>Docker</li>
            <li>Jenkins</li>
            <li>Vercel</li>
          </div>
        </div>
        <div>
          <div>Tools:</div>
          <div>
            <li>Git</li>
            <li>Git hub</li>
            <li>git lab</li>
          </div>
        </div>
      </div>
      <div className="border-2 border-red-500 w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl">Work Experience</div>
        <div>
          <div>Company Name</div>
          <div>Designation</div>
          <div>job description</div>
        </div>
        <div>
          <div>Company Name</div>
          <div>Designation</div>
          <div>job description</div>
        </div>
      </div>
      <div className="border-2 border-red-500 w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl">My Interest</div>
        <li>travel</li>
        <li>cooking</li>
        <li>photography</li>
      </div>
    </div>
  );
};

export default React.memo(About);
