// icons

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { startLoading } from "../../../store/slices/apiSlice";
import axios from "axios";

interface UserCardProps {
  repeatData: () => void;
}

function FormModalCategory({ repeatData }: UserCardProps) {
  const [open, setOpen] = useState(false);
  const [itemForm, setItemForm] = useState({
    name: "",
    gender: "",
  });

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const addNewCategory = async () => {
    dispatch(startLoading(true));

    try {
      const response = await axios.post(
        "http://localhost:3000/shop/categories",
        itemForm
      );

      repeatData();
      setOpen(false);
      return response;
    } catch (error) {
      alert(error);
    } finally {
      dispatch(startLoading(false));
    }
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

          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Gender Name..."
            type="email"
            fullWidth
            onChange={(e) =>
              setItemForm((old) => ({
                ...old,
                gender: e.target.value,
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
