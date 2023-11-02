// icons
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ProductCard from "../ProductCard";
import { useState } from "react";

function ProductPage() {
  const [activeLineCube, setActiveLineCube] = useState(true);

  return (
    <div className="app-content">
      <div className="app-content-header">
        <h1 className="app-content-headerText">Products</h1>
        <button className="mode-switch" title="Switch Theme">
          <DarkModeOutlinedIcon />
        </button>
        <button className="app-content-headerButton">Add Product</button>
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
        <div className="products-header">
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
    </div>
  );
}

export default ProductPage;
