import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { startLoading } from "../../store/slices/apiSlice";
import axios from "axios";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import Loading from "../../components/animatin-elements/Loding";
import UserCard from "./material-user/UserCard";

function UsersPage() {
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
        const response = await axios.get("http://localhost:3000/shop/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userShopToken")}`,
          },
        });

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
      const response = await axios.get("http://localhost:3000/shop/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userShopToken")}`,
        },
      });

      setDataProduct(response.data);

      console.log(response, "salom");
    } catch (error) {
      alert(error);
    } finally {
      dispatch(startLoading(false));
    }
  };

  const deleteUser = async (id: string) => {
    dispatch(startLoading(true));

    try {
      await axios.delete(`http://localhost:3000/shop/users/${id}`);

      repeatData();
    } catch (error) {
      alert(error);
    } finally {
      dispatch(startLoading(false));
    }
  };

  return (
    <div className="app-content">
      <ProductPageWrapper>
        <div className="app-content-header">
          <h1 className="app-content-headerText">Users</h1>
        </div>
        <div className="app-content-actions">
          <input className="search-bar" placeholder="Search..." type="text" />
          <div className="app-content-actions-wrapper">
            <div className="filter-button-wrapper">
              <div className="filter-menu">
                <label>Name</label>
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
            <div className="product-cell image">Profile</div>
            <div className="product-cell category">Name</div>
            <div className="product-cell status-cell">Status</div>
            <div className="product-cell sales">Phone</div>
            <div className="product-cell stock">Email</div>
            <div className="product-cell price">Active</div>
          </div>

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
            <>
              {/* Product Page */}
              {dataProducts.map((item, index: number) => (
                <UserCard item={item} key={index} deleteUser={deleteUser} />
              ))}
              {/* Product Page end */}
            </>
          )}
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
export default UsersPage;
