"use client";

import Image from "next/image";
import HtmlImage from "@/assets/png/html.png";
import CssImage from "@/assets/png/css.png";
import JsImage from "@/assets/png/js.png";
import ReactImage from "@/assets/png/reactlogo.png";
import NextImage from "@/assets/png/nextjs.png";

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
          <div className="grid grid-cols-3 gap-10 place-items-center h-screen">
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
          <div className="grid grid-cols-3 gap-10 place-items-center h-screen">
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
      <div className="w-full flex">
        <div className="border-[1px] rounded-lg border-[#BCA37F] flex flex-col gap-8 w-full sm:w-1/2 p-4">
          <div className="text-center font-mynerve py-4 text-2xl text-[#FC6736] ">
            DEVOPS
          </div>
          <div className="grid grid-cols-3 gap-10 place-items-center h-screen">
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
            OTHER TOOLS / Libraries
          </div>
          <div className="grid grid-cols-3 gap-10 place-items-center h-screen">
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
    </div>
  );
};

export default Skills;
