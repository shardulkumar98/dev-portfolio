import React from "react";

const About = () => {
  return (
    <div className="flex flex-col w-full p-5 ">
      <div className=" w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl text-[#FC6736]">About Me</div>
        <div className="font-oxygen md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ullam quia minus ratione Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate commodi laboriosam architecto vel
          assumenda delectus optio voluptate neque excepturi voluptates., est
          rerum? Laboriosam est soluta sequi accusamus corrupti aperiam ab, ipsa
          labore.
        </div>
      </div>
      <div className="w-4/5 my-10 m-auto flex flex-col items-center gap-8">
        <div className="font-grapeNuts text-6xl text-[#FC6736]">Education</div>
        <div className="w-full flex">
          <div className="border-[1px] rounded-lg border-[#BCA37F] w-1/2 p-4">
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="border-[1px] rounded-lg border-[#BCA37F] p-4 w-1/2">
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="border-[1px] rounded-lg border-[#BCA37F] p-4 w-1/2">
            <div>10th</div>
            <div>2016</div>
            <div>Bishop Shaw Intermediate College, Nainital</div>
          </div>
        </div>
      </div>
      <div className=" w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl text-center text-[#FC6736]">
          Professional Skills
        </div>
        <div className="w-full flex gap-2">
          <div className="border-[1px] rounded-lg border-[#BCA37F] w-1/2 p-4">
            <div>Frontend:</div>
            <div>
              <li>html</li>
              <li>css</li>
              <li>javscript</li>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-2 justify-end">
          <div className="border-[1px] rounded-lg border-[#BCA37F] w-1/2 p-4">
            <div>Backend:</div>
            <div>
              <li>html</li>
              <li>css</li>
              <li>javscript</li>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <div className="border-[1px] rounded-lg border-[#BCA37F] w-1/2 p-4">
            <div>Devops:</div>
            <div>
              <li>Docker</li>
              <li>Jenkins</li>
              <li>Vercel</li>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-2 justify-end">
          <div className="border-[1px] rounded-lg border-[#BCA37F] w-1/2 p-4">
            <div>Tools:</div>
            <div>
              <li>Git</li>
              <li>Git hub</li>
              <li>git lab</li>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl text-center text-[#FC6736]">
          Work Experience
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="text-2xl text-[#BCA37F]">Company Name</div>
          <div className="text-sm font-oxygen text-[#7D7C7C]">Web Developer Intern</div>
          <div className="font-oxygen">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
            neque vitae? Est aspernatur autem inventore culpa doloremque ullam
            accusamus quisquam?
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-2xl text-[#BCA37F]">Wits Innovation Lab</div>
          <div className="text-sm font-oxygen text-[#7D7C7C]">Assistant Software Engineer</div>
          <div className="font-oxygen">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut
            magnam asperiores obcaecati voluptatibus tempora a, debitis
            recusandae beatae enim quo veniam eligendi iusto iste distinctio
            quaerat. Voluptates quae eligendi, blanditiis ad odit accusantium
            quod dicta magnam accusamus, pariatur doloribus assumenda quos, rem
            quibusdam quaerat labore fuga veritatis ut inventore tempore ab
            vitae ex deleniti.
          </div>
        </div>
      </div>
      <div className=" w-4/5 my-10 m-auto flex flex-col gap-8">
        <div className="font-grapeNuts text-6xl text-center text-[#FC6736]">
          My Interest
        </div>
        <div className="w-full grid grid-cols-3 p-4">
          <li>travel</li>
          <li>cooking</li>
          <li>cooking</li>
          <li>photography</li>
          <li>photography</li>
          <li>photography</li>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
