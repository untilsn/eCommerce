import MenuCart from "../menu/MenuCart";
import MenuShop from "../menu/MenuShop";
import ProductMenu from "../menu/ProductMenu";

export const dashboardLink = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "shop",
    url: "/shop",
    menu: <MenuShop></MenuShop>,
    hover: false,
  },
  {
    name: "product",
    url: "/product",
    hover: false,
    menu: <ProductMenu></ProductMenu>,
  },
  {
    name: "cart",
    url: "/cart",
    hover: false,
    menu: <MenuCart></MenuCart>,
  },
  {
    name: "blogs",
    url: "/blogs",
    hover: false,
  },
  {
    name: "element",
    url: "/element",
    hover: false,
  },
];
