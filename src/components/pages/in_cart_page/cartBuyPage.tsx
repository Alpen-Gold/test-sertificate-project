import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FooterPage from "../../Footer";
import styled from "@emotion/styled";
import { useState } from "react";
import foto from "../../../assets/img/girl-1.jpg";

function CartBuyPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setIsOpen(false);
    setSelectedOption(item);
  };

  return (
    <CartBuyWrapper>
      <Container maxWidth="xl" style={{ padding: "0 60px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "7px",
            mt: "25px",
          }}
        >
          <NavLink to={"/home"}>
            <Typography sx={{ fontSize: "16px", color: "#807D7E" }}>
              Home
            </Typography>
          </NavLink>

          <ChevronRightIcon sx={{ color: "#807D7E" }} />

          <NavLink to={"/cart"}>
            <Typography sx={{ fontSize: "16px", color: "#807D7E" }}>
              My Cart
            </Typography>
          </NavLink>

          <ChevronRightIcon sx={{ color: "#807D7E" }} />

          <Typography sx={{ fontSize: "16px" }}>Add To Cart</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "10px",
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              borderRadius: "10px",
              background: "#8A33FD",
              width: "6px",
              height: "28px",
            }}
          ></Box>

          <Typography sx={{ fontSize: "28px" }}>Check Out</Typography>
        </Box>

        <Typography sx={{ fontSize: "22px", margin: "30px 0" }}>
          Billing Details
        </Typography>

        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            // justifyContent: "space-between",
            gap: "40px",
            mb: "30px",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  flex: 1,

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="userNameEmail">First Name*</label>

                <TextField
                  id="userNameEmail"
                  variant="outlined"
                  placeholder="First Name"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flex: 1,

                  flexDirection: "column",
                }}
              >
                <label htmlFor="lastName">Last Name*</label>

                <TextField
                  id="lastName"
                  variant="outlined"
                  placeholder="Last Name"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                mt: "20px",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="countryRegion">Country / Region*</label>

                <TextField
                  id="countryRegion"
                  variant="outlined"
                  placeholder="Country / Region"
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="companyName">Company Name</label>

                <TextField
                  id="companyName"
                  variant="outlined"
                  placeholder="Company (optional)"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                mt: "20px",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="streetAddres">Street Address*</label>

                <TextField
                  id="streetAddres"
                  variant="outlined"
                  placeholder="House number and street name"
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="aptSuiteUnit">Apt, suite, unit</label>

                <TextField
                  id="aptSuiteUnit"
                  variant="outlined"
                  placeholder="apartment, suite, unit, etc. (optional)"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                mt: "20px",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="city">City*</label>

                <TextField
                  id="city"
                  variant="outlined"
                  placeholder="Town / City"
                />
              </Box>

              <Box
                sx={{
                  flex: 1,

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="email">State*</label>

                <Box className={`custom-select ${isOpen ? "open" : ""}`}>
                  <div className="btn-toggle" onClick={handleToggleClick}>
                    <input
                      type="button"
                      value={selectedOption || "Let's drop"}
                    />
                  </div>
                  <ul className={`drop-items ${isOpen ? "active" : ""}`}>
                    <li
                      className="item"
                      onClick={() => handleItemClick("option first")}
                    >
                      option first
                    </li>
                    <li
                      className="item"
                      onClick={() => handleItemClick("option second")}
                    >
                      option second
                    </li>
                    <li
                      className="item"
                      onClick={() => handleItemClick("option third")}
                    >
                      option third
                    </li>
                  </ul>
                </Box>
              </Box>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label htmlFor="postalCode">Postal Code*</label>

                <TextField
                  id="postalCode"
                  variant="outlined"
                  placeholder="Postal Code"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                mt: "20px",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="phone">Phone*</label>

                <TextField id="phone" variant="outlined" placeholder="Phone" />
              </Box>
            </Box>

            <Box sx={{ marginTop: "40px" }}>
              <button className="all-button-active">
                Continue to delivery
              </button>

              <FormGroup>
                <FormControlLabel
                  sx={{ color: "#3C4242" }}
                  control={<Checkbox />}
                  label="Save my information for a faster checkout"
                />
              </FormGroup>
            </Box>
          </Box>

          <Box
            sx={{
              border: "1px solid grey",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ fontSize: "24px", fontWeight: 600, mb: "10px" }}>
              Order Summary
            </Typography>

            <hr />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
                padding: "10px ",
                borderRadius: "10px",
                boxShadow: "0 5px 10px  0 #00000020",
                mt: "20px",
              }}
            >
              <img src={foto} alt="none" className="fotoBuy" />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <Box>
                  <Typography>Blue Flower Print Crop Top x 1</Typography>
                  <Typography>
                    Colour : <span style={{ color: "#807D7E" }}>Levender</span>
                  </Typography>
                </Box>

                <Typography sx={{ color: "#807D7E", fontWeight: 700 }}>
                  $119.00
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
                padding: "10px ",
                borderRadius: "10px",
                boxShadow: "0 5px 10px  0 #00000020",
                mt: "20px",
              }}
            >
              <img src={foto} alt="none" className="fotoBuy" />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <Box>
                  <Typography>Blue Flower Print Crop Top x 1</Typography>
                  <Typography>
                    Colour : <span style={{ color: "#807D7E" }}>Levender</span>
                  </Typography>
                </Box>

                <Typography sx={{ color: "#807D7E", fontWeight: 700 }}>
                  $119.00
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "15px",
                padding: "10px ",
                borderRadius: "10px",
                boxShadow: "0 5px 10px  0 #00000020",
                mt: "20px",
              }}
            >
              <img src={foto} alt="none" className="fotoBuy" />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <Box>
                  <Typography>Blue Flower Print Crop Top x 1</Typography>
                  <Typography>
                    Colour : <span style={{ color: "#807D7E" }}>Levender</span>
                  </Typography>
                </Box>

                <Typography sx={{ color: "#807D7E", fontWeight: 700 }}>
                  $119.00
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mt: "30px" }}>
              <hr />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  mt: "10px",
                }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  Subtotal <span style={{ color: "#807D7E" }}>( 3 items )</span>
                </Typography>

                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  $513.00
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  mt: "10px",
                }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  Savings
                </Typography>

                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  -$30.00
                </Typography>
              </Box>

              <hr />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  mt: "10px",
                }}
              >
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  Shipping
                </Typography>

                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  -$5.00
                </Typography>
              </Box>

              <hr />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  mt: "10px",
                }}
              >
                <Typography
                  sx={{ fontSize: "20px", color: "#8a33fd", fontWeight: 700 }}
                >
                  Total
                </Typography>

                <Typography
                  sx={{ fontSize: "20px", color: "#8a33fd", fontWeight: 700 }}
                >
                  $478.00
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box>
            <Typography sx={{ fontSize: "22px", fontWeight: 700 }}>
              Payment Method
            </Typography>

            <Typography sx={{ fontSize: "15px", mt: "5px" }}>
              All transactions are secure and encrypted.
            </Typography>
          </Box>
        </Box>
      </Container>

      <FooterPage />
    </CartBuyWrapper>
  );
}

const CartBuyWrapper = styled.div`
  .MuiOutlinedInput-input {
    padding: 10px 15px;
  }

  label {
    margin-bottom: 10px;
  }

  // #countryRegion {
  //   font-size: 10px !important;
  // }

  .fotoBuy {
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 4px;
  }

  @charset "UTF-8";
  .custom-select {
    position: relative;
    width: max-content;
  }
  .custom-select .btn-toggle {
    z-index: 3;
    background: transparent !important;
    border: 1px solid #a2a2a2 !important;
    padding: 10px 15px;
    color: #a2a2a2 !important;
    min-width: 250px;
    border: none;
    text-align: left;
    text-transform: capitalize;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    margin: 0;
    outline: none;
    position: relative;
    transition: all 0.3s ease-in-out;
    display: flex;
  }
  .custom-select .btn-toggle input {
    background: none;
    border: none;
    outline: none;
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    text-transform: inherit;
  }
  .custom-select .btn-toggle::after {
    content: "‹";
    position: absolute;
    top: 8px;
    right: 20px;
    transform: rotate(-90deg);
    font-size: 1.75rem;
    transition: all 0.3s ease-in-out;
  }
  .custom-select .btn-toggle.open {
    border-radius: 10px 10px 0 0;
    transition: all 0.4s ease-in-out;
  }
  .custom-select .btn-toggle.open::after {
    right: 15px;
    transform: rotate(90deg);
    transition: all 0.4s ease-in-out;
  }
  .custom-select .drop-items {
    position: absolute;
    width: 200px;
    z-index: -1;
    top: -50%;
    list-style: none;
    padding: 0;
    margin: 0;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
  .custom-select .drop-items li {
    border: 1px solid #e0e0e0;
    border-top: none;
    padding: 0.75em;
    cursor: pointer;
    background: #ffffff;
    transition: all 0.25s ease-in-out;
  }
  .custom-select .drop-items li:first-child {
    border-top: none;
  }
  .custom-select .drop-items li:last-child {
    border-radius: 0 0 10px 10px;
  }
  .custom-select .drop-items li:hover {
    background: #8a33fd;
    border-color: #8a33fd;
    color: #ffffff;
  }
  .custom-select .drop-items.active {
    z-index: 0;
    opacity: 1;
    top: 100%;
    transition: all 0.4s ease-in-out;
  }
`;

export default CartBuyPage;
