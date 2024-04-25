import { FaBox } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";

import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
export const sidebarLinks = [
  {
    title: "Dashboard",
    url: "/manage",
    icon: <FaBox />,
  },
  {
    title: "product",
    url: "/manage/product",
    icon: <FaProductHunt />,
  },
  {
    title: "Category",
    url: "/manage/category",
    icon: <FaBoxArchive />,
  },
  {
    title: "User",
    url: "/manage/user",
    icon: <FaUser />,
  },
  {
    title: "Logout",
    url: "/",
    icon: <FaSignOutAlt />,
    onClick: () => signOut(auth),
  },
];
