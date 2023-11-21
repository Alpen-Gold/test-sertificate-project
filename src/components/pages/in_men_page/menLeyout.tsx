import {
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  ListItemButton,
} from "@mui/material";

import styled from "styled-components";
import { useState } from "react";

//icons

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TuneIcon from "@mui/icons-material/Tune";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//icons

function valuetext(value: number) {
  return `${value}°C`;
}

const colors = [
  {
    col: "#8434E1",
    name: "Purple",
  },
  {
    col: "#252525",
    name: "Black",
  },
  {
    col: "#F35528",
    name: "Red",
  },
  {
    col: "#F16F2B",
    name: "Orange",
  },
  {
    col: "#345EFF",
    name: "Navy",
  },
  {
    col: "#FFF",
    name: "White",
  },
  {
    col: "#D67E3B",
    name: "Broom",
  },
  {
    col: "#48BC4E",
    name: "Green",
  },
  {
    col: "#FDC761",
    name: "Yellow",
  },
  {
    col: "#E4E5E8",
    name: "Grey",
  },
  {
    col: "#E08D9D",
    name: "Pink",
  },
  {
    col: "#3FDEFF",
    name: "Blue",
  },
];

const btnSize = ["XXL", "XL", "XS", "S", "M", "L", "XXL", "3XL", "4XL"];
const clothes = [
  "Tops",
  "Printed T-shirts",
  "Plain T-shirts",
  "Kurti",
  "Boxers",
  "Full sleeve T-shirts",
  "Joggers",
  "Payjamas",
  "Jeans",
];

const dressStyle = [
  "Classic",
  "Casual",
  "Business",
  "Sport",
  "Elegant",
  "Formal (evening)",
];

function MenLeyout() {
  const [value, setValue] = useState<number[]>([30, 70]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    console.log(event);
  };

  return (
    <MenStyle>
      <Box
        sx={{
          width: "100%",
          maxWidth: 300,
          border: "2px solid #BEBCBD77",
          borderTop: "0",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 26px",
            color: "#807D7E",
          }}
        >
          <Typography sx={{ fontSize: "22px" }}>Filter</Typography>
          <Button sx={{ minWidth: 0, padding: 0, color: "#807D7E" }}>
            <TuneIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        </Box>
        <Divider sx={{ borderBottomWidth: "2px" }} />
        <List
          sx={{ margin: "16px 0" }}
          component="nav"
          aria-label="mailbox folders"
        >
          {clothes.map((cloth) => (
            <ListItem>
              <ListItemText primary={cloth} />
              <Button>
                <ChevronRightIcon />
              </Button>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderBottomWidth: "2px" }} />
        <Accordion
          defaultExpanded={true}
          sx={{
            border: "0",
            boxShadow: "none",
            position: "static",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: "0 26px" }}
          >
            <Typography className="draw_menu">Price</Typography>
          </AccordionSummary>
          <Divider sx={{ borderBottomWidth: "2px" }} />
          <AccordionDetails sx={{ padding: "0 26px" }}>
            <Box sx={{ width: "100%", padding: "32px 0 16px" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="outlined"
                  className="btn_price_control"
                  sx={{ padding: 0, borderRadius: "8px", minWidth: "80px" }}
                >
                  $70
                </Button>
                <Button
                  variant="outlined"
                  className="btn_price_control"
                  sx={{
                    padding: 0,
                    borderRadius: "8px",
                    minWidth: "80px",
                  }}
                >
                  $160
                </Button>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ borderBottomWidth: "2px" }} />
        <Accordion
          defaultExpanded={true}
          sx={{
            border: "0",
            boxShadow: "none",
            position: "static",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: "0 26px" }}
          >
            <Typography className="draw_menu">Colors</Typography>
          </AccordionSummary>
          <Divider sx={{ borderBottomWidth: "2px" }} />
          <AccordionDetails sx={{ padding: "0 26px" }}>
            <Box
              sx={{
                width: "100%",
                padding: "16px 0 32px 0",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {colors.map((color) => (
                <Box className="main_box">
                  <Box className="in_main_box">
                    <ListItemButton
                      sx={{
                        backgroundColor: color.col,
                        "&:hover": {
                          backgroundColor: color.col,
                        },
                      }}
                      className="color_box"
                    ></ListItemButton>
                    <Typography>{color.name}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ borderBottomWidth: "2px" }} />
        <Accordion
          defaultExpanded={true}
          sx={{
            border: "0",
            boxShadow: "none",
            position: "static",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: "0 26px" }}
          >
            <Typography className="draw_menu">Size</Typography>
          </AccordionSummary>
          <Divider sx={{ borderBottomWidth: "2px" }} />
          <AccordionDetails sx={{ padding: "0 26px" }}>
            <Box sx={{ width: "100%", padding: "16px 0 32px 0" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                {btnSize.map((size) => (
                  <Button variant="outlined" className="btn_size">
                    {size}
                  </Button>
                ))}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Divider sx={{ borderBottomWidth: "2px" }} />
        <Accordion
          defaultExpanded={true}
          sx={{
            border: "0",
            boxShadow: "none",
            position: "static",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ padding: "0 26px" }}
          >
            <Typography className="draw_menu">Dress Style</Typography>
          </AccordionSummary>
          <Divider sx={{ borderBottomWidth: "2px" }} />
          <AccordionDetails sx={{ padding: 0 }}>
            <List
              sx={{ margin: "16px 0" }}
              component="nav"
              aria-label="mailbox folders"
            >
              {dressStyle.map((dress) => (
                <ListItem>
                  <ListItemText primary={dress} />
                  <Button>
                    <ChevronRightIcon />
                  </Button>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </MenStyle>
  );
}

const MenStyle = styled.div`
  .btn_price_control {
    color: #3c4242;
    border: 2px solid #bebcbd;
    font-size: 16px;
    padding: 2px 32px;
    margin-top: 14px;
  }

  .btn_price_control:hover {
    border: 2px solid #bebcbd;
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

export default MenLeyout;
