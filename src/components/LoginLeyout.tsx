import styled from "@emotion/styled";
import logoImg from "../assets/img/Logo.png";
import signUpImg from "../assets/img/and-machines-vqTWfa4DjEk-unsplash 1.png";

import { Container, TextField } from "@mui/material";

function Login() {
  return (
    <AllStyleLogin>
      <div className="nav_top">
        <Container className="my_conatiner" style={{ maxWidth: "1400px" }}>
          <div className="cards_elements">
            <div>
              <img src={logoImg} alt="none" />
            </div>

            <div className="btn_box">
              <button className="all-button">Login</button>
              <button className="all-button">Sign Up</button>
            </div>
          </div>
        </Container>
      </div>

      <div style={{ display: "flex", alignItems: "start", gap: "50px" }}>
        <div className="wrapperImg">
          <img
            src={signUpImg}
            alt="none"
            style={{ minWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="wrapperForm">
          <h3 className="signin_text">Sign Up</h3>

          <p
            style={{
              color: "rgba(102, 102, 102, 0.80)",
            }}
          >
            Sign up for free to access to in any of our products{" "}
          </p>

          <div className="wrapper_btn">
            <button className="google">
              <img
                src="https://www.gstatic.com/images/branding/product/2x/googleg_24dp.png"
                alt=""
              />
              Continue With Google
            </button>

            <div>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="salom"
              />
            </div>
          </div>
        </div>
      </div>
    </AllStyleLogin>
  );
}

export default Login;

const AllStyleLogin = styled.div`
  .nav_top {
    background-color: #fff;
    border-bottom: 1px solid #bebcbd;
  }

  .cards_elements {
    width: 100%;
    min-height: 100px;
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
    height: calc(100vh - 105px) !important;
  }

  .wrapperForm {
    flex: 1;
    margin-right: 50px;
    background-color: red;
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
  }
`;
