import { Box, Checkbox, Typography, Button } from "@mui/material";
import styled from "styled-components";

// images

import popular_1 from "../../../assets/img/popular_1.png";
import popular_2 from "../../../assets/img/popular_2.png";
import popular_3 from "../../../assets/img/popular_3.png";
import popular_4 from "../../../assets/img/popular_4.png";
import popular_5 from "../../../assets/img/popular_5.png";
import popular_6 from "../../../assets/img/popular_6.png";
import popular_7 from "../../../assets/img/popular_7.png";
import popular_8 from "../../../assets/img/popular_8.png";
import popular_9 from "../../../assets/img/popular_9.png";
import popular_10 from "../../../assets/img/popular_10.png";
import popular_11 from "../../../assets/img/popular_11.png";
import popular_12 from "../../../assets/img/popular_12.png";
// images

////
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { NavLink } from "react-router-dom";
////

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const cards = [
  {
    img: popular_1,
    info: "Black Sweatshirt with ....",
    bottom_info: "Jhanvi’s  Brand",
    price: "$123.00",
  },
  {
    img: popular_2,
    info: "White T-shirt",
    bottom_info: "Helen’s  Brand",
    price: "$11.00",
  },
  {
    img: popular_3,
    info: "Levender Hoodie with ....",
    bottom_info: "Nike’s  Brand",
    price: "$119.00",
  },
  {
    img: popular_4,
    info: "Leaves Pattern White...",
    bottom_info: "paypal’s  Brand",
    price: "$77.00",
  },
  {
    img: popular_5,
    info: "White Graphic Crop Top",
    bottom_info: "woden’s  Brand",
    price: "$29.00",
  },
  {
    img: popular_6,
    info: "Black Shorts",
    bottom_info: "MM’s  Brand",
    price: "$37.00",
  },
  {
    img: popular_7,
    info: "Barboreal Gray Sweats...",
    bottom_info: "Priya’s  Brand",
    price: "$77.00",
  },
  {
    img: popular_8,
    info: "Yellow Sweatshirt",
    bottom_info: "woden’s  Brand",
    price: "$29.00",
  },
  {
    img: popular_9,
    info: "Flower Pattern Black C...",
    bottom_info: "MM’s  Brand",
    price: "$37.00",
  },
  {
    img: popular_10,
    info: "I Don’t Graphic T-shirt ",
    bottom_info: "Nisargi’s  Brand",
    price: "$77.00",
  },
  {
    img: popular_11,
    info: "Blue Flower Print Crop ....",
    bottom_info: "Mellon’s  Brand",
    price: "$29.00",
  },
  {
    img: popular_12,
    info: "line Pattern Black H...",
    bottom_info: "AS’s  Brand",
    price: "$37.00",
  },
];

function ClothingPage() {
  const card_info_size = {
    xs: "10px",
    sm: "14px",
    md: "14px",
    lg: "14px",
    xl: "16px",
  };

  const card_bottom_info_size = {
    xs: "10px",
    sm: "14px",
    md: "14px",
    lg: "12px",
    xl: "14px",
  };

  const card_price_size = {
    xs: "10px",
    sm: "14px",
    md: "14px",
    lg: "14px",
    xl: "16px",
  };
  const start_end_size = {
    xs: "16px",
    sm: "20px",
    md: "24px",
    lg: "22px",
    xl: "22px",
  };
  return (
    <ClothingStyle>
      <Box sx={{ padding: { lg: "0 0 0 42px", xl: "0 0 0 42px" }, flex: 1 }}>
        <Box className="Women_start_text">
          <Typography className="start" sx={{ fontSize: start_end_size }}>
            Women’s Clothing
          </Typography>
          <Typography
            className="end"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: start_end_size,
            }}
          >
            <span>New</span> Recommended
          </Typography>
        </Box>

        <Box className="main_popular_card_page">
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "48%",
                  sm: "48%",
                  md: "32%",
                  lg: "32%",
                  xl: "32%",
                },
                marginBottom: "28px",
                padding: "0 4px",
              }}
            >
              <NavLink to={"/full-info-product"}>
                <Box position={"relative"}>
                  <img src={card.img} className="img" />
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder sx={{ color: "red" }} />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                    sx={{
                      position: "absolute",
                      top: "6%",
                      fontSize: "1px",
                      right: "5%",
                      padding: "6px",
                      backgroundColor: "#fff",
                    }}
                  />
                </Box>
              </NavLink>
              <Box className="popular_card_text">
                <div>
                  <Typography
                    sx={{
                      color: "#2A2F2F",
                      fontWeight: "600",
                      fontSize: card_info_size,
                    }}
                  >
                    {card.info}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#797979",
                      fontSize: card_bottom_info_size,
                      fontWeight: "500",
                    }}
                  >
                    {card.bottom_info}
                  </Typography>
                </div>
                <Button
                  className="btn_price"
                  sx={{
                    fontSize: card_price_size,
                  }}
                >
                  {card.price}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </ClothingStyle>
  );
}

const ClothingStyle = styled.div`
  /* Women_start_text */
  .Women_start_text {
    margin: 48px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .start {
    color: #3f4646;
    font-weight: 600;
  }
  .end {
    display: flex;
    align-items: center;
    gap: 28px;
    color: #3f4646;
    font-weight: 600;
  }
  .end span {
    color: #8a33fd;
  }
  /* Women_start_text */
`;

export default ClothingPage;
