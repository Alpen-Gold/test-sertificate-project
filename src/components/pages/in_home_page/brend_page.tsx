import { Box, Typography, Container } from "@mui/material";
import styled from "styled-components";

// brend_img

import nike from "../../../assets/img/nike.png";
import h_and_m from "../../../assets/img/Hennes_and_Mauritz.png";
import levis from "../../../assets/img/levis.png";
import polo from "../../../assets/img/polo.png";
import puma from "../../../assets/img/puma.png";

// brend_img

function BrendPage() {
  return (
    <BrendStyleCss>
      <Container>
        <Box className="brend_main">
          <Box className="brend_text">
            <Typography
              sx={{ fontSize: { xs: "32px", sm: "42px", md: "50px" } }}
              className="h1"
            >
              Top Brands Deal
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                margin: "24px 0 62px",
              }}
              className="h2"
            >
              Up To <span>60%</span> off on brands
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <img src={nike} />
            <img src={h_and_m} />
            <img src={levis} />
            <img src={polo} />
            <img src={puma} />
          </Box>
        </Box>
      </Container>
    </BrendStyleCss>
  );
}

const BrendStyleCss = styled.div`
  .brend_main {
    background-color: #3c4242;
    border-radius: 12px;
    padding: 48px 96px;
    margin-top: 70px;
  }
  .brend_text .h1 {
    color: #fff;
    font-weight: 800;
    text-align: center;
  }
  .brend_text .h2 {
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
  .brend_text .h2 span {
    color: #fbd103;
    font-weight: 700;
  }
`;

export default BrendPage;
