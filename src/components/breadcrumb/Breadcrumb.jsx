import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ children, url }) => {
  return (
    <div className="border-b border-gray border-opacity-10">
      <div className="container ">
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
          {url ? (
            <Link
              to={`/${url}`}
              className="py-1 text-xl font-normal hover:text-blue-800 hover:text-yellow text-darkPrimary"
            >
              {url}
            </Link>
          ) : (
            ""
          )}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Breadcrumb;
