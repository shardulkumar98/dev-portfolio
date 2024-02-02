import React, { memo } from "react";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-[#BCA37F] text-center py-8 px-5 md:py-5 md:px-40 lg:py-10 w-full bottom-0 ">
    {/* <div className="border-t-[1px] border-[#638889] text-center py-8 px-5 md:py-5 md:px-40 lg:py-10 w-full bottom-0 "> */}
      <div className="font-extralight text-lg opacity-[0.5]">
        &copy; | All Rights Reseverd | 2024
      </div>
    </div>
  );
};

export default memo(Footer);
