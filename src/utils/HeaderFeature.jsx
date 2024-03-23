import React from "react";

const HeaderFeature = ({ children, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-light">
      <span className="relative hover:text-yellow">
        {icon}
        <div className="absolute top-0 flex items-center justify-center w-5 h-5 text-black rounded-full -right-2 bg-yellow">
          0
        </div>
      </span>
      <span className="text-sm text-textColor">{children}</span>
    </div>
  );
};

export default HeaderFeature;
