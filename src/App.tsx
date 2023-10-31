import { Routes, Route } from "react-router-dom";

// import styled from "@emotion/styled";
import "./App.css";
import Login from "./components/Login";
import Leyout from "./components/Leyout";
import LeyoutAdmin from "./admin-components/LeyoutAdmin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Leyout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/leyout-admin" element={<LeyoutAdmin />}></Route>
      </Routes>

      {/* <AppWrapper>
      </AppWrapper> */}
    </>
  );
}

// const AppWrapper = styled.div``;

export default App;
