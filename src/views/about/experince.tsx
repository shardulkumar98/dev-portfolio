"use client";

const Experince = () => {
  
  const data = [
    {
      title: "Lueuer Tech",
      designation: "Web Developer Intern",
      duration: 'Dec 2021 - Jan 2022',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut
      magnam asperiores obcaecati voluptatibus tempora a, debitis recusandae
      beatae enim quo veniam eligendi iusto iste distinctio quaerat.
      Voluptates quae eligendi, blanditiis ad odit accusantium quod dicta
      magnam accusamus, pariatur doloribus assumenda quos, rem quibusdam
      quaerat labore fuga veritatis ut inventore tempore ab vitae ex
      deleniti.`,
    },
    {
      title: "Wits Innovation Lab",
      designation: "Assistant Software Engineer",
      duration: 'Jan 2022 - Present',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ut
      magnam asperiores obcaecati voluptatibus tempora a, debitis recusandae
      beatae enim quo veniam eligendi iusto iste distinctio quaerat.
      Voluptates quae eligendi, blanditiis ad odit accusantium quod dicta
      magnam accusamus, pariatur doloribus assumenda quos, rem quibusdam
      quaerat labore fuga veritatis ut inventore tempore ab vitae ex
      deleniti.`,
    },
  ];

  return (
    <div className=" sm:w-4/5 sm:py-10 flex flex-col gap-8">
      <div className="font-grapeNuts text-4xl sm:text-6xl text-center text-[#FC6736] my-8">
        Work Experience
      </div>
      {data.map((ele,index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <div className="text-2xl text-[#BCA37F]">{ele.title}</div>
            <div className="text-sm font-oxygen text-[#7D7C7C]">
              {ele.designation} <em className="px-2">{ele.duration}</em>
            </div> 
            <div className="font-oxygen">
             {ele.description}
            </div>
          </div>
      ))}
    </div>
  );
};

export default Experince;
