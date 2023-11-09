import { Box, Button, Typography, Container } from "@mui/material";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// img_men_page
import women_card_1 from "../../../assets/img/women_card_1.png";
import women_card_2 from "../../../assets/img/women_card_2.png";
import women_card_3 from "../../../assets/img/women_card_3.png";
import women_card_4 from "../../../assets/img/women_card_4.png";
// img_men_page

function CardWomenPage() {
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
            Categories For Women
          </Typography>
        </Box>
        <Box className="main_women_card_page">
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "32%",
                lg: "23.5%",
                xl: "23.5%",
              },
              marginBottom: "70px",
            }}
          >
            <img src={women_card_1} className="img" />
            <Box className="women_card_text">
              <div>
                <Typography
                  sx={{ color: "#2A2F2F", fontWeight: "700", fontSize: "18px" }}
                >
                  Hoodies & Sweetshirt
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
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
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "32%",
                lg: "23.5%",
                xl: "23.5%",
              },
              marginBottom: "70px",
            }}
          >
            <img src={women_card_2} className="img" />
            <Box className="women_card_text">
              <div>
                <Typography
                  sx={{ color: "#2A2F2F", fontWeight: "700", fontSize: "18px" }}
                >
                  Coats & Parkas
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
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
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "32%",
                lg: "23.5%",
                xl: "23.5%",
              },
              marginBottom: "70px",
            }}
          >
            <img src={women_card_3} className="img" />
            <Box className="women_card_text">
              <div>
                <Typography
                  sx={{ color: "#2A2F2F", fontWeight: "700", fontSize: "18px" }}
                >
                  Tees & T-Shirt
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
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
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "48%",
                md: "32%",
                lg: "23.5%",
                xl: "23.5%",
              },
              marginBottom: "70px",
            }}
          >
            <img src={women_card_4} className="img" />
            <Box className="women_card_text">
              <div>
                <Typography
                  sx={{ color: "#2A2F2F", fontWeight: "700", fontSize: "18px" }}
                >
                  Boxers
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
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
        </Box>
      </Container>
    </MenStyleCss>
  );
}

const MenStyleCss = styled.div`
  .main_women_card_page {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  .main_women_card_page .img {
    border-radius: 16px;
    height: 100%;
  }
  .women_card_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }
  .img {
    width: 100%;
    object-fit: cover;
  }
  .left_zone_border {
    border: 2px solid #8a33fd;
    border-radius: 10px;
    height: 20px;
  }
`;

export default CardWomenPage;
