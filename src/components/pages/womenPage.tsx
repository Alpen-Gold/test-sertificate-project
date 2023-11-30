import { Container, Box } from "@mui/material";

import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import BestPricePage from "./in_women_page/best_price";
import FooterPage from "../Footer";

//icons
import ClothingPage from "./in_women_page/womens_clothing";
import WomanLeyout from "./in_women_page/womanLeyout";
import WomanMenuLeyout from "./in_women_page/WomanMenuLeyout";
import { useSize } from "ahooks";

function WomenPage() {
  const ref = useRef(null);
  const size = useSize(ref);

  const [ekranSize, setEkranSize] = useState(size?.width);

  useEffect(() => {
    setEkranSize(size?.width);
  }, [size?.width]);

  return (
    <WomenStyle ref={ref}>
      <Container>
        <Box sx={{ display: "flex" }}>
          {/* Woman Leyout */}

          {ekranSize !== undefined && ekranSize < 1200 ? (
            <Box
              sx={{
                position: "fixed",
                zIndex: "99",
                bottom: "5%",
                right: "5%",
                backgroundColor: "#F0F0F0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
              }}
            >
              <WomanMenuLeyout />
            </Box>
          ) : (
            <WomanLeyout />
          )}

          {/* Woman Leyout  */}

          {/*  _content_  */}
          <ClothingPage />
          {/*  _content_  */}
        </Box>
        {/* best_price */}
        <BestPricePage />
        {/*  best_price */}
      </Container>
      {/* _footer_ */}
      <FooterPage />
      {/* _footer_ */}
    </WomenStyle>
  );
}

const WomenStyle = styled.div`
  .btn_price_control {
    color: #3c4242;
    border: 2px solid #bebcbd;
    font-size: 16px;
    padding: 2px 32px;
    margin-top: 14px;
  }

  .btn_price {
    border-radius: 8px;
    background: #f6f6f6;
    padding: 6px 16px;
    color: #3c4242;
    font-weight: 700;
  }

  .css-tlelie-MuiListItemText-root {
    margin-left: 26px;
  }
  .MuiListItem-gutters {
    padding: 0;
    color: #8a8989;
  }
  .css-xbfsxi-MuiPaper-root-MuiAccordion-root.Mui-expanded {
    margin-top: 0;
  }
  .main_box {
    display: inline-block;
    text-align: center;
    width: 25%;
    margin-top: 16px;
  }
  .in_main_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .color_box {
    width: 36px;
    height: 36px;
    border-radius: 12px;
  }

  .btn_size {
    padding: 4px 0;
    max-width: 60px;
    border-radius: 8px;
    color: #3c4242;
    border: 1px solid #bebcbd;
    font-weight: 600;
    margin-top: 16px;
  }
  .btn_size:hover {
    border: 1px solid #bebcbd;
  }

  .draw_menu {
    color: #807d7e;
    font-size: 20px;
  }

  ///cards
  .main_popular_card_page {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    width: 100%;
  }
  .main_popular_card_page .img {
    border-radius: 16px;
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
  }

  ///cards
`;

export default WomenPage;
