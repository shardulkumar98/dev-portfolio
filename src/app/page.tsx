import React from "react";

const Home = () => {
  return (
    <div className="w-full gap-8 md:gap-5 min-h-[70vh] md:min-h-[83vh] p-5 md:p-24 flex flex-col justify-center">
      <div className="font-oxygen text-5xl md:text-6xl lg:text-7xl">
        Hello !
      </div>
      <div className="font-oxygen text-6xl  md:text-7xl lg:text-8xl">
        I am Name
      </div>
      <div className="font-oxygen text-2  md:text-3xl lg:text-4xl">
        Designation
      </div>
    </div>
  );
};

export default React.memo(Home);
