// icons

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
} from "@mui/material";
import SelectColorProduct from "./select-color";
import SelectSizeProduct from "./select-size";

interface ItemFormType {
  name: string | null;
  color: object[];
  image: string | null | object | undefined;
  size: string | null;
  category: string | null;
  count: number | null | string;
  price: number | null | string;
  rating: number | null | string;
  isFeatured: boolean | null;
}
function FormModalProduct() {
  const [open, setOpen] = useState(false);
  const [selectOpenColor, setSelectOpenColor] = useState(false);
  const [openCategorySelect, setOpenCategorySelect] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [itemForm, setItemForm] = useState<ItemFormType>({
    name: null,
    color: [],
    image: null,
    size: null,
    category: null,
    count: null,
    price: null,
    rating: null,
    isFeatured: null,
  });

  const cateogries = ["Paypoqlar", "Shirts", "Shorts"];

  const addNewProductBtn = async () => {
    console.log(itemForm);

    try {
      const response = await axios.post("http://localhost:3000/shop/products", {
        name: "test",
        color: [
          {
            name: "black",
          },
          {
            name: "white",
          },
          {
            name: "grey",
          },
          {
            name: "blue",
          },
        ],
        size: [
          {
            name: "XS",
          },
          {
            name: "S",
          },
          {
            name: "M",
          },
          {
            name: "L",
          },
        ],
        image: `http://localhost:3000/public/uploads/${String(
          itemForm?.image
        )}`,
        brand: "Helen",
        price: 85,
        category: {
          name: "Shirts",
          gender: "male",
        },
        count: 85,
        isFeatured: "true",
      });

      return response;
    } catch (error) {
      alert(error);
    }

    setOpen(false);
  };

  const handleChangeColor = (event: string | object) => {
    console.log(event);

    setItemForm((e) => ({
      ...e,
      color: [
        event.map((item: string) => {
          return { name: item };
        }),
      ],
    }));

    setSelectOpenColor(!selectOpenColor);
    console.log(itemForm, "salom");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
    category: string
  ) => {
    console.log(event);

    setItemForm((e) => ({
      ...e,
      category: category,
    }));
    setSelectedIndex(index);
    setOpenCategorySelect(false);
  };

  const handleClose = () => {
    setOpenCategorySelect(false);
  };

  const handleToggle = () => {
    setOpenCategorySelect((prevOpen) => !prevOpen);
  };

  return (
    <>
      <button className="all-button-active" onClick={handleClickOpen}>
        Add Product
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
            placeholder="Product Name..."
            type="email"
            fullWidth
            onChange={(e) => {
              setItemForm((old) => ({
                ...old,
                name: e.target.value,
              }));
            }}
            variant="standard"
            sx={{
              borderBottom: "2px solid white",
              color: "white",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                color: "white",
              },
            }}
          />

          <SelectColorProduct handleChangeColor={handleChangeColor} />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder="Count..."
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setItemForm((old: ItemFormType) => ({
                ...old,
                count: Number(e.target.value),
              }));
            }}
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
            placeholder="Rating..."
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setItemForm((old: ItemFormType) => ({
                ...old,
                rating: Number(e.target.value),
              }));
            }}
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
            placeholder="Featured..."
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setItemForm((old: ItemFormType) => ({
                ...old,
                isFeatured: Boolean(e.target.value),
              }));
            }}
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
            placeholder="Price..."
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setItemForm((old) => ({
                ...old,
                price: Number(e.target.value),
              }));
            }}
            sx={{
              borderBottom: "2px solid white",
              color: "white",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input": {
                color: "white",
              },
            }}
          />

          <SelectSizeProduct setItemForm={setItemForm} />

          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="split button"
            fullWidth
            sx={{
              marginY: "15px",
            }}
          >
            <Button>{cateogries[selectedIndex]}</Button>
            <Button
              sx={{ flex: 1 }}
              size="small"
              aria-controls={
                openCategorySelect ? "split-button-menu" : undefined
              }
              aria-expanded={openCategorySelect ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={openCategorySelect}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {cateogries.map((option, index) => (
                        <MenuItem
                          key={option}
                          // disabled={index === 2}
                          selected={index === selectedIndex}
                          onClick={(event) =>
                            handleMenuItemClick(event, index, option)
                          }
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>

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
                      console.log(reader.result);
                      setItemForm((old) => ({
                        ...old,
                        image: reader.result,
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
          <Button onClick={() => setOpen(false)} sx={{ color: "white" }}>
            Cancel
          </Button>
          <Button onClick={addNewProductBtn} sx={{ color: "white" }}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormModalProduct;
