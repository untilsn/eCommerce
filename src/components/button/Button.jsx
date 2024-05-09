import React from "react";

const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="px-5 mt-20 max-w-[250px] w-full mx-auto py-4 font-semibold text-white rounded-md shadow-md bg-gradient-to-r from-[#f79d00] to-[#64f38c]  hover:from-green-600 hover:to-blueColor-600 focus: focus:ring-2 focus:ring-blueColor-500 focus:ring-opacity-50"
    >
      {children}
    </button>
  );
};

export default Button;
