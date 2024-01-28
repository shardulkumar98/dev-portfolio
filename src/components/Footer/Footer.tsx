import React from "react";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-[#638889] text-center py-8 px-5 md:py-5 md:px-40 lg:py-10 w-full bottom-0 ">
      <div className="font-oxygen font-thin text-lg opacity-[0.5]">
        &copy; | All Rights Reseverd | 2024
      </div>
    </div>
  );
};

export default React.memo(Footer);