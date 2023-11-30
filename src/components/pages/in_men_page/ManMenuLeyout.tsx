import * as React from "react";
import Button from "@mui/material/Button";
import MenLeyout from "./menLeyout";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import logo from "../../../assets/img/Logo.png";
import TuneIcon from "@mui/icons-material/Tune";

export default function ManMenuLeyout() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className="fixed_filter">
        <TuneIcon sx={{ transform: "rotate(90deg)" }} />
      </button>

      <Dialog
        open={open}
        sx={{ transition: "1s" }}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logo} alt="None" />
          </Box>
        </DialogTitle>
        <DialogContent>
          <MenLeyout />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
