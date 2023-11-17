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
import { Box, Button, Container, Typography } from "@mui/material";
import ZonePage from "./in_home_page/big_saving_zone";
import CardMenPage from "./in_home_page/categories _for_men";
import CardWomenPage from "./in_home_page/categories _for_women";
import FooterPage from "../Footer";
import Limelight from "./in_home_page/in_the_limelight";
import BrendPage from "./in_home_page/brend_page";

function HomePage() {
  const h1_swiper_size = { xs: "42px", md: "52px", xl: "68px" };
  const h3_swiper_size = { xs: "18px", md: "26px", xl: "32px" };
  const style_explore_items = {
    marginTop: {
      xs: "20px",
      sm: "22px",
      md: "50px",
      lg: "28px",
      xl: "28px",
    },
    fontSize: {
      xs: "18px",
      sm: "28px",
      md: "34px",
      lg: "20px",
      xl: "22px",
    },
  };
  const small_text_top = {
    xs: "13%",
    sm: "12%",
    md: "14%",
    lg: "16%",
    xl: "13%",
  };

  const start_end_text = {
    xs: "16px",
    sm: "22px",
    md: "32px",
    lg: "20px",
    xl: "22px",
  };

  const small_h1_size = {
    xs: "22px",
    sm: "36px",
    md: "50px",
    lg: "28px",
    xl: "32px",
  };

  const btn_main_carousel = {
    padding: {
      xs: "6px 32px",
      sm: "6px 38px",
      md: "6px 38px",
      lg: "8px 44px",
      xl: "8px 44px",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "16px",
      xl: "16px",
    },
  };

  return (
    <AllStyleLogin>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper_text">
            <Typography sx={{ fontSize: h3_swiper_size }} className="h3">
              T-shirt / Tops
            </Typography>
            <Typography sx={{ fontSize: h1_swiper_size }} className="h1">
              Summer <span>Value Pack</span>
            </Typography>
            <Typography sx={{ fontSize: h3_swiper_size }} className="h3">
              cool / colorful / comfy
            </Typography>
            <Button
              variant="contained"
              className="btn_main_carousel"
              sx={btn_main_carousel}
            >
              Shop Now
            </Button>
          </div>
          <img src={swiper} className="swiper_images img" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper_text">
            <Typography sx={{ fontSize: h3_swiper_size }} className="h3">
              T-shirt / Tops
            </Typography>
            <Typography sx={{ fontSize: h1_swiper_size }} className="h1">
              Summer <span>Value Pack</span>
            </Typography>
            <Typography sx={{ fontSize: h3_swiper_size }} className="h3">
              cool / colorful / comfy
            </Typography>
            <Button
              variant="contained"
              className="btn_main_carousel"
              sx={btn_main_carousel}
            >
              Shop Now
            </Button>
          </div>
          <img src={swiper_2} className="swiper_images img" />
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
            className="small_main"
            sx={{
              width: { xs: "100%", md: "100%", lg: "50%" },
            }}
          >
            <img
              src={small_1}
              className="img"
              style={{
                display: "block",
              }}
            />
            <Box
              className="small_text"
              sx={{
                top: small_text_top,
                backgroundColor: "transparent",
              }}
            >
              <Typography
                className="start_end_text"
                sx={{
                  fontSize: start_end_text,
                }}
              >
                Low Price
              </Typography>
              <Typography
                sx={{
                  fontSize: small_h1_size,
                }}
                className="small_h1"
              >
                High Coziness
              </Typography>
              <Typography
                className="start_end_text"
                sx={{
                  fontSize: start_end_text,
                }}
              >
                UPTO 50% OFF
              </Typography>
              <Typography className="explore_items" sx={style_explore_items}>
                Explore Items
              </Typography>
            </Box>
          </Box>
          <Box
            className="small_main"
            sx={{
              width: { xs: "100%", md: "100%", lg: "50%" },
            }}
          >
            <img
              src={small_2}
              className="img"
              style={{
                display: "block",
              }}
            />
            <Box
              className="small_text"
              sx={{
                top: small_text_top,
                backgroundColor: "transparent",
              }}
            >
              <Typography
                className="start_end_text"
                sx={{
                  fontSize: start_end_text,
                }}
              >
                Beyoung Presents
              </Typography>
              <Typography
                sx={{
                  fontSize: small_h1_size,
                }}
                className="small_h1"
              >
                Breezy Summer <span>Style</span>
              </Typography>
              <Typography
                className="start_end_text"
                sx={{
                  fontSize: start_end_text,
                }}
              >
                UPTO 50% OFF
              </Typography>
              <Typography className="explore_items" sx={style_explore_items}>
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
        <BrendPage />
        <Limelight />
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
    height: 100vh !important;
  }

  .explore_items {
    display: inline-block;
    color: #fff;
    font-weight: 600;
    border-bottom: 2px solid #fff;
  }

  .start_end_text {
    font-weight: 600;
    color: #fff;
  }

  .small_main {
    position: relative;
    border-radius: 14px;
    margin-bottom: 50px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.4);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    margin: 16px 0 8px;
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
  .swiper_text .btn_main_carousel {
    border-radius: 8px;
    background: #fff;
    border: none;
    color: #3c4242;
    outline: none;
    font-weight: 600;
    box-shadow: none;
  }
`;

export default HomePage;
