import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import HomePageLayout from "./pages/HomePageLayout";
import HomePage from "./pages/HomePage";
import FooterContact from "./modules/homepage/footer/FooterContact";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AuthenModal from "./modules/authen/AuthenModal";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route element={<HomePageLayout></HomePageLayout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/shop" element={<ShopPage></ShopPage>}></Route>
          <Route path="/product" element={<ProductPage></ProductPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route
            path="/wishlist"
            element={<WishlistPage></WishlistPage>}
          ></Route>
        </Route>
      </Routes>
      <AuthenModal></AuthenModal>
      <FooterContact></FooterContact>
    </div>
  );
}

export default App;
