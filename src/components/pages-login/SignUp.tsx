import signUpImg from "../../assets/img/and-machines-vqTWfa4DjEk-unsplash 1.png";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Box, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function SignUn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordPrev, setRegisterPasswordPrev] = useState("");
  const [number, setNumber] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  console.log("Path:", location.pathname);

  const ucerR = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(registerEmail, registerPassword, registerPasswordPrev);

    try {
      const response = await axios.post(
        "http://localhost:3000/shop/users/register",
        {
          name: userName,
          email: registerEmail,
          password: registerPassword,
          phone: number,
        }
      );

      if (
        response.status === 200 &&
        registerPassword === registerPasswordPrev
      ) {
        toast.success("Good job 🥳");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else {
        toast.error("Sorry, write it right!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box
        sx={{ display: { xs: "block", md: "flex" } }}
        style={{ alignItems: "start", gap: "50px" }}
      >
        <Box
          sx={{ display: { xs: "none", md: "block" } }}
          className="wrapperImg"
        >
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
          <h3 className="signin_text">Sign Up</h3>

          <p
            style={{
              color: "rgba(102, 102, 102, 0.80)",
              textAlign: "start",
            }}
          >
            Sign up for free to access to in any of our products
          </p>

          <div className="wrapper_btn">
            <button className="google">
              <img
                src="https://www.gstatic.com/images/branding/product/2x/googleg_24dp.png"
                alt=""
              />
              Continue With Google
            </button>

            <form style={{ marginTop: "16px" }}>
              <div className="login_input">
                <label htmlFor="name">User</label>
                <TextField
                  id="name"
                  type="text"
                  variant="outlined"
                  placeholder="Enter your User Name..."
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="login_input">
                <label htmlFor="email">Email</label>
                <TextField
                  id="email"
                  type="email"
                  variant="outlined"
                  placeholder="Enter your email..."
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>

              <div className="login_input">
                <label htmlFor="password">Password</label>
                <TextField
                  id="password"
                  type="password"
                  variant="outlined"
                  placeholder="Enter your password..."
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
              </div>

              <div className="login_input">
                <label htmlFor="password Pre">Password Pre</label>
                <TextField
                  id="password Pre"
                  type="password"
                  variant="outlined"
                  onChange={(e) => setRegisterPasswordPrev(e.target.value)}
                  placeholder="Enter your password pre..."
                />
              </div>

              <div className="login_input">
                <label htmlFor="Number Pre">Number Pre</label>
                <TextField
                  id="Number Pre"
                  type="text"
                  defaultValue="+998"
                  variant="outlined"
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter your password pre..."
                />
              </div>

              <button className="all-button register_btn" onClick={ucerR}>
                Registration
              </button>
            </form>
          </div>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
}

export default SignUn;
