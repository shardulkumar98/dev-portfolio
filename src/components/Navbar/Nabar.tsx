import React from "react";
import { data } from "./data";
import Link from "next/link";

const Nabar = () => {
  return (
    <div className="flex justify-between py-8 px-5 md:py-5 md:px-40 lg:py-10 border-b-[1px] border-slate-500 ">
      <div className="text-center md:text-left w-full font-caveat text-2xl">
        Title
      </div>
      <div className="hidden w-full md:flex md:gap-16 justify-end">
        {data.map((e) => (
          <Link key={e?.label} href={e.path} className="font-oxygen">
            {e?.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nabar;
