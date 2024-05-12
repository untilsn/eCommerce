import React, { Fragment } from "react";
import DashboardHeading from "../../modules/dashboard/DashboardHeading";
import ActionView from "../../components/action/ActionView";
import ActionEdit from "../../components/action/ActionEdit";
import ActionDelete from "../../components/action/ActionDelete";
import { Chip, Typography, Card } from "@material-tailwind/react";
const TABLE_HEAD = ["id", "name", "slug", "status", "action"];
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
const DashboardCategory = () => {
  return (
    <Fragment>
      <DashboardHeading>Manage Product</DashboardHeading>
      <Card shadow={false} className="w-full h-full mt-10">
        <table className="w-full text-left min-w-max">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="p-4 border-b border-gray-100">
                  <Typography
                    variant="small"
                    color="gray"
                    className={
                      head === "product"
                        ? "text-sm  leading-none text-left  font-medium capitalize text-dark "
                        : "text-sm  leading-none text-left font-medium capitalize text-dark "
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
              const classes = isLast ? "p-4" : "p-4 border-b border-gray-50";
              return (
                <tr
                  key={item.id}
                  className=" hover:bg-bgColor hover:bg-opacity-60"
                >
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="gray"
                      className="text-sm font-normal"
                    >
                      5UzBL
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="gray"
                      className="text-sm font-normal"
                    >
                      <span>namee</span>
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="gray"
                      className="text-sm font-normal "
                    >
                      <span>computer</span>
                    </Typography>
                  </td>

                  <td className="p-4">
                    <div className=" text- w-max">
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
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="gray"
                      className="text-sm font-normal"
                    >
                      <span className="flex items-center justify-start gap-3">
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
    </Fragment>
  );
};

export default DashboardCategory;
