import { MdCompareArrows } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

export const iconHeaderList = [
  {
    icon: <MdCompareArrows className="text-4xl" />,
    title: "compare",
    url: "/compare",
  },
  {
    icon: <IoMdHeartEmpty className="text-4xl" />,
    title: "wishlist",
    url: "/wishlist",
  },
  {
    icon: <IoCartOutline className="text-4xl" />,
    title: "cart",
    url: "/cart",
  },
];
