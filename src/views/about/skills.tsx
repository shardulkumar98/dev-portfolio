"use client";

import Image from "next/image";
import HtmlImage from "@/assets/png/html.png";
import CssImage from "@/assets/png/css.png";
import JsImage from "@/assets/png/js.png";
import ReactImage from "@/assets/png/reactlogo.png";
import NextImage from "@/assets/png/nextjs.png";
import NodeIcon from "@/assets/svg/node";
import ExpreeIcon from "@/assets/svg/express";
import GraphqlIcon from "@/assets/svg/graphql";
import DockerIcon from "@/assets/svg/docker";
import JenkinsIcon from "@/assets/svg/jenkins";
import VercelIcon from "@/assets/svg/vercel";
import FirebaseIcon from "@/assets/svg/fire";
import GitHubIcon from "@/assets/svg/gh";
import GitLabIcon from "@/assets/svg/gitl";
import FigmaIcon from "@/assets/svg/fig";
import JiraIcon from "@/assets/svg/jira";
import DigitalOceanIcon from "@/assets/svg/digitalOcean";
import TypescriptIcon from "@/assets/svg/typescr";
import StrapiIcon from "@/assets/svg/strapi";

const Skills = () => {

  // const variants = {
  //   hidden: {
  //     scale: 0,
  //   },
  //   visible: {
  //     scale: 1,
  //     tranisition: {
  //       duration: 1,
  //     },
  //   },
  // }

  const data = [
    {
      title: "Frontend",
      position: "justify-start",
      items: [
        {
          img: HtmlImage,
          label: "Html 5",
        },
        {
          img: CssImage,
          label: "CSS 3",
        },
        {
          img: JsImage,
          label: "Javascript",
        },
        {
          img: ReactImage,
          label: "React",
        },
        {
          img: NextImage,
          label: "Next.js",
        },
      ],
    },
    // {
    //   title: "Backend",
    //   position: "justify-end",
    //   items: [
    //     {
    //       img: HtmlImage,
    //       label: "Node",
    //     },
    //   ],
    // },
  ];

  return (
    <div className="sm:w-4/5 w-full sm:py-14 flex flex-col gap-10 ">
      <div className="font-grapeNuts text-4xl sm:text-6xl text-center text-[#FC6736] my-8">
        Professional Skills
      </div>
      
     {data.map((ele,index)=>(
       <div key={index} className={`w-full flex gap-2 ${ele.position}`}>
       <div className="border-[1px] rounded-lg border-[#BCA37F] flex flex-col gap-8 w-full sm:w-1/2 p-4">
         <div className="text-center font-mynerve py-4 text-2xl text-[#FC6736] ">
           {ele.title}
         </div>
         <div className="grid grid-cols-3 gap-10 place-items-center">
          {ele.items.map((item, index)=>(
             <div key={index} className="flex flex-col items-center gap-4">
             <Image src={item.img} height={50} width={50} alt="laoding" />
             <span>{item.label}</span>
           </div>
          ))}
         </div>
       </div>
     </div>
     ))}


      {/* Static data */}
      <div className="w-full flex gap-2 justify-end">
        <div className="border-[1px] rounded-lg border-[#BCA37F] flex flex-col gap-8 w-full sm:w-1/2 p-4">
          <div className="text-center font-mynerve py-4 text-2xl text-[#FC6736] ">
            BACKEND
          </div>
          <div className="grid grid-cols-3 gap-10 place-items-center">
            <div className="flex flex-col items-center gap-4">
              <NodeIcon />
              <span>Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <ExpreeIcon />
              <span>Express.js</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <GraphqlIcon />
              <span>Graphql</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <FirebaseIcon />
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div className="border-[1px] rounded-lg border-[#BCA37F] flex flex-col gap-8 w-full sm:w-1/2 p-4">
          <div className="text-center font-mynerve py-4 text-2xl text-[#FC6736] ">
            DEVOPS
          </div>
          <div className="grid grid-cols-3 gap-10 place-items-center">
            <div className="flex flex-col items-center gap-4">
              <DockerIcon />
              <span>Docker</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <JenkinsIcon />
              <span>Jenkins</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <DigitalOceanIcon />
              <span>Digital Ocean</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <VercelIcon />
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2 justify-end">
        <div className="border-[1px] rounded-lg border-[#BCA37F] flex flex-col gap-8 w-full sm:w-1/2 p-4">
          <div className="text-center font-mynerve py-4 text-2xl text-[#FC6736] ">
            OTHER TOOLS / Libraries
          </div>
          {/* <div className="grid grid-cols-3 gap-10 place-items-center"> */}
          <div className="grid grid-cols-3 gap-10 place-items-center">
            <div className="flex flex-col items-center gap-4">
              <JiraIcon />
              <span>Jira</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <GitHubIcon />
              <span>Git Hub</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <GitLabIcon />
              <span>Git Lab</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <FigmaIcon />
              <span>Figma</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <TypescriptIcon />
              <span>Typescript</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <StrapiIcon />
              <span>Strapi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
