import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/Logo.png";

// import styled from "styled-components";

type MenuType = {
  pages: string[];
};

// const MenuStyle = styled.div`
//   .active_menu_btn {
//     color: #000 !important;
//   }
// `;

export default function MenuLayout({ pages }: MenuType) {
  const [state, setState] = React.useState({
    left: false,
    activeItem: null,
  });

  const toggleDrawer =
    (anchor: "left", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // const handleItemClick = (index: number) => {
  //   setState({ ...state, activeItem: index, left: false });
  // };

  const list = (anchor: "left") => (
    // <MenuStyle>
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{ textAlign: "center" }}>
          <img src={logo} alt="" />
        </div>

        {pages.map((text: string, index: number) => (
          <NavLink to={text.toLowerCase()} key={index}>
            {({ isActive }) => (
              <ListItem
                key={text}
                disablePadding
                className={isActive ? "active_menu_btn " : ""}
                style={{
                  color:
                    state.activeItem === index ? "blue !important" : "#807D7E",
                }}
              >
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
    </Box>
    // </MenuStyle>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
