// import styled from "@emotion/styled";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useSize } from "ahooks";
import { useEffect } from "react";

import logo from "../assets/img/Logo.png";
import { NavLink, Outlet } from "react-router-dom";
import MenuLeyout from "./MenuLeyout";

const pages = ["Home", "Men", "Women", "Combos", "Joggers"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

//search
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color: "#9b9ba2",
  backgroundColor: "#F6F6F6",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
//seacrh

function Leyout() {
  const ref = React.useRef(null);
  const size = useSize(ref);

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [ekranSize, setEkranSize] = React.useState(size?.width);

  useEffect(() => {
    setEkranSize(size?.width);
  }, [size?.width]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  console.log(ekranSize, "salom");

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [activeButton, setActiveButton] = React.useState(0);

  return (
    <div ref={ref}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 4px 4px 0 #00000011",
          zIndex: 100,
        }}
      >
        <Container maxWidth="xl" style={{ padding: "0 60px" }}>
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              {/* menu left element */}
              {ekranSize !== undefined && ekranSize < 900 ? (
                <MenuLeyout pages={pages} />
              ) : null}
              {/* menu left element end */}

              <img src={logo} alt="none" />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                ml: 5,
              }}
            >
              {pages.map((page: string, index) => (
                <NavLink to={page.toLowerCase()} key={page}>
                  <Button
                    className={index === activeButton ? "active_menu_btn " : ""}
                    sx={{
                      my: 2,
                      px: 2,
                      color: "#807d7e",
                      display: "block",
                      textTransform: "capitalize",
                      fontWeight: "bold",
                    }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Search sx={{ mr: 6, display: { xs: "none", md: "block" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ flexGrow: 0 }}>
              <Box sx={{ display: { md: "flex" } }}>
                <Tooltip title="Open settings">
                  <button
                    onClick={handleOpenUserMenu}
                    style={{
                      padding: "6px 0 4px",
                      borderRadius: "6px",
                      minWidth: "42px",
                      color: "#807D7E",
                      backgroundColor: "#F6F6F6",
                      border: "none",
                      outline: "none",
                      marginRight: "10px",
                    }}
                  >
                    <Person2OutlinedIcon />
                  </button>
                </Tooltip>
                <button
                  style={{
                    padding: "6px 0 4px",
                    borderRadius: "6px",
                    minWidth: "42px",
                    color: "#807D7E",
                    backgroundColor: "#F6F6F6",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <LocalGroceryStoreOutlinedIcon />
                </button>
              </Box>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Leyout;
