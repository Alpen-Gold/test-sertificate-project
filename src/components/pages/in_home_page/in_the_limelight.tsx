import { Box, Button, Typography, Container, IconButton } from "@mui/material";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

// img_men_page
import popular_1 from "../../../assets/img/popular_1.png";
import popular_2 from "../../../assets/img/popular_2.png";
import popular_3 from "../../../assets/img/popular_3.png";
import popular_4 from "../../../assets/img/popular_4.png";
// img_men_page

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Limelight() {
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
              padding: "0 10px",
            }}
          >
            <Box position={"relative"}>
              <img src={popular_1} className="img" />
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
                  sx={{ color: "#2A2F2F", fontWeight: "600", fontSize: "16px" }}
                >
                  Black Sweatshirt with ....
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
                >
                  Jhanvi’s Brand
                </Typography>
              </div>
              <Button
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#F6F6F6",
                  padding: "6px 16px",
                  color: "#3C4242",
                  fontWeight: "700",
                }}
              >
                $123.00
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
              padding: "0 10px",
            }}
          >
            <Box position={"relative"}>
              <img src={popular_2} className="img" />
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
                  sx={{ color: "#2A2F2F", fontWeight: "600", fontSize: "16px" }}
                >
                  line Pattern Black H...
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
                >
                  AS’s Brand
                </Typography>
              </div>
              <Button
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#F6F6F6",
                  padding: "6px 16px",
                  color: "#3C4242",
                  fontWeight: "700",
                }}
              >
                $37.00
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
              padding: "0 10px",
            }}
          >
            <Box position={"relative"}>
              <img src={popular_3} className="img" />
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
                  sx={{ color: "#2A2F2F", fontWeight: "600", fontSize: "16px" }}
                >
                  Black Shorts
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
                >
                  MM’s Brand
                </Typography>
              </div>
              <Button
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#F6F6F6",
                  padding: "6px 16px",
                  color: "#3C4242",
                  fontWeight: "700",
                }}
              >
                $37.00
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
              padding: "0 10px",
            }}
          >
            <Box position={"relative"}>
              <img src={popular_4} className="img" />
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
                  sx={{ color: "#2A2F2F", fontWeight: "600", fontSize: "16px" }}
                >
                  Levender Hoodie with ....
                </Typography>
                <Typography
                  sx={{ color: "#797979", fontSize: "14px", fontWeight: "500" }}
                >
                  Nike’s Brand
                </Typography>
              </div>
              <Button
                sx={{
                  borderRadius: "8px",
                  backgroundColor: "#F6F6F6",
                  padding: "6px 16px",
                  color: "#3C4242",
                  fontWeight: "700",
                }}
              >
                $119.00
              </Button>
            </Box>
          </Box>
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
  }
  .main_popular_card_page .img {
    border-radius: 16px;
    height: 100%;
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
  }
  .left_zone_border {
    border: 2px solid #8a33fd;
    border-radius: 10px;
    height: 20px;
  }
`;

export default Limelight;
