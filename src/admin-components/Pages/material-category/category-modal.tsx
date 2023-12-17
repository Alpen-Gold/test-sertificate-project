// icons

import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

function FormModalCategory() {
  const [open, setOpen] = useState(false);
  const [itemForm, setItemForm] = useState({
    name: "",
    image: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const addNewCategory = () => {
    console.log(itemForm);
  };

  return (
    <>
      <button className="all-button-active" onClick={handleClickOpen}>
        Add Category
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ bgcolor: "#101827", color: "white" }}>
          Add new cateogry +
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#101827" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Cateogry Name..."
            type="email"
            fullWidth
            onChange={(e) =>
              setItemForm((old) => ({
                ...old,
                name: e.target.value,
              }))
            }
            variant="standard"
            sx={{
              borderBottom: "2px solid white",
              color: "white",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                color: "white",
              },
            }}
          />

          <div id="profile-upload">
            <Box className="hvr-profile-img">
              <input
                id="imag"
                type="file"
                name="logo"
                onChange={(e) => {
                  const file = e?.target?.files ? e?.target?.files[0] : null;
                  if (file) {
                    const reader = new FileReader();

                    reader.onloadend = () => {
                      setItemForm((old) => ({
                        ...old,
                        image: String(reader.result),
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="upload w180"
                title="Dimensions 180 X 180"
              />
              {itemForm.image && (
                <img
                  src={String(itemForm?.image)}
                  alt="Selected"
                  className="imgformproduct"
                />
              )}
            </Box>
          </div>
        </DialogContent>
        <DialogActions sx={{ bgcolor: "#101827" }}>
          <Button onClick={handleClose} sx={{ color: "white" }}>
            Cancel
          </Button>
          <Button onClick={addNewCategory} sx={{ color: "white" }}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormModalCategory;
