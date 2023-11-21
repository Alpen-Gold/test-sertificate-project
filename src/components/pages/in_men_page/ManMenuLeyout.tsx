import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import MenLeyout from "./menLeyout";
// import logo from "../../../assets/img/Logo.pn";

export default function ManMenuLeyout() {
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

  const list = (anchor: "left") => (
    <>
      <Box
        sx={{ width: 300 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <div style={{ textAlign: "center" }}>
            {/* <img src={logo} alt="" /> */}
          </div>

          <MenLeyout />
        </List>
      </Box>
    </>
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
          onClose={toggleDrawer("left", true)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
