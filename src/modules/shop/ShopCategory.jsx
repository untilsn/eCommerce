import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React from "react";
import { v4 } from "uuid";

const ShopCategory = () => {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  // function Icon({ id, open }) {
  //   return (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       fill="none"
  //       viewBox="0 0 24 24"
  //       strokeWidth={2}
  //       stroke="currentColor"
  //       className={`${
  //         id === open ? "rotate-180" : ""
  //       } h-5 w-5 transition-transform`}
  //     >
  //       <path
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
  //       />
  //     </svg>
  //   );
  // }
  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1>Filters:</h1>
        <h2 className="text-yellow">Clean all</h2>
      </div>
      {/* accordian */}
      <div className="border-t border-gray border-opacity-20">
        <Accordion open={openAcc1}>
          <AccordionHeader
            className="text-2xl font-normal text-dark hover:text-dark"
            onClick={handleOpenAcc1}
          >
            Category
          </AccordionHeader>
          {Array(5)
            .fill(0)
            .map((item) => (
              <AccordionBody
                className="py-3 text-sm font-normal capitalize text-dark"
                key={v4()}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="capitalize text-dark">name</span>
                  <span className="px-2 py-0 rounded bg-gray bg-opacity-10 text-dark">
                    0
                  </span>
                </div>
              </AccordionBody>
            ))}
        </Accordion>
        <Accordion open={openAcc2}>
          <AccordionHeader
            className="text-2xl font-normal text-dark hover:text-dark"
            onClick={handleOpenAcc2}
          >
            Category
          </AccordionHeader>
          {Array(5)
            .fill(0)
            .map((item) => (
              <AccordionBody
                className="py-3 text-sm font-normal capitalize text-dark"
                key={v4()}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="capitalize text-dark">name</span>
                  <span className="px-2 py-0 rounded bg-gray bg-opacity-10 text-dark">
                    0
                  </span>
                </div>
              </AccordionBody>
            ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ShopCategory;
