// import styled from "@emotion/styled";
// import logoImg from "../../assets/img";
// import signUpImg from "../../assets/img/and-machines-vqTWfa4DjEk-unsplash 1.png";
// import axios from "axios";

import { Box, TextField } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function SignUn() {
  //   const [registerEmail, setRegisterEmail] = useState("");
  //   const [registerPassword, setRegisterPassword] = useState("");
  //   const [registerPasswordPrev, setRegisterPasswordPrev] = useState("");

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
          src="https://avatars.mds.yandex.net/i?id=28bcdf401eb50ba36d475b7630783fb750ee45ac-9290726-images-thumbs&n=13"
          alt="none"
          style={{ minWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        />

        {/* <img
          src={signUpImg}
          alt="none"
          style={{ minWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        /> */}
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
              <label htmlFor="email">Email</label>
              <TextField
                error
                id="email"
                type="email"
                variant="outlined"
                placeholder="Enter your email..."
                // onChange={(e) => setRegisterEmail(e.target.value)}
                helperText="Enter email !"
              />
            </div>

            <div className="login_input">
              <label htmlFor="password">Password</label>
              <TextField
                id="password"
                type="password"
                variant="outlined"
                placeholder="Enter your password..."
                // onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>

            <div className="login_input">
              <label htmlFor="password Pre">Password Pre</label>
              <TextField
                id="password Pre"
                type="password"
                variant="outlined"
                // onChange={(e) => setRegisterPasswordPrev(e.target.value)}
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
  );
}

export default SignUn;
