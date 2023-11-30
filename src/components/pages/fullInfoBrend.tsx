import {
  Box,
  Container,
  Typography,
  Rating,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import FooterPage from "../Footer";

import img from "../../assets/img/top.png";

//
const labels: { [index: string]: string } = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { MdOutlinePayment } from "react-icons/md";
import { TbShirt } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { TiArrowRepeat } from "react-icons/ti";
import ClothingSuggest from "./in_full_info/cloting";
//

const colors = ["#3C4242", "#EDD146", "#EB84B0", "#9C1F35"];

const btnSize = [
  { size: "XS", count: 0 },
  { size: "S", count: 6 },
  { size: "M", count: 0 },
  { size: "L", count: 3 },
  { size: "Xl", count: 5 },
];

function FullInfoProduct() {
  const value = 3.5;

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Topstyle className="body">
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              width: "47.5%",
              textAlign: "end",
            }}
          >
            <img src={img} className="img" />
          </Box>
          <Box sx={{ width: "47.5%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "7px",
                margin: "20px 0",
              }}
            >
              <NavLink to={"/home"}>
                <Typography sx={{ fontSize: "16px", color: "#807D7E" }}>
                  Home
                </Typography>
              </NavLink>
              <ChevronRightIcon sx={{ color: "#807D7E" }} />
              <NavLink to={"/women"}>
                <Typography sx={{ fontSize: "16px", color: "#807D7E" }}>
                  Women
                </Typography>
              </NavLink>
              <ChevronRightIcon sx={{ color: "#807D7E" }} />
              <Typography sx={{ fontSize: "16px" }}>Top</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "48px" }} className="h1">
                Raven Hoodie With <span>Black colored Design</span>
              </Typography>
            </Box>
            <Box sx={{ my: 2 }}>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: 1 }}>{labels[value]}</Box>
              </Box>
            </Box>
            <Box>
              <Typography className="size">
                Select Size
                <IconButton className="in_size">
                  Size Guide
                  <EastIcon sx={{ ml: 2 }} />
                </IconButton>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                flexWrap: "wrap",
                gap: "20px",
                mt: 3,
              }}
            >
              {btnSize.map((s: { size: string; count: number }, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => handleSizeSelection(s.size)}
                  className={
                    selectedSize === s.size ? "btn_dark_size" : "btn_size"
                  }
                  disabled={s.count === 0}
                >
                  {s.size}
                </Button>
              ))}
            </Box>
            <Box>
              <Typography sx={{ mt: 4, mb: 2 }}>Colours Available</Typography>
              <Box className="main_color">
                {colors.map((color) => (
                  <Box
                    className={`col ${selectedColor === color ? "color" : ""}`}
                    key={color}
                    onClick={() => handleColorSelection(color)}
                  >
                    <Box
                      className="color_in"
                      sx={{ backgroundColor: color }}
                    ></Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="main_btn_add" sx={{ mt: 5 }}>
              <IconButton className="add_btn">
                <ShoppingCartIcon sx={{ fontSize: "20px" }} />
                Add to cart
              </IconButton>
              <Box className="price_btn_dis">$63.00</Box>
            </Box>
            <Divider sx={{ mt: 4, mb: 2 }} />
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box className="add_menu_choice">
                <IconButton className="icon_choice" size="large">
                  <MdOutlinePayment style={{ fontSize: "30px" }} />
                </IconButton>
                Secure payment
              </Box>
              <Box className="add_menu_choice">
                <IconButton className="icon_choice" size="large">
                  <TbShirt style={{ fontSize: "30px" }} />
                </IconButton>
                Size & Fit
              </Box>
              <Box className="add_menu_choice">
                <IconButton className="icon_choice" size="large">
                  <CiDeliveryTruck style={{ fontSize: "30px" }} />
                </IconButton>
                Free shipping
              </Box>
              <Box className="add_menu_choice">
                <IconButton className="icon_choice" size="large">
                  <TiArrowRepeat style={{ fontSize: "30px" }} />
                </IconButton>
                Free Shipping & Returns
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Similar Products */}
        <Box>
          <ClothingSuggest />
        </Box>

        {/* Similar Products */}
      </Container>
      <FooterPage />
    </Topstyle>
  );
}

const Topstyle = styled.div`
  .main_color {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .add_menu_choice {
    display: flex;
    align-items: center;
    width: 50%;
    margin-top: 20px;
    gap: 20px;
    font-size: 20px;
  }

  .icon_choice {
    background: #f6f6f6;
    padding: 14px;
  }

  .main_btn_add {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .add_btn {
    border-radius: 8px;
    background: #8a33fd;
    color: #ffffff;
    font-size: 16px;
    padding: 12px 26px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .price_btn_dis {
    border: 2px solid #3c4242;
    padding: 12px 26px;
    border-radius: 8px;
    color: #3c4242;
    font-weight: 700;
  }

  .add_btn:hover {
    opacity: 1;
    color: #fff;
    background: #8a33fd;
  }

  .col {
    padding: 4px;
    border: 2px solid transparent;
    cursor: pointer;
  }

  .color {
    border: 2px solid #000;
    border-radius: 50%;
  }

  .color_in {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  .size {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #3f4646;
  }

  .in_size {
    color: #807d7e;
    padding: 0;
    border-radius: 0;
    font-size: 18px;
    font-weight: 500;
  }

  .h1 {
    display: flex;
    flex-direction: column;
    color: #3c4242;
    font-weight: 600;
    line-height: 130%;
  }

  .btn_size {
    padding: 4px 0;
    min-width: 42px !important;
    border-radius: 12px;
    color: #3c4242;
    border: 2px solid #bebcbd;
    font-weight: 500;
    font-size: 14px;
  }

  .btn_dark_size {
    padding: 4px 0;
    min-width: 42px !important;
    border-radius: 12px;
    color: #fff;
    border: 2px solid #3c4242;
    font-weight: 500;
    font-size: 14px;
    background-color: #3c4242;
  }

  .btn_dark_size:hover {
    border: 2px solid #3c4242;
    background-color: #3c4242;
  }

  .btn_size:hover {
    border: 2px solid #bebcbd;
  }

  .left_border {
    border: 2px solid #8a33fd;
    border-radius: 10px;
    height: 20px;
  }
`;

export default FullInfoProduct;
