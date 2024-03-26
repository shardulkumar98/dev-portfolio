import React from "react";

const Button = () => {
  return (
    <a href='assets/resume/dummy.pdf' download>
      <button
        type="button"
        className="border-2 px-5 sm:w-1/2 py-2 rounded bg-slate-600"
      >
        Download Resume
      </button>
    </a>
  );
};

export default Button;
