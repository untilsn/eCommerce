import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

const ShopCategory = () => {
  const { categories } = useSelector((state) => state.store);
  const [openAcc1, setOpenAcc1] = useState(true);

  const handleOpenAcc1 = () => setOpenAcc1(!openAcc1);

  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1>Filters:</h1>
        <h2 className="text-yellowColor">Clean all</h2>
      </div>
      {/* accordian */}
      <div className="border-t border-gray border-opacity-20">
        <Accordion open={openAcc1}>
          <AccordionHeader
            className="text-xl font-medium text-dark hover:text-dark bor"
            onClick={handleOpenAcc1}
          >
            Category
          </AccordionHeader>
          <AccordionBody className="py-3 text-sm font-normal capitalize text-dark">
            {categories.map((item) => (
              <div
                key={v4()}
                className="flex items-center justify-between py-3 text-base"
              >
                <span className="capitalize text-dark hover:text-yellowColor">
                  {item?.name}
                </span>
                <span className="px-2 py-0 rounded bg-gray bg-opacity-10 text-dark">
                  0
                </span>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default ShopCategory;
