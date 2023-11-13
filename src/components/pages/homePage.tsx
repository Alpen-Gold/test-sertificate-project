//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import swiper from "../../assets/img/swiper_images.png";
import swiper_2 from "../../assets/img/girl-1.jpg";
import small_1 from "../../assets/img/small-1.jpg";
import small_2 from "../../assets/img/small-2.jpg";
//Swiper
import styled from "styled-components";
import { Box, Container, Typography } from "@mui/material";
import ZonePage from "./in_home_page/big_saving_zone";
import CardMenPage from "./in_home_page/categories _for_men";
import CardWomenPage from "./in_home_page/categories _for_women";
import FooterPage from "../Footer";

function HomePage() {
  return (
    <AllStyleLogin>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper_text">
            <Typography
              sx={{ fontSize: { xs: "18px", md: "26px", xl: "32px" } }}
              className="h3"
            >
              T-shirt / Tops
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "42px", md: "52px", xl: "68px" } }}
              className="h1"
            >
              Summer <span>Value Pack</span>
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "18px", md: "26px", xl: "32px" } }}
              className="h3"
            >
              cool / colorful / comfy
            </Typography>
            <button>Shop Now</button>
          </div>
          <img src={swiper} alt="" className="swiper_images" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_text">
            <Typography
              sx={{ fontSize: { xs: "18px", md: "26px", xl: "32px" } }}
              className="h3"
            >
              T-shirt / Tops
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "42px", md: "52px", xl: "68px" } }}
              className="h1"
            >
              Summer <span>Value Pack</span>
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "18px", md: "26px", xl: "32px" } }}
              className="h3"
            >
              cool / colorful / comfy
            </Typography>
            <button>Shop Now</button>
          </div>
          <img src={swiper_2} alt="" className="swiper_images" />
        </SwiperSlide>
      </Swiper>
      <Container>
        <Box
          sx={{
            display: { md: "block", lg: "flex" },
            gap: "40px",
            marginTop: "100px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "100%", lg: "50%" },
              position: "relative",
              borderRadius: "14px",
              marginBottom: "50px",
              overflow: "hidden",
              boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.40)",
            }}
          >
            <img
              src={small_1}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
            <Box
              className="small_text"
              sx={{
                top: { xs: "13%", sm: "12%", md: "14%", lg: "16%", xl: "13%" },
                backgroundColor: "transparent",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "22px",
                    md: "32px",
                    lg: "20px",
                    xl: "22px",
                  },
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Low Price
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "36px",
                    md: "50px",
                    lg: "28px",
                    xl: "32px",
                  },
                  margin: "16px 0 8px",
                }}
                className="small_h1"
              >
                High Coziness
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "22px",
                    md: "32px",
                    lg: "20px",
                    xl: "22px",
                  },
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                UPTO 50% OFF
              </Typography>
              <Typography
                sx={{
                  display: "inline-block",
                  lineHeight: "116%",
                  marginTop: {
                    xs: "20px",
                    sm: "22px",
                    md: "50px",
                    lg: "28px",
                    xl: "28px",
                  },
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: {
                    xs: "18px",
                    sm: "28px",
                    md: "34px",
                    lg: "20px",
                    xl: "22px",
                  },
                  borderBottom: "2px solid #fff",
                }}
              >
                Explore Items
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "100%", lg: "50%" },
              position: "relative",
              borderRadius: "14px",
              marginBottom: "50px",
              overflow: "hidden",
              boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.40)",
            }}
          >
            <img
              src={small_2}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
            <Box
              className="small_text"
              sx={{
                top: { xs: "13%", sm: "12%", md: "14%", lg: "16%", xl: "13%" },
                backgroundColor: "transparent",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "22px",
                    md: "32px",
                    lg: "20px",
                    xl: "22px",
                  },
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                Beyoung Presents
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "36px",
                    md: "50px",
                    lg: "28px",
                    xl: "32px",
                  },
                  margin: "16px 0 8px",
                }}
                className="small_h1"
              >
                Breezy Summer <span>Style</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "16px",
                    sm: "22px",
                    md: "32px",
                    lg: "20px",
                    xl: "22px",
                  },
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                UPTO 50% OFF
              </Typography>
              <Typography
                sx={{
                  display: "inline-block",
                  lineHeight: "116%",
                  marginTop: {
                    xs: "20px",
                    sm: "22px",
                    md: "50px",
                    lg: "28px",
                    xl: "28px",
                  },
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: {
                    xs: "18px",
                    sm: "28px",
                    md: "34px",
                    lg: "20px",
                    xl: "22px",
                  },
                  borderBottom: "2px solid #fff",
                }}
              >
                Explore Items
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box>
        <ZonePage />
        <CardMenPage />
        <CardWomenPage />
      </Box>

      <FooterPage />
    </AllStyleLogin>
  );
}

const AllStyleLogin = styled.div`
  .MuiContainer-root {
    max-width: 1400px;
  }
  .swiper {
    height: calc(100vh - 68.2px);
  }
  .swiper-slide {
    position: relative;
  }
  .swiper_images {
    width: 100%;
    object-fit: cover;
    height: 114%;
  }
  .swiper_text {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: absolute;
    z-index: 10;
    top: 25%;
    left: 14%;
    color: #fff;
    gap: 24px;
  }
  .small_h1 {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: #fff;
  }
  .small_text {
    position: absolute;
    left: 6%;
    z-index: 10;
  }
  .swiper_text .h3 {
    margin: 0;
    font-weight: 700;
  }
  .swiper_text .h1 {
    display: flex;
    flex-direction: column;
    margin: 0;
    line-height: 120%;
    font-weight: 700;
  }
  .swiper_text button {
    border-radius: 8px;
    background: #fff;
    padding: 12px 62px;
    border: none;
    color: #3c4242;
    font-size: 16px;
    outline: none;
    font-weight: 600;
  }
`;

export default HomePage;
