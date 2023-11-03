import styled from "@emotion/styled";
import logoImg from "../assets/img/Logo.png";
import signUpImg from "../assets/img/and-machines-vqTWfa4DjEk-unsplash 1.png";
import axios from "axios";

import { Box, Container, TextField } from "@mui/material";
import { useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useRoutes,
} from "react-router-dom";

function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordPrev, setRegisterPasswordPrev] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  console.log("Path:", location.pathname);
  const ucerR = async () => {
    navigate("/home");

    // try {
    //   const respons = await axios.post(
    //     "http://192.168.1.48:8080/api/auth/register",
    //     {
    //       email: registerEmail,
    //       password: registerPassword,
    //       prePassword: registerPasswordPrev,
    //     }
    //   );
    //   console.log(respons);
    // } catch (error) {
    //   alert(error);
    // }
  };

  return (
    <AllStyleLogin>
      <div className="nav_top">
        <Container className="my_conatiner" style={{ maxWidth: "1400px" }}>
          <div className="cards_elements">
            <div>
              <img src={logoImg} alt="none" />
            </div>

            <div className="btn_box">
              <NavLink to={"sign-in"}>
                <button
                  className={
                    location.pathname === "/sign-in"
                      ? "all-button-active"
                      : "all-button"
                  }
                >
                  Sign In
                </button>
              </NavLink>

              <NavLink to={"sign-up"}>
                <button
                  className={
                    location.pathname === "/sign-up"
                      ? "all-button-active"
                      : "all-button"
                  }
                >
                  Sign Up
                </button>
              </NavLink>
            </div>
          </div>
        </Container>
      </div>

      <Outlet />
    </AllStyleLogin>
  );
}

export default Login;

const AllStyleLogin = styled.div`
  .nav_top {
    background-color: #fff;
    border-bottom: 1px solid #bebcbd;
  }

  .register_btn {
    margin-top: 10px;
    padding: 12px;
    width: 100%;
  }

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 10px 14px;
  }

  .login_input {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 4px;
  }

  .cards_elements {
    width: 100%;
    min-height: 83px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btn_box {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  // -------------------------------

  .wrapperImg {
    flex: 1;
    height: calc(100vh - 88px) !important;
  }

  .wrapperForm {
    flex: 1;
  }

  .wrapper_btn {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .google {
    margin-top: 25px;
    padding: 10px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #8a33fd;
    font-size: 15px;
    border: 1px solid grey;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      background-color: #8a33fd;
      color: white;
      transition: all 0.4s;
    }
  }

  .google img {
    width: 24px;
    height: 24px;
  }

  .signin_text {
    font-size: 34px;
    font-weight: 600;
    color: black;
    margin-bottom: 0;
    text-align: center;
  }
`;
