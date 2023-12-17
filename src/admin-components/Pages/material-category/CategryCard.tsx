// icons
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading } from "../../../store/slices/apiSlice";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  gender: string;
  __v: number;
  id: string;
}

interface UserCardProps {
  item: Product;
  deleteCategory: (userId: string) => void;
  repeatData: () => void;
}

function CateogoryCard({ item, deleteCategory, repeatData }: UserCardProps) {
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemGender, setItemGender] = useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setItemName(item.name);
    setItemGender(item.gender);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editCategory = async () => {
    dispatch(startLoading(true));

    try {
      const response = await axios.put(
        `http://localhost:3000/shop/categories/${item._id}`,
        {
          name: itemName,
          gender: itemGender,
        }
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
    <div className="products-row">
      <div className="product-cell image">
        <img
          src={
            "https://i0.wp.com/textilelearner.net/wp-content/uploads/2023/01/Market-Research-in-Fashion-Industry.jpg?fit=664%2C400&ssl=1"
          }
          alt="product"
        />
        {/* <span>Demo name</span> */}
      </div>
      <div className="product-cell category">
        <span className="cell-label">Category:</span> {item.name}
      </div>
      <div className="product-cell status-cell">
        <span className="cell-label">Gender:</span>
        <span className="status active"> {item.gender}</span>
      </div>

      <div className="product-cell price">
        <span className="cell-label">Active:</span>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => handleClickOpen()}
            className="all-button-active"
            style={{
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ConstructionIcon />
          </button>

          <button
            onClick={() => deleteCategory(String(item._id))}
            className="all-button-active"
            style={{
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DeleteIcon />
          </button>
        </Box>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ bgcolor: "#101827", color: "white" }}>
          Add new cateogry +
        </DialogTitle>
        <DialogContent sx={{ bgcolor: "#101827" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Category New Name..."
            type="text"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
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
            placeholder="Gender New Name..."
            type="text"
            fullWidth
            value={itemGender}
            onChange={(e) => setItemGender(e.target.value)}
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
          <Button onClick={() => setOpen(false)} sx={{ color: "white" }}>
            Cancel
          </Button>
          <Button onClick={editCategory} sx={{ color: "white" }}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CateogoryCard;
