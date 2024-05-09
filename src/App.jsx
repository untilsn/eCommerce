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
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "./config/firebaseConfigure";
import { loginSuccess } from "./redux/slice/authSlice";
import { useEffect } from "react";
import AddCategories from "./pages/manage/AddCategories";
import AddProducts from "./pages/manage/AddProducts";
import { collection, onSnapshot } from "firebase/firestore";
import { displayCategories } from "./redux/slice/storeSlice";
import { useFetchingProducts } from "./hooks/useFetchingProducts";
import BlogPage from "./pages/BlogPage";
import { useFetchingWishlists } from "./hooks/useFetchingWishlists";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginSuccess(null));
      }
    });
    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    const categoryRef = collection(db, "categories");
    onSnapshot(categoryRef, (snapshot) => {
      let result = [];
      snapshot.forEach((category) => {
        const docData = category.data();
        result.push(docData);
      });
      dispatch(displayCategories(result));
    });
  }, []);
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
            path="/manage/categories"
            element={<DashboardCategory></DashboardCategory>}
          ></Route>
          <Route
            path="/manage/add-categories"
            element={<AddCategories></AddCategories>}
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
