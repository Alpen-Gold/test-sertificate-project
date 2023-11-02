import { Routes, Route } from "react-router-dom";

// import styled from "@emotion/styled";
import "./App.css";
import Login from "./components/LoginLeyout";
import Leyout from "./components/Leyout";
import LeyoutAdmin from "./admin-components/LeyoutAdmin";
import ProductPage from "./admin-components/Pages/ProductPage";
import CategoryPage from "./admin-components/Pages/CategoryPages";
import NotAdminPage from "./admin-components/Pages/NotAdminPage";
import HomePage from "./components/pages/homePage";
import MenPage from "./components/pages/menPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="men" element={<MenPage />}></Route>
          <Route path="*" element={<NotAdminPage />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/leyout-admin" element={<LeyoutAdmin />}>
          <Route index element={<ProductPage />}></Route>
          <Route path="product" element={<ProductPage />}></Route>
          <Route path="category" element={<CategoryPage />}></Route>
          <Route path="*" element={<NotAdminPage />}></Route>
        </Route>
      </Routes>

      {/* <AppWrapper>
      </AppWrapper> */}
    </>
  );
}

// const AppWrapper = styled.div``;

export default App;
