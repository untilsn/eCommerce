import React from "react";
import DashboardHeading from "../../modules/dashboard/DashboardHeading";
import ActionView from "../../components/action/ActionView";
import ActionEdit from "../../components/action/ActionEdit";
import ActionDelete from "../../components/action/ActionDelete";
import { Chip, Typography, Card } from "@material-tailwind/react";
const TABLE_HEAD = [
  "id",
  "product",
  "categore/stock",
  "user",
  "status",
  "action",
];
const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];
const DashboardProduct = () => {
  return (
    <div className="px-10">
      <DashboardHeading>Manage Product</DashboardHeading>
      <Card shadow={false} className="w-full h-full mt-10">
        <table className="w-full text-left min-w-max">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="py-4 border-b border-blue-gray-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className={
                      head === "product"
                        ? "text-sm  leading-none text-left  font-medium capitalize text-dark "
                        : "text-sm  leading-none text-center font-medium capitalize text-dark "
                    }
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ status }, item, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr
                  key={item.id}
                  className="text-center hover:bg-bgColor hover:bg-opacity-60"
                >
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-sm font-normal"
                    >
                      5UzBL
                    </Typography>
                  </td>
                  <td className="py-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-sm font-normal"
                    >
                      <span className="flex items-center gap-3">
                        <span className="max-w-[150px] w-full  h-[100px]">
                          <img
                            className="object-cover w-full h-full rounded"
                            src="/public/productItem/mainImg.jpg"
                            alt="product"
                          />
                        </span>
                        <span className="flex flex-col gap-1">
                          <span className="font-medium">
                            ki vay ta how the fuck not work
                          </span>
                          <span>Date: 15/12/2023</span>
                        </span>
                      </span>
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-sm font-normal text-center"
                    >
                      <span className="flex flex-col gap-1">
                        <span>computer</span>
                        <span>129</span>
                      </span>
                    </Typography>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-sm font-normal"
                    >
                      <span>John Michael</span>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <div className="mx-auto text- w-max">
                      <Chip
                        size="lg"
                        variant="ghost"
                        value={status}
                        color={
                          status === "paid"
                            ? "green"
                            : status === "pending"
                            ? "amber"
                            : "red"
                        }
                      />
                    </div>
                  </td>
                  <td>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="text-sm font-normal"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <ActionView></ActionView>
                        <ActionEdit></ActionEdit>
                        <ActionDelete></ActionDelete>
                      </span>
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default DashboardProduct;
