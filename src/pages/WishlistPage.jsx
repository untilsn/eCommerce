import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import ShopBanner from "../modules/shop/ShopBanner";
import { FaCartPlus } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { FooterIconContact } from "../components/icon/IconContact";

const TABLE_HEAD = ["product", "price", "Stock Status	", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    price: 279.99,
    date: "23/04/18",
    stock: "In stock",
  },
  {
    name: "Alexa Liras",
    price: 899.99,
    date: "23/04/18",
    img: "/public/item/shopitem.jpg",
    stock: "In stock",
  },
  {
    name: "Laurent Perrier",
    price: "Executive",
    date: "19/09/17",
    img: "/public/item/shopitem.jpg",
    stock: "In stock",
  },
  {
    name: "Michael Levi",
    price: 899.99,
    date: "24/12/08",
    stock: "In stock",
  },
  {
    name: "Richard Gran",
    price: 499.99,
    date: "04/10/21",
    stock: "Out stock",
  },
];

const WishlistPage = () => {
  return (
    <div>
      <ShopBanner title="wishlist"></ShopBanner>
      <Breadcrumb children="shop" url="Wishlist"></Breadcrumb>
      <div className="container">
        {/* table */}
        <Card shadow={false} className="w-full h-full mt-20">
          <table className="w-full text-left table-auto min-w-max">
            <thead className="">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="p-4 border-b border-blue-gray-100">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={
                        head === "product"
                          ? "text-xl font-normal leading-none text-left capitalize text-dark "
                          : "text-xl font-normal leading-none text-center capitalize text-dark "
                      }
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, price, stock, img }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center w-full gap-5 text-xl font-normal"
                      >
                        <span className="max-w-[100px] w-full h-[100px]">
                          <img
                            className="object-cover w-full h-full"
                            src={img}
                            alt=""
                          />
                        </span>
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-xl font-normal text-center text-yellow"
                      >
                        ${price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-xl font-normal text-center text-yellow "
                      >
                        {stock}
                      </Typography>
                    </td>
                    <td className="w-[300px]">
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="flex items-center gap-10 text-xl font-normal text-center text-yellow w-[300px]"
                      >
                        <span className="flex items-center justify-center gap-5 p-4 uppercase bg-white border border-gray border-opacity-20 text-yellow max-w-[250px] w-full  hover:bg-yellow hover:text-white">
                          <span>
                            <FaCartPlus />
                          </span>
                          <span>add to carts</span>
                        </span>
                        <span>
                          <IoCloseOutline className="text-3xl text-gray text-opacity-65" />
                        </span>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
        <div className="flex items-center gap-5 my-20">
          <span className="text-xl text-gray text-opacity-60">share on: </span>
          <div className="flex items-center gap-2">
            {FooterIconContact.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center p-3 bg-white border rounded-full text-gray border-gray hover:text-yellow hover:border-yellow "
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
