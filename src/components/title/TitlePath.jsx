import React from "react";

const TitlePath = ({ children, classname }) => {
  return <h1 className={`text-3xl font-semibold ${classname} `}>{children}</h1>;
};

export default TitlePath;
