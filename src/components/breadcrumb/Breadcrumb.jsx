import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ children, url }) => {
  return (
    <div className="container">
      <Breadcrumbs className="p-0 py-3 capitalize bg-transparent ">
        <Link
          to="/"
          className="py-1 text-xl font-normal hover:text-blue-800 hover:text-yellow text-opacity-80 text-dark"
        >
          Home
        </Link>
        <Link
          to={`/${children}`}
          className="py-1 text-xl font-normal hover:text-blue-800 hover:text-yellow text-darkPrimary"
        >
          {children}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
