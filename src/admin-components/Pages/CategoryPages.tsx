// icons
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import FormModalCategory from "./material-category/category-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { startLoading } from "../../store/slices/apiSlice";
import axios from "axios";
import { Box } from "@mui/material";
import Loading from "../../components/animatin-elements/Loding";
import CateogoryCard from "./material-category/CategryCard";

function CategoryPage() {
  const [activeLineCube, setActiveLineCube] = useState(true);
  const [dataCategory, setDataCategory] = useState([]);
  const [itemSearch, setItemSearch] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(
    (state: RootState) => state.apiSliceProducts.loading
  );

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(startLoading(true));

      try {
        const response = await axios.get(
          "http://localhost:3000/shop/categories",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("userShopToken")}`,
            },
          }
        );

        setDataCategory(response.data);

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
      const response = await axios.get(
        "http://localhost:3000/shop/categories",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userShopToken")}`,
          },
        }
      );

      setDataCategory(response.data);
    } catch (error) {
      alert(error);
    } finally {
      dispatch(startLoading(false));
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/shop/categories/${id}`);

      setItemSearch("");
      repeatData();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <CateogryPageWrapper className="app-content">
      <div>
        <div className="app-content-header">
          <h1 className="app-content-headerText">Category</h1>

          <FormModalCategory repeatData={repeatData} />
        </div>
        <div className="app-content-actions">
          <input
            className="search-bar"
            placeholder="Search..."
            type="text"
            value={itemSearch}
            onChange={(e) => setItemSearch(e.target.value)}
          />
          <div className="app-content-actions-wrapper">
            <div className="filter-button-wrapper">
              <div className="filter-menu">
                <label>Category</label>
                <select>
                  <option>All Categories</option>
                  <option>Furniture</option> <option>Decoration</option>
                  <option>Kitchen</option>
                  <option>Bathroom</option>
                </select>
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
            <div className="product-cell category">Name</div>
            <div className="product-cell sales">Gender</div>
            <div className="product-cell stock">Stock</div>
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
            dataCategory
              .filter((oldItem: { name: string }) =>
                oldItem.name.toLowerCase().includes(itemSearch.toLowerCase())
              )
              .map((item, index: number) => (
                <CateogoryCard
                  repeatData={repeatData}
                  item={item}
                  key={index}
                  deleteCategory={deleteCategory}
                />
              ))
          )}
          {/* Product Page end */}
        </div>
      </div>
    </CateogryPageWrapper>
  );
}

export default CategoryPage;

const CateogryPageWrapper = styled.div`
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    color: white !important;
  }
`;
