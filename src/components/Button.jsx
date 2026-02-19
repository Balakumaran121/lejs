import React from "react";

const Button = ({ text, type = "", onClick, width, height, customclass }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      className={`${customclass}  bg-emerald-400 hover:bg-emerald-500 cursor-pointer border border-gray-200  p-2 rounded-full`}
    >
      {text}
    </button>
  );
};

export default Button;
