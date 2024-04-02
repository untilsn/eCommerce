import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import QuantityItem from "../quantity/QuantityItem";

const TABLE_HEAD = ["product", "price", "quantity", "total"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    price: 279.99,
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    price: 899.99,
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    price: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    price: 899.99,
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    price: 499.99,
    date: "04/10/21",
  },
];

const Table = () => {
  return (
    <Card shadow={false} className="w-full h-full ">
      <table className="w-full text-left min-w-max">
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
          {TABLE_ROWS.map(({ name, price, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-xl font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="text-xl font-normal text-center"
                  >
                    ${price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography>
                    <QuantityItem classname="max-w-[150px] text-xl mx-auto"></QuantityItem>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="text-xl font-medium text-center text-yellow"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
