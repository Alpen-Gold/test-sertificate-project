import { Box, Container, Typography, Rating, Button } from "@mui/material";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

import img from "../../assets/img/popular_1.png";

//
const labels: { [index: string]: string } = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
//

function FullInfoProduct() {
  const [value, setValue] = useState<number | null>(3.5);
  const [hover, setHover] = useState(-1);
  return (
    <Topstyle className="body">
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "47.5%" }}>
            <img src={img} className="img" />
          </Box>
          <Box sx={{ width: "47.5%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: "7px",
                margin: "20px 0",
              }}
            >
              <NavLink to={"/home"}>
                <Typography sx={{ fontSize: "16px", color: "#807D7E" }}>
                  Home
                </Typography>
              </NavLink>
              <ChevronRightIcon sx={{ color: "#807D7E" }} />
              <NavLink to={"/women"}>
                <Typography sx={{ fontSize: "16px", color: "#807D7E" }}>
                  Women
                </Typography>
              </NavLink>
              <ChevronRightIcon sx={{ color: "#807D7E" }} />
              <Typography sx={{ fontSize: "16px" }}>Top</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "48px" }} className="h1">
                Raven Hoodie With <span>Black colored Design</span>
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(_event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(_event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>
            </Box>
            <Box>
              <Typography className="size">
                Select Size <span>Size Guide</span>
                <Button sx={{ p: 0, color: "#807D7E" }}>
                  <EastIcon />
                </Button>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Topstyle>
  );
}

const Topstyle = styled.div`
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .size {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .h1 {
    display: flex;
    flex-direction: column;
    color: #3c4242;
    font-weight: 600;
    line-height: 130%;
  }
`;

export default FullInfoProduct;
