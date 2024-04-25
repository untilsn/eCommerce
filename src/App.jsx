import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { auth } from "./config/firebaseConfigure";
import { loginSuccess } from "./redux/slice/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginSuccess(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
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
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
        </Route>
        {/* dashboard */}
        <Route path="" element={<DashboardPage></DashboardPage>}>
          <Route
            path="/manage"
            element={<DashboardMainPage></DashboardMainPage>}
          ></Route>
          <Route
            path="/manage/product"
            element={<DashboardProduct></DashboardProduct>}
          ></Route>
          <Route
            path="/manage/category"
            element={<DashboardCategory></DashboardCategory>}
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

{
  /* <div>
<Header></Header>
<Routes>
  <Route element={<HomePageLayout></HomePageLayout>}>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
    <Route
      path="/product"
      element={<ProductPage></ProductPage>}
    ></Route>
    <Route path="/cart" element={<CartPage></CartPage>}></Route>
    <Route
      path="/wishlist"
      element={<WishlistPage></WishlistPage>}
    ></Route>
  </Route>
</Routes>
<AuthenModal></AuthenModal>
<FooterContact></FooterContact>
<ScrollTopButton></ScrollTopButton>
</div>
<div>
<Routes>
  <Route
    path="/dashboard"
    element={<DashboardPage></DashboardPage>}
  ></Route>
</Routes>
</div> */
}
