import {
  Box,
  Typography,
  Container,
  Button,
  IconButton,
  Stack,
} from "@mui/material";

import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import paly_market from "../assets/img/play_market.png";
import app_store from "../assets/img/App_store.png";

function FooterPage() {
  const h1_size = {
    xs: "28px",
    sm: "32px",
    md: "26px",
    lg: "28px",
    xl: "28px",
  };
  const h2_size = {
    xs: "18px",
    sm: "22px",
    md: "16px",
    lg: "18px",
    xl: "18px",
  };
  const list_width = {
    xs: "100%",
    sm: "100%",
    md: "32%",
    lg: "23%",
    xl: "23%",
  };

  return (
    <FooterStyle>
      <footer>
        <Container>
          <Box className="main_list">
            <Box
              sx={{
                width: list_width,
                alignItems: {
                  xs: "center",
                  lg: "start",
                  xl: "start",
                },
              }}
              className="list_element"
            >
              <Typography className="h1_footer" sx={{ fontSize: h1_size }}>
                Need Help
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Contact Us
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Track Order
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Returns & Refunds
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                FAQ's
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Career
              </Typography>
            </Box>
            <Box
              sx={{
                width: list_width,
                alignItems: {
                  xs: "center",
                  lg: "start",
                  xl: "start",
                },
              }}
              className="list_element"
            >
              <Typography className="h1_footer" sx={{ fontSize: h1_size }}>
                Company
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                About Us
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                euphoria Blog
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                euphoriastan
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Collaboration
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Media
              </Typography>
            </Box>
            <Box
              sx={{
                width: list_width,
                alignItems: {
                  xs: "center",
                  lg: "start",
                  xl: "start",
                },
              }}
              className="list_element"
            >
              <Typography className="h1_footer" sx={{ fontSize: h1_size }}>
                More Info
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Term and Conditions
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Privacy Policy
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Shipping Policy
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Sitemap
              </Typography>
            </Box>
            <Box
              sx={{
                width: list_width,
                alignItems: {
                  xs: "center",
                  lg: "start",
                  xl: "start",
                },
              }}
              className="list_element"
            >
              <Typography className="h1_footer" sx={{ fontSize: h1_size }}>
                Location
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                shokB@gmail.com
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                Chorsu Market, Beruni 3
              </Typography>
              <Typography className="h2_footer" sx={{ fontSize: h2_size }}>
                next to PdP Academy
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", lg: "space-between" },
              gap: "20px",
              flexWrap: "wrap",
              padding: "0 20px",
              marginTop: "14px",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                order: { xs: "2", md: "1" },
              }}
            >
              <IconButton className="btn_contacts">
                <FacebookIcon />
              </IconButton>
              <IconButton className="btn_contacts">
                <InstagramIcon />
              </IconButton>
              <IconButton className="btn_contacts">
                <TwitterIcon />
              </IconButton>
              <IconButton className="btn_contacts">
                <LinkedInIcon />
              </IconButton>
            </Stack>
            <Box
              sx={{
                order: { xs: "1", md: "2" },
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontSize: "22px",
                    color: "white",
                    textAlign: { xs: "center", md: "start" },
                  }}
                >
                  Download The App
                </Typography>
              </div>
              <img src={paly_market} />
              <img src={app_store} />
            </Box>
          </Box>
          <Typography
            className="footer_end"
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px", xl: "22px" },
            }}
          >
            Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  footer {
    background: #3c4242;
    padding: 40px 0;
  }

  .btn_contacts {
    background-color: #f6f6f6;
    color: #2a2f2f;
    border-radius: 8px;
  }

  .btn_contacts:hover {
    background-color: #f6f6f6;
  }

  .main_list {
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 20px;
    flex-wrap: wrap;
  }
  .list_element {
    display: flex;
    flex-direction: column;
    color: #f6f6f6;
    gap: 12px;
    margin: 20px 0;
  }
  .h1_footer {
    font-weight: 700;
    margin-bottom: 10px;
  }
  .h2_footer {
    font-weight: 500;
  }

  .footer_end {
    color: #fff;
    font-weight: 700;
    text-align: center;
    margin-top: 40px;
  }
`;

export default FooterPage;
