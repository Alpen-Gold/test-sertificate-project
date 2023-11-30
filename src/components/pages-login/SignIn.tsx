// import styled from "@emotion/styled";
// import logoImg from "../../assets/img";
import signUpImg from "../../assets/img/and-machines-vqTWfa4DjEk-unsplash 1.png";
// import axios from "axios";

import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  console.log(registerEmail, registerPassword);

  // const [registerPasswordPrev, setRegisterPasswordPrev] = useState("");

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
    <Box
      sx={{ display: { xs: "block", md: "flex" } }}
      style={{ alignItems: "start", gap: "50px" }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }} className="wrapperImg">
        <img
          src={signUpImg}
          alt="none"
          style={{ minWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </Box>

      <Box
        sx={{ margin: { xs: "50px", md: "0 50px 0 0" } }}
        className="wrapperForm"
      >
        <h3 className="signin_text">Sign In Page</h3>

        <Box sx={{ mt: "30px" }} className="wrapper_btn">
          <button className="google">
            <img
              src="https://www.gstatic.com/images/branding/product/2x/googleg_24dp.png"
              alt=""
            />
            Continue With Google
          </button>

          <form style={{ marginTop: "16px" }}>
            <div className="login_input">
              <label htmlFor="email">User name or email address</label>
              <TextField
                error
                id="email"
                variant="outlined"
                type="email"
                placeholder="Enter your email..."
                onChange={(e) => setRegisterEmail(e.target.value)}
                helperText="Enter email!"
              />
            </div>

            <div className="login_input">
              <label htmlFor="password">Password</label>
              <TextField
                id="password"
                variant="outlined"
                type="password"
                placeholder="Enter your password..."
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <a href="#" className="forgetRassword">
                Forget your password
              </a>
            </div>

            <button className="all-button " onClick={ucerR}>
              Sign In
            </button>

            <Box sx={{ mt: "10px" }}>
              <a href="#" className="forgetRassword">
                Don’t have an account? Sign up
              </a>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
