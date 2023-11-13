import { Box, Container, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import dresImg from "../assets/img/Rectangle 734.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FooterPage from "./Footer";

function CartCard() {
  return (
    <>
      <Box
        sx={{
          mt: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          flex: "wrap",
          padding: "30px 0",
          borderBottom: "1px solid grey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            gap: "20px",
            maxWidth: "280px",
          }}
        >
          <img
            width={105}
            height={120}
            src={dresImg}
            alt="none foto"
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />

          <Box>
            <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>
              Blue Flower Print Crop Top
            </Typography>

            <Typography sx={{ color: "#807D7E", fontSize: 14 }}>
              Color : Yellow
            </Typography>

            <Typography sx={{ color: "#807D7E", fontSize: 14 }}>
              Size : M
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flex: "1", maxWidth: "280px" }}>
          <Typography sx={{ fontWeight: "700" }}>$29.00</Typography>
        </Box>

        <Box
          sx={{
            flex: "1",

            width: "280px",
          }}
        >
          <Box
            sx={{
              width: "100px",
              minHeight: "36px",
              bgcolor: "#F6F6F6",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <RemoveIcon
                sx={{
                  fontSize: "15px",
                }}
              />
            </button>

            <Typography sx={{ fontWeight: "700", p: 0, m: 0 }}>3</Typography>

            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <AddIcon
                sx={{
                  fontSize: "15px",
                }}
              />
            </button>
          </Box>
        </Box>

        <Box sx={{ flex: "1", width: "280px", textAlign: "center" }}>
          <Typography sx={{ fontWeight: "700", color: "grey" }}>
            $5.00
          </Typography>
        </Box>

        <Box sx={{ flex: "1", width: "280px", textAlign: "center" }}>
          <Typography sx={{ fontWeight: "700" }}>$29.00</Typography>
        </Box>

        <Box sx={{ flex: "1", textAlign: "end", width: "280px" }}>
          <Typography sx={{ fontWeight: "700" }}>
            <DeleteOutlineIcon sx={{ color: "#8A33FD" }} />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CartCard;
