"use client";

const Interest = () => {
  const data = [
    { title: "Travel" },
    { title: "Cooking" },
    { title: "Coding" },
    { title: "Trekking" },
    { title: "Photography" },
  ];
  return (
    <div className="sm:w-4/5 sm:py-10 flex flex-col gap-8">
      <div className="font-grapeNuts text-4xl sm:text-6xl text-center text-[#FC6736] my-8">
        My Interest
      </div>
      <div className="w-full grid grid-cols-3 p-4">
        {data.map((ele, index) => 
          <li key={index}>{ele.title}</li>
        )}
      </div>
    </div>
  );
};

export default Interest;
