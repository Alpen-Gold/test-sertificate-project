import { Box, Checkbox, Typography, Button } from "@mui/material";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { startLoading } from "../../../store/slices/apiSlice";
// import { NavLink } from "react-router-dom";
import Loading from "../../animatin-elements/Loding";
import axios from "axios";

////
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
////

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const card_info_size = {
  xs: "10px",
  sm: "14px",
  md: "14px",
  lg: "14px",
  xl: "16px",
};

const card_bottom_info_size = {
  xs: "10px",
  sm: "14px",
  md: "14px",
  lg: "12px",
  xl: "14px",
};

const card_price_size = {
  xs: "10px",
  sm: "14px",
  md: "14px",
  lg: "14px",
  xl: "16px",
};
const start_end_size = {
  xs: "16px",
  sm: "20px",
  md: "24px",
  lg: "22px",
  xl: "22px",
};

const height_card = {
  xs: "360px",
  sm: "460px",
  md: "400px",
  lg: "400px",
  xl: "445px",
};

function ClothingPage() {
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

        console.log(response);
      } catch (error) {
        alert(error);
      } finally {
        dispatch(startLoading(false));
      }
    };
    fetchProduct();
  }, []);

  return (
    <ClothingStyle>
      <Box sx={{ padding: { lg: "0 0 0 42px", xl: "0 0 0 42px" }, flex: 1 }}>
        <Box className="Women_start_text">
          <Typography className="start" sx={{ fontSize: start_end_size }}>
            Man’s Clothing
          </Typography>
          <Typography
            className="end"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: start_end_size,
            }}
          >
            <span>New</span> Recommended
          </Typography>
        </Box>
        <Box className="main_popular_card_page">
          {loading ? (
            <Loading />
          ) : (
            dataProducts
              .filter(
                (item: { category: { gender: string } }) =>
                  item.category.gender === "male"
              )
              .map(
                (
                  man: {
                    image: string;
                    name: string;
                    brand: string;
                    price: number;
                  },
                  index
                ) => (
                  <Box
                    sx={{
                      width: {
                        xs: "48%",
                        sm: "48%",
                        md: "32%",
                        lg: "32%",
                        xl: "32%",
                      },
                      marginBottom: "28px",
                      padding: "0 4px",
                    }}
                    key={index}
                  >
                    <Box position={"relative"} sx={{ height: height_card }}>
                      <img src={man.image} className="img" />
                      <Checkbox
                        {...label}
                        icon={<FavoriteBorder sx={{ color: "red" }} />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                        sx={{
                          position: "absolute",
                          top: "6%",
                          fontSize: "1px",
                          right: "5%",
                          padding: "6px",
                          backgroundColor: "#fff",
                        }}
                      />
                    </Box>
                    <Box className="popular_card_text">
                      <div>
                        <Typography
                          sx={{
                            color: "#2A2F2F",
                            fontWeight: "600",
                            fontSize: card_info_size,
                          }}
                        >
                          {man.name}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#797979",
                            fontSize: card_bottom_info_size,
                            fontWeight: "500",
                          }}
                        >
                          {man.brand} Brand
                        </Typography>
                      </div>
                      <Button
                        className="btn_price"
                        sx={{
                          fontSize: card_price_size,
                        }}
                      >
                        ${man.price}.00
                      </Button>
                    </Box>
                  </Box>
                )
              )
          )}
        </Box>
      </Box>
    </ClothingStyle>
  );
}

const ClothingStyle = styled.div`
  /* Women_start_text */
  .Women_start_text {
    margin: 48px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .start {
    color: #3f4646;
    font-weight: 600;
  }
  /* .img {
    width: 100%;
    height: auto;
  } */
  .end {
    display: flex;
    align-items: center;
    gap: 28px;
    color: #3f4646;
    font-weight: 600;
  }
  .end span {
    color: #8a33fd;
  }
  /* Women_start_text */

  ///cards
  .main_popular_card_page {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    width: 100%;
  }
  .main_popular_card_page .img {
    border-radius: 16px;
  }

  .popular_card_text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ///cards
`;

export default ClothingPage;
