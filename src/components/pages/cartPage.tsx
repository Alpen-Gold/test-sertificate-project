import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import CartCard from "../cartBuyProduct";
import FooterPage from "../Footer";

function CartPage() {
  return (
    <>
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

          <Typography sx={{ fontSize: "16px" }}>Add To Cart</Typography>
        </Box>

        <Box sx={{ mt: "30px" }}>
          <Typography sx={{ color: "#807D7E", fontSize: "14px" }}>
            Please fill in the fields below and click place order to complete
            your purchase!
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          bgcolor: "#3C4242",
          color: "white",
          padding: "15px 0",
          mt: "30px",
        }}
      >
        <Container maxWidth="xl" style={{ padding: "0 60px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ textTransform: "uppercase" }}>
              Product Details
            </Typography>

            <Typography sx={{ textTransform: "uppercase" }}>Price</Typography>

            <Typography sx={{ textTransform: "uppercase" }}>
              Quantity
            </Typography>

            <Typography sx={{ textTransform: "uppercase" }}>
              shipping
            </Typography>

            <Typography sx={{ textTransform: "uppercase" }}>
              subtotal
            </Typography>

            <Typography sx={{ textTransform: "uppercase" }}>action</Typography>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="xl" style={{ padding: "0 60px" }}>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </Container>
      </Box>

      <Container
        maxWidth="xl"
        style={{
          padding: "5px 60px",
          margin: "30px 0",
          backgroundColor: "#F6F6F6",
        }}
      >
        <Box sx={{ m: "100px 0" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: 24, fontWeight: 600 }}>
                Discount Codes
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#807D7E" }}>
                Enter your coupon code if you have one
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  mt: "30px",
                }}
              >
                <TextField
                  id="standard-basic"
                  label="Enter . . ."
                  variant="standard"
                />

                <button className="all-button-active">Apply Coupon</button>
              </Box>

              <Box sx={{ mt: "30px" }}>
                <button className="all-button">Continue Shopping</button>
              </Box>
            </Box>

            <Box>
              <Box
                sx={{
                  borderBottom: "1px solid grey",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  justifyItems: "center",
                  gap: "20px",
                  paddingBottom: "30px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <Typography>Sub Total</Typography>

                  <Typography>$513.00</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <Typography>Shipping</Typography>

                  <Typography>$513.00</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "50px",
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>Grand Total</Typography>

                  <Typography sx={{ fontWeight: 700 }}>$513.00</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: "30px", textAlign: "center" }}>
                <button className="all-button-active">
                  Proceed To Checkout
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <FooterPage />
    </>
  );
}

export default CartPage;
