// icons
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import ProductCard from "./material-product/ProductCard";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import FormModalProduct from "./material-product/product-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { startLoading } from "../../store/slices/apiSlice";
import axios from "axios";
import Loading from "../../components/animatin-elements/Loding";
import { Box } from "@mui/material";

function ProductPage() {
  const [activeLineCube, setActiveLineCube] = useState(true);
  const [dataProducts, setDataProduct] = useState([]);
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => state.apiSliceProducts.loading
  );

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(startLoading(true));

      try {
        const response = await axios.get(
          "http://localhost:3000/shop/products",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userShopToken")}`,
            },
          }
        );

        setDataProduct(response.data);

        console.log(response, "salom");
      } catch (error) {
        alert(error);
      } finally {
        dispatch(startLoading(false));
      }
    };

    fetchProduct();
  }, []);

  const repeatData = async () => {
    dispatch(startLoading(true));

    try {
      const response = await axios.get("http://localhost:3000/shop/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userShopToken")}`,
        },
      });

      setDataProduct(response.data);
    } catch (error) {
      alert(error);
    } finally {
      dispatch(startLoading(false));
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/shop/products/${id}`);

      repeatData();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="app-content">
      <ProductPageWrapper>
        <div className="app-content-header">
          <h1 className="app-content-headerText">Products</h1>

          <FormModalProduct />
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
            <div className="product-cell image">Foto/Views</div>
            <div className="product-cell category">Category</div>
            <div className="product-cell status-cell">Status</div>
            <div className="product-cell sales">Sales</div>
            <div className="product-cell stock">Stock</div>
            <div className="product-cell price">Price</div>
            <div className="product-cell price">Active</div>
          </div>

          {/* Product Page */}

          {loading ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0",
              }}
            >
              <Loading />
            </Box>
          ) : (
            dataProducts.map((item, index: number) => (
              <ProductCard
                item={item}
                key={index}
                deleteProduct={deleteProduct}
              />
            ))
          )}

          {/* Product Page end */}
        </div>

        {/* Modal Add New Product */}
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
