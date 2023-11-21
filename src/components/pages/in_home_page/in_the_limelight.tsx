import { Box, Button, Typography, Container } from "@mui/material";
import styled from "styled-components";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

// img_men_page
import popular_1 from "../../../assets/img/popular_1.png";
import popular_2 from "../../../assets/img/popular_2.png";
import popular_3 from "../../../assets/img/popular_3.png";
import popular_4 from "../../../assets/img/popular_4.png";
// img_men_page

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
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Limelight() {
  const btn_price_size = {
    xs: "10px",
    sm: "14px",
    md: "14px",
    lg: "14px",
    xl: "16px",
  };

  const info_size = {
    xs: "12px",
    sm: "14px",
    md: "14px",
    lg: "14px",
    xl: "18px",
  };

  const bottom_info = {
    xs: "10px",
    sm: "12px",
    md: "12px",
    lg: "14px",
    xl: "14px",
  };

  const card_width = {
    xs: "48%",
    sm: "48%",
    md: "32%",
    lg: "23.5%",
    xl: "23.5%",
  };

  return (
    <LimelightStyleCss>
      <Container>
        <Box
          sx={{
            display: "flex",
            margin: "70px 0 50px",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div className="left_zone_border"></div>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "28px",
              color: "#3C4242",
            }}
          >
            In The Limelight
          </Typography>
        </Box>

        <Box className="main_popular_card_page">
          {cards.map((card) => (
            <Box sx={{ width: card_width }}>
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
              <Box className="popular_card_text">
                <div>
                  <Typography
                    sx={{
                      color: "#2A2F2F",
                      fontWeight: "600",
                      fontSize: info_size,
                    }}
                  >
                    {card.info}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#797979",
                      fontWeight: "500",
                      fontSize: bottom_info,
                    }}
                  >
                    {card.bottom_info}
                  </Typography>
                </div>
                <Button
                  className="btn_price"
                  sx={{
                    fontSize: btn_price_size,
                  }}
                >
                  {card.price}
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </LimelightStyleCss>
  );
}

const LimelightStyleCss = styled.div`
  .main_popular_card_page {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    margin-bottom: 68px;
  }

  .popular_card_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }

  .img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    border-radius: 16px;
  }
  .left_zone_border {
    border: 2px solid #8a33fd;
    border-radius: 10px;
    height: 20px;
  }

  .btn_price {
    border-radius: 8px;
    padding: 6px 16px;
    background-color: #f6f6f6;
    font-weight: 700;
    color: #3c4242;
  }
`;

export default Limelight;
