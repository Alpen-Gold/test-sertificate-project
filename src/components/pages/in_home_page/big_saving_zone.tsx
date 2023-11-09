import { Box, Button, Typography, Container } from "@mui/material";
import zone_1 from "../../../assets/img/zone_1.png";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import center_1 from "../../../assets/img/zone_center_1.png";
import center_2 from "../../../assets/img/zone_center_2.png";
import last_1 from "../../../assets/img/zone_last_1.png";
import last_2 from "../../../assets/img/zone_last_2.png";

function ZonePage() {
  return (
    <ZoneStyleCss>
      <Container>
        <Box
          sx={{
            display: "flex",
            margin: "50px 0",
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
            Big Saving Zone
          </Typography>
        </Box>
        {/* zone_small_card */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "26px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "48.8%", lg: "32%" },
            }}
            className="small_card_main"
          >
            <img
              src={zone_1}
              className="img"
              style={{ borderRadius: "14px" }}
            />
            <Box className="small_zone_text">
              <Typography
                className="h1"
                sx={{
                  fontSize: {
                    xs: "34px",
                    sm: "44px",
                    md: "36px",
                    lg: "28px",
                    xl: "32px",
                  },
                }}
              >
                Hawaiian <span>Shirts</span>
              </Typography>
              <Typography
                className="h3"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "18px",
                    md: "14px",
                    lg: "12px",
                    xl: "12px",
                  },
                  margin: {
                    xs: "18px 0 12px 0",
                    sm: "18px 0 12px 0",
                    md: "18px 0 10px 0",
                    lg: "16px 0 10px 0",
                    xl: "20px 0 10px 0",
                  },
                }}
              >
                Dress up in summer vibe
              </Typography>
              <Typography
                className="h2"
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    md: "16px",
                    lg: "14px",
                    xl: "16px",
                  },
                }}
              >
                UPTO 50% OFF
              </Typography>

              <ArrowDownwardIcon
                sx={{
                  fontSize: {
                    xs: "52px",
                    sm: "68px",
                    md: "44px",
                    lg: "38px",
                    xl: "32px",
                  },
                  margin: {
                    xs: "40px 0",
                    sm: "40px 0",
                    md: "40px 0",
                    lg: "28px 0",
                    xl: "32px 0",
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "12px", xl: "12px" },
                  padding: {
                    xs: "6px 32px",
                    sm: "6px 38px",
                    md: "6px 28px",
                    lg: "5px 28px",
                    xl: "5px 28px",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
          <Box
            sx={{ width: { xs: "100%", sm: "100%", md: "48.8%", lg: "32%" } }}
            className="small_card_main"
          >
            <img
              src={zone_1}
              className="img"
              style={{ borderRadius: "14px" }}
            />
            <Box className="small_zone_text">
              <Typography
                className="h1"
                sx={{
                  fontSize: {
                    xs: "34px",
                    sm: "44px",
                    md: "36px",
                    lg: "28px",
                    xl: "32px",
                  },
                }}
              >
                Hawaiian <span>Shirts</span>
              </Typography>
              <Typography
                className="h3"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "18px",
                    md: "14px",
                    lg: "12px",
                    xl: "12px",
                  },
                  margin: {
                    xs: "18px 0 12px 0",
                    sm: "18px 0 12px 0",
                    md: "18px 0 10px 0",
                    lg: "16px 0 10px 0",
                    xl: "20px 0 10px 0",
                  },
                }}
              >
                Dress up in summer vibe
              </Typography>
              <Typography
                className="h2"
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    md: "16px",
                    lg: "14px",
                    xl: "16px",
                  },
                }}
              >
                UPTO 50% OFF
              </Typography>

              <ArrowDownwardIcon
                sx={{
                  fontSize: {
                    xs: "52px",
                    sm: "68px",
                    md: "44px",
                    lg: "38px",
                    xl: "32px",
                  },
                  margin: {
                    xs: "40px 0",
                    sm: "40px 0",
                    md: "40px 0",
                    lg: "28px 0",
                    xl: "32px 0",
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "12px", xl: "12px" },
                  padding: {
                    xs: "6px 32px",
                    sm: "6px 38px",
                    md: "6px 28px",
                    lg: "5px 28px",
                    xl: "5px 28px",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
          <Box
            sx={{ width: { xs: "100%", sm: "100%", md: "48.8%", lg: "32%" } }}
            className="small_card_main"
          >
            <img
              src={zone_1}
              className="img"
              style={{ borderRadius: "14px" }}
            />
            <Box className="small_zone_text">
              <Typography
                className="h1"
                sx={{
                  fontSize: {
                    xs: "34px",
                    sm: "44px",
                    md: "36px",
                    lg: "28px",
                    xl: "32px",
                  },
                }}
              >
                Hawaiian <span>Shirts</span>
              </Typography>
              <Typography
                className="h3"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "18px",
                    md: "14px",
                    lg: "12px",
                    xl: "12px",
                  },
                  margin: {
                    xs: "18px 0 12px 0",
                    sm: "18px 0 12px 0",
                    md: "18px 0 10px 0",
                    lg: "16px 0 10px 0",
                    xl: "20px 0 10px 0",
                  },
                }}
              >
                Dress up in summer vibe
              </Typography>
              <Typography
                className="h2"
                sx={{
                  fontSize: {
                    xs: "18px",
                    sm: "20px",
                    md: "16px",
                    lg: "14px",
                    xl: "16px",
                  },
                }}
              >
                UPTO 50% OFF
              </Typography>

              <ArrowDownwardIcon
                sx={{
                  fontSize: {
                    xs: "52px",
                    sm: "68px",
                    md: "44px",
                    lg: "38px",
                    xl: "32px",
                  },
                  margin: {
                    xs: "40px 0",
                    sm: "40px 0",
                    md: "40px 0",
                    lg: "28px 0",
                    xl: "32px 0",
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "12px", xl: "12px" },
                  padding: {
                    xs: "6px 32px",
                    sm: "6px 38px",
                    md: "6px 28px",
                    lg: "5px 28px",
                    xl: "5px 28px",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>
        {/* zone_small */}

        {/* zone_center */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "26px",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "48.8%",
                xl: "48.8%",
              },
            }}
            className="zone_center_main"
          >
            <img
              src={center_1}
              className="img"
              style={{ borderRadius: "16px" }}
            />
            <Box className="zone_center_text">
              <Typography
                className="h1"
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "64px",
                    lg: "36px",
                    xl: "36px",
                  },
                }}
              >
                Urban
                <span>Shirts</span>
              </Typography>
              <Typography
                className="h3"
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "16px",
                    lg: "14px",
                    xl: "12px",
                  },
                  margin: {
                    xs: "14px 0 12px 0",
                    sm: "18px 0 12px 0",
                    md: "18px 0 10px 0",
                    lg: "14px 0 10px 0",
                    xl: "20px 0 10px 0",
                  },
                }}
              >
                Live In Confort
              </Typography>
              <Typography
                className="h2"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "28px",
                    lg: "20px",
                    xl: "24px",
                  },
                }}
              >
                FLAT 60% OFF
              </Typography>
              <ArrowDownwardIcon
                sx={{
                  fontSize: {
                    xs: "32px",
                    sm: "38px",
                    md: "52px",
                    lg: "38px",
                    xl: "38px",
                  },
                  margin: {
                    xs: "24px 0",
                    sm: "32px 0",
                    md: "40px 0",
                    lg: "26px 0",
                    xl: "32px 0",
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "16px",
                    lg: "12px",
                    xl: "12px",
                  },
                  padding: {
                    xs: "6px 28px",
                    sm: "6px 26px",
                    md: "6px 36px",
                    lg: "5px 28px",
                    xl: "5px 28px",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "48.8%",
                xl: "48.8%",
              },
            }}
            className="zone_center_main"
          >
            <img
              src={center_2}
              className="img"
              style={{ borderRadius: "16px" }}
            />
            <Box className="zone_center_text">
              <Typography
                className="h1"
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "64px",
                    lg: "36px",
                    xl: "36px",
                  },
                }}
              >
                Oversized
                <span>T-Shirts</span>
              </Typography>
              <Typography
                className="h3"
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "16px",
                    lg: "14px",
                    xl: "12px",
                  },
                  margin: {
                    xs: "14px 0 12px 0",
                    sm: "18px 0 12px 0",
                    md: "18px 0 10px 0",
                    lg: "14px 0 10px 0",
                    xl: "20px 0 10px 0",
                  },
                }}
              >
                Street Style Icon
              </Typography>
              <Typography
                className="h2"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "28px",
                    lg: "20px",
                    xl: "24px",
                  },
                }}
              >
                FLAT 60% OFF
              </Typography>
              <ArrowDownwardIcon
                sx={{
                  fontSize: {
                    xs: "32px",
                    sm: "38px",
                    md: "52px",
                    lg: "38px",
                    xl: "38px",
                  },
                  margin: {
                    xs: "24px 0",
                    sm: "32px 0",
                    md: "40px 0",
                    lg: "26px 0",
                    xl: "32px 0",
                  },
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "16px",
                    lg: "12px",
                    xl: "12px",
                  },
                  padding: {
                    xs: "6px 28px",
                    sm: "6px 26px",
                    md: "6px 36px",
                    lg: "5px 28px",
                    xl: "5px 28px",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </Box>
        {/* zone_center */}

        {/* last_zone */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            borderRadius: "14px",
            overflow: "hidden",
            marginTop: "32px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "50%",
                xl: "50%",
              },
              borderRadius: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "0",
                xl: "0",
              },
              overflow: "hidden",
            }}
          >
            <img src={last_1} className="img" />
            <Box sx={{}} className="zone_last_text">
              <Typography
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "36px",
                    md: "44px",
                    lg: "30px",
                    xl: "34px",
                  },
                  fontWeight: "800",
                }}
              >
                WE MADE YOUR EVERYDAY FASHION BETTER!
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "22px",
                    md: "30px",
                    lg: "20px",
                    xl: "24px",
                  },
                  fontWeight: "100 !important",
                  margin: {
                    xs: "20px 0 30px",
                    sm: "26px 0 36px",
                    md: "30px 0 50px",
                    lg: "20px 0 40px",
                    xl: "20px 0 40px",
                  },
                }}
              >
                In our journey to improve everyday fashion, euphoria presents
                EVERYDAY wear range - Comfortable & Affordable fashion 24/7
              </Typography>
              <Button
                variant="contained"
                sx={{
                  padding: {
                    xs: "6px 32px",
                    sm: "6px 44px",
                    md: "6px 44px",
                    lg: "6px 44px",
                    xl: "6px 44px",
                  },
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                    lg: "14px",
                    xl: "14px",
                  },
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "50%",
                xl: "50%",
              },
              borderRadius: {
                xs: "14px",
                sm: "14px",
                md: "14px",
                lg: "0",
                xl: "0",
              },
              overflow: "hidden",
            }}
          >
            <img src={last_2} className="img" />
          </Box>
        </Box>
        {/* last_zone */}
      </Container>
    </ZoneStyleCss>
  );
}

const ZoneStyleCss = styled.div`
  .img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }

  .left_zone_border {
    border: 2px solid #8a33fd;
    border-radius: 10px;
    height: 20px;
  }

  .small_zone_text .MuiButtonBase-root {
    color: #fff;
    border: 1px solid #fff !important;
    font-weight: 700;
  }

  .small_card_main {
    position: relative;
  }

  .small_zone_text {
    position: absolute;
    top: 10%;
    left: 6%;
    z-index: 20;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .zone_center_main {
    position: relative;
  }

  .zone_center_text {
    position: absolute;
    top: 10%;
    right: 19%;
    z-index: 20;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .zone_center_text .MuiButtonBase-root {
    color: #000;
    border: 1px solid #000 !important;
    font-weight: 700;
  }

  .h1,
  .h2,
  .h3 {
    font-weight: 600;
  }
  .h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .h2 {
    font-weight: 700;
  }

  .zone_last_text {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 0 10%;
    z-index: 20;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  .zone_last_text .MuiButtonBase-root {
    color: #3c4242;
    background: #fff;

    font-weight: 600;
    text-transform: capitalize;
  }
`;

export default ZonePage;
