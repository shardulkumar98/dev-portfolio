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

const Skills = () => {
  return (
    <div className="sm:w-4/5 w-full sm:py-14 flex flex-col gap-10 ">
      <div className="font-grapeNuts text-4xl sm:text-6xl text-center text-[#FC6736] my-8">
        Professional Skills
      </div>
      <div className="w-full flex gap-2">
        <div className="border-[1px] rounded-lg border-[#BCA37F] flex flex-col gap-8 w-full sm:w-1/2 p-4">
          <div className="text-center font-mynerve py-4 text-2xl text-[#FC6736] ">
            FRONTEND
          </div>
          {/* <div className="flex justify-around flex-wrap gap-6"> */}
          <div className="flex flex-wrap gap-10 justify-between">
            <div className="flex flex-col items-center gap-4">
              <Image src={HtmlImage} height={50} width={50} alt="laoding" />
              <span>Html 5</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image src={CssImage} height={50} width={50} alt="laoding" />
              <span>Css 3</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image src={JsImage} height={50} width={50} alt="laoding" />
              <span>Javascript</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image src={ReactImage} height={50} width={50} alt="laoding" />
              <span>React</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Image src={NextImage} height={50} width={50} alt="laoding" />
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-2 justify-end">
        <div className="border-[1px] rounded-lg border-[#BCA37F] flex flex-col gap-8 w-full sm:w-1/2 p-4">
          <div className="text-center font-mynerve py-4 text-2xl text-[#FC6736] ">
            BACKEND
          </div>
          <div className="flex flex-wrap gap-10 justify-between">
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
          <div className="flex flex-wrap gap-10 justify-between">
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
          <div className="flex flex-wrap gap-10 justify-between">
            {/* <div className="flex flex-wrap gap-10 justify-between"> */}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
