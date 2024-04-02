import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { v4 } from "uuid";

const ShopCategory = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1>Filters:</h1>
        <h2 className="text-yellow">Clean all</h2>
      </div>
      {/* accordian */}
      <div className="border-t border-gray border-opacity-20">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="text-2xl text-dark hover:text-dark"
            onClick={() => handleOpen(1)}
          >
            Category
          </AccordionHeader>
          {Array(5)
            .fill(0)
            .map((item) => (
              <AccordionBody
                className="py-3 text-xl font-normal capitalize text-dark"
                key={v4()}
              >
                hello
              </AccordionBody>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ShopCategory;
