import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AuthenModal from "./modules/authen/AuthenModal";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ScrollTopButton from "./components/button/ScrollTopButton";
import DashboardPage from "./pages/DashboardPage";
import PageStyles from "./pages/PageStyles";
import DashboardMainPage from "./pages/manage/DashboardMainPage";
import DashboardProduct from "./pages/manage/DashboardProduct";
import DashboardCategory from "./pages/manage/DashboardCategory";
import { useSelector } from "react-redux";
import AddCategories from "./pages/manage/AddCategories";
import AddProducts from "./pages/manage/AddProducts";
import BlogPage from "./pages/BlogPage";
import { useFetchingWishlists } from "./hooks/useFetchingWishlists";
import { useFetchingProducts } from "./hooks/useFetchingProducts";
import { useDataFetcher } from "./hooks/useFetchData";
import { useFetchCategory } from "./hooks/useFeatchCategory";
import { useDataUser } from "./hooks/useDataUser";
import DashboardUser from "./pages/manage/DashboardUser";
import DashboardUpdateProduct from "./pages/manage/DashboardUpdateProduct";

function App() {
  const { user } = useSelector((state) => state.auth);
  useDataUser(user);
  useDataFetcher();
  useFetchCategory();
  useFetchingWishlists(user);
  useFetchingProducts(user);
  return (
    <>
      <Routes>
        {/* main page */}
        <Route element={<PageStyles></PageStyles>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route
            path="/wishlist"
            element={<WishlistPage></WishlistPage>}
          ></Route>
          <Route path="/product" element={<ProductPage></ProductPage>}></Route>
          <Route path="/blogs" element={<BlogPage></BlogPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
        </Route>
        {/* dashboard */}
        <Route path="" element={<DashboardPage></DashboardPage>}>
          <Route
            path="/manage"
            element={<DashboardMainPage></DashboardMainPage>}
          ></Route>
          <Route
            path="/manage/products"
            element={<DashboardProduct></DashboardProduct>}
          ></Route>
          <Route
            path="/manage/add-products"
            element={<AddProducts></AddProducts>}
          ></Route>
          <Route
            path="/manage/products/update"
            element={<DashboardUpdateProduct></DashboardUpdateProduct>}
          ></Route>
          <Route
            path="/manage/categories"
            element={<DashboardCategory></DashboardCategory>}
          ></Route>
          <Route
            path="/manage/add-categories"
            element={<AddCategories></AddCategories>}
          ></Route>
          <Route
            path="/manage/user"
            element={<DashboardUser></DashboardUser>}
          ></Route>
        </Route>
      </Routes>
      {/* funtion */}
      <AuthenModal></AuthenModal>
      <ScrollTopButton></ScrollTopButton>
    </>
  );
}

export default App;
