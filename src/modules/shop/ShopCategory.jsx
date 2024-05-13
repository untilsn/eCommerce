import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { useFetchProductCategory } from "../../hooks/useFetchProductCategory";
import { IoIosArrowDown, IoMdArrowDropup } from "react-icons/io";

function Icon({ id, open }) {
  return (
    <IoMdArrowDropup
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform text-dark  text-opacity-70`}
    />
  );
}

const ShopCategory = () => {
  const { categories } = useSelector((state) => state.store);
  const { products } = useSelector((state) => state.store);
  const [categoryCounts, setCategoryCounts] = useState([]);
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  useEffect(() => {
    const counts = {};
    products.map(
      (item) => (counts[item?.category] = (counts[item?.category] || 0) + 1),
      setCategoryCounts(counts)
    );
  }, []);

  const [selectCategory, setSelectCategory] = useState("");
  const [openAcc1, setOpenAcc1] = useState(true);
  useFetchProductCategory(selectCategory);
  const handleOpenAcc1 = () => setOpenAcc1(!openAcc1);
  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1>Filters:</h1>
        <h2 onClick={() => setSelectCategory("")} className="text-yellowColor">
          Clean all
        </h2>
      </div>
      {/* accordian */}
      <div className="border-t border-gray border-opacity-20">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className="text-lg font-medium tracking-wider text-dark hover:text-dark text-opacity-80"
            onClick={() => handleOpen(1)}
          >
            Category
          </AccordionHeader>
          <AccordionBody className="py-3 text-sm font-normal capitalize text-dark">
            {categories.map((item) => (
              <div
                key={v4()}
                className="flex items-center justify-between py-3 text-base "
              >
                <span
                  onClick={() => setSelectCategory(item.name)}
                  className={`${
                    selectCategory === item.name ? "text-yellowColor" : ""
                  } capitalize text-dark hover:text-yellowColor`}
                >
                  {item?.name}
                </span>
                <span className="px-2 py-0 rounded bg-gray bg-opacity-10 text-dark">
                  {categoryCounts[item.name] || 0}
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
