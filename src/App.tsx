import { Routes, Route } from "react-router-dom";

// import styled from "@emotion/styled";
import "./App.css";
import Leyout from "./components/Leyout";
import LeyoutAdmin from "./admin-components/LeyoutAdmin";
import ProductPage from "./admin-components/Pages/ProductPage";
import CategoryPage from "./admin-components/Pages/CategoryPages";
import NotAdminPage from "./admin-components/Pages/NotAdminPage";
import HomePage from "./components/pages/homePage";
import ManPage from "./components/pages/menPage";
import SignIn from "./components/pages-login/SignIn";
import SignUp from "./components/pages-login/SignUp";
import Login from "./components/LoginLeyout";
import CartPage from "./components/pages/in_cart_page/cartPage";
import CartBuyPage from "./components/pages/in_cart_page/cartBuyPage";
import WomenPage from "./components/pages/womenPage";
import FullInfoProduct from "./components/pages/fullInfoBrend";
import UsersPage from "./admin-components/Pages/UserPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="men" element={<ManPage />}></Route>
          <Route path="women" element={<WomenPage />}></Route>
          <Route path="full-info-product" element={<FullInfoProduct />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="buy-my-cart" element={<CartBuyPage />}></Route>
          <Route path="*" element={<NotAdminPage />}></Route>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<SignUp />}></Route>
          <Route path="sign-up" element={<SignUp />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
        </Route>

        <Route path="/leyout-admin" element={<LeyoutAdmin />}>
          <Route index element={<ProductPage />}></Route>
          <Route path="product" element={<ProductPage />}></Route>
          <Route path="category" element={<CategoryPage />}></Route>
          <Route path="users" element={<UsersPage />}></Route>
          <Route path="*" element={<NotAdminPage />}></Route>
        </Route>
        <Route path="*" element={<NotAdminPage />}></Route>
      </Routes>

      <ScrollToTop />
      {/* <AppWrapper>
    </AppWrapper> */}
    </>
  );
}

// const AppWrapper = styled.div``;

export default App;
