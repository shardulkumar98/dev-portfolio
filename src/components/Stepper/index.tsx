import React from "react";
import { Steps } from "antd";

const Stepper = ({ items }: any) => {

    // const customDataMapping = items.map((item:any, index: number)=>{
    //     return(
    //         <div key={index}>
    //             <div>{item.title}</div>
    //             <div>{item.year}</div>
    //             <div>{items.description}</div>
    //         </div>
    //     )
    // })

  return (
    <>
      <Steps progressDot current={items?.length} direction="vertical" items={items} />
    </>
  );
};

export default Stepper;
