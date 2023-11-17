import { Box, Button, Typography, Container } from "@mui/material";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// img_men_page
import men_card_1 from "../../../assets/img/men_card_1.png";
import men_card_2 from "../../../assets/img/men_card_2.png";
import men_card_3 from "../../../assets/img/men_card_3.png";
import men_card_4 from "../../../assets/img/men_card_4.png";
import men_card_5 from "../../../assets/img/men_card_5.png";
import men_card_6 from "../../../assets/img/men_card_6.png";
import men_card_7 from "../../../assets/img/men_card_7.png";
import men_card_8 from "../../../assets/img/men_card_8.png";
// img_men_page

const MenData = [
  {
    img: men_card_1,
    info: "Shirts",
  },
  {
    img: men_card_2,
    info: "Printed T-Shirts",
  },
  {
    img: men_card_3,
    info: "Plain T-Shirt",
  },
  {
    img: men_card_4,
    info: "Polo T-Shirt",
  },
  {
    img: men_card_5,
    info: "Hoodies & Sweetshirt",
  },
  {
    img: men_card_6,
    info: "Jeans",
  },
  {
    img: men_card_7,
    info: "Activewear",
  },
  {
    img: men_card_8,
    info: "Boxers",
  },
];

function CardMenPage() {
  const card_width = {
    xs: "48%",
    sm: "48%",
    md: "32%",
    lg: "23.5%",
    xl: "23.5%",
  };

  return (
    <MenStyleCss>
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
            Categories For Men
          </Typography>
        </Box>
        <Box className="main_men_card_page">
          {MenData.map((men) => (
            <Box sx={{ width: card_width }}>
              <Box>
                <img src={men.img} className="img" />
              </Box>
              <Box className="men_card_text">
                <div>
                  <Typography
                    sx={{
                      color: "#2A2F2F",
                      fontWeight: "700",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "14px",
                        lg: "14px",
                        xl: "18px",
                      },
                    }}
                  >
                    {men.info}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#797979",
                      fontWeight: "500",
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "12px",
                        lg: "14px",
                        xl: "14px",
                      },
                    }}
                  >
                    Explore Now!
                  </Typography>
                </div>
                <Button>
                  <ArrowRightAltIcon
                    sx={{ fontSize: "32px", color: "#797979" }}
                  />
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </MenStyleCss>
  );
}

const MenStyleCss = styled.div`
  .main_men_card_page {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  .men_card_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }
  .img {
    width: 100%;
    object-fit: cover;
    height: 90%;
    border-radius: 16px;
  }
  .left_zone_border {
    border: 2px solid #8a33fd;
    border-radius: 10px;
    height: 20px;
  }
`;

export default CardMenPage;
