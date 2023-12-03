// icons
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ProductCard from "../ProductCard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styled from "@emotion/styled";
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

interface ItemFormType {
  name: string | null;
  color: string;
  image: string | null | object | undefined;
  size: string | null;
  category: string | null;
  count: number | null | string;
  price: number | null | string;
}
function ProductPage() {
  const [activeLineCube, setActiveLineCube] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectOpenColor, setSelectOpenColor] = useState(false);
  const [openCategorySelect, setOpenCategorySelect] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [itemForm, setItemForm] = useState<ItemFormType>({
    name: null,
    color: "White",
    image: null,
    size: null,
    category: null,
    count: null,
    price: null,
  });
  const colors = [
    "Red",
    "Black",
    "Blue",
    "Orange",
    "Yellow",
    "Green",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Silver",
    "Gold",
    "Cyan",
    "Magenta",
    "Indigo",
    "Turquoise",
    "Lime",
    "Maroon",
    "Teal",
    "Olive",
  ];
  const cateogries = ["Paypoqlar", "Qastumlar", "Shorts"];

  const addNewProductBtn = async () => {
    console.log(itemForm);

    try {
      const respons = await axios.post("url", itemForm);

      console.log(respons);

      return respons;
    } catch (error) {
      alert(error);
    }
  };

  const handleToggleClick = () => {
    setSelectOpenColor(!selectOpenColor);
  };

  const handleChangeColor = (event: string) => {
    setItemForm((e) => ({
      ...e,
      color: event,
    }));

    setSelectOpenColor(!selectOpenColor);
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
    <div className="app-content">
      <ProductPageWrapper>
        <div className="app-content-header">
          <h1 className="app-content-headerText">Products</h1>
          <button className="mode-switch" title="Switch Theme">
            <DarkModeOutlinedIcon />
          </button>
          <button
            className="app-content-headerButton"
            onClick={handleClickOpen}
          >
            Add Product
          </button>
        </div>
        <div className="app-content-actions">
          <input className="search-bar" placeholder="Search..." type="text" />
          <div className="app-content-actions-wrapper">
            <div className="filter-button-wrapper">
              <button className="action-button filter jsFilter">
                <span>Filter</span>

                <FilterAltOutlinedIcon />
              </button>
              <div className="filter-menu">
                <label>Category</label>
                <select>
                  <option>All Categories</option>
                  <option>Furniture</option> <option>Decoration</option>
                  <option>Kitchen</option>
                  <option>Bathroom</option>
                </select>
                <label>Status</label>
                <select>
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Disabled</option>
                </select>
                <div className="filter-menu-buttons">
                  <button className="filter-button reset">Reset</button>
                  <button className="filter-button apply">Apply</button>
                </div>
              </div>
            </div>
            <button
              className="action-button list "
              onClick={() => setActiveLineCube(true)}
              title="List View"
            >
              <DensityMediumOutlinedIcon />
            </button>

            <button
              className="action-button grid"
              onClick={() => setActiveLineCube(false)}
              title="Grid View"
            >
              <WindowOutlinedIcon />
            </button>
          </div>
        </div>
        <div
          className={
            activeLineCube
              ? "products-area-wrapper tableView"
              : "products-area-wrapper gridView"
          }
        >
          <div className="products-header" id="salom">
            <div className="product-cell image">Items</div>
            <div className="product-cell category">Category</div>
            <div className="product-cell status-cell">Status</div>
            <div className="product-cell sales">Sales</div>
            <div className="product-cell stock">Stock</div>
            <div className="product-cell price">Price</div>
          </div>

          {/* Product Page */}
          <ProductCard />
          {/* Product Page end */}

          {/* product status active page  */}
          <div className="products-row">
            <button className="cell-more-button">
              <MoreVertOutlinedIcon />
            </button>
            <div className="product-cell image">
              <img
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                alt="product"
              />
              <span>Boheme</span>
            </div>
            <div className="product-cell category">
              <span className="cell-label">Category:</span>Furniture
            </div>
            <div className="product-cell status-cell">
              <span className="cell-label">Status:</span>
              <span className="status active">Active</span>
            </div>
            <div className="product-cell sales">
              <span className="cell-label">Sales:</span>32
            </div>
            <div className="product-cell stock">
              <span className="cell-label">Stock:</span>40
            </div>
            <div className="product-cell price">
              <span className="cell-label">Price:</span>$350
            </div>
          </div>
          {/* product status active page end */}
        </div>

        {/* Modal Add New Product */}

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

            <Box className={`custom-select ${selectOpenColor ? "open" : ""}`}>
              <div className="btn-toggle" onClick={handleToggleClick}>
                <input type="button" value={itemForm.color || "Let's drop"} />
              </div>
              <ul className={`drop-items ${selectOpenColor ? "active" : ""}`}>
                {colors.map((color) => (
                  <li
                    key={color}
                    className="item"
                    onClick={() => handleChangeColor(color)}
                  >
                    {color}
                  </li>
                ))}
              </ul>
            </Box>

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
                  count: e.target.value,
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
                  price: e.target.value,
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
              placeholder="Size..."
              type="number"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setItemForm((old) => ({
                  ...old,
                  size: e.target.value,
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
            <Button onClick={handleClose} sx={{ color: "white" }}>
              Cancel
            </Button>
            <Button onClick={addNewProductBtn} sx={{ color: "white" }}>
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </ProductPageWrapper>
    </div>
  );
}

const ProductPageWrapper = styled.div`
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    color: white !important;
  }
`;
export default ProductPage;
