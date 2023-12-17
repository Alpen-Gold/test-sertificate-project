// icons
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/material";

interface Category {
  _id: string;
  name: string;
  image: string;
  __v: number;
  id: string;
}

type TypeSize = {
  _id: string;
  name: string;
};

type TypeColors = {
  _id: string;
  name: string;
};

interface Product {
  image: string;
  color: string[];
  size: string[];
  brand: string;
  price: number;
  rating: number;
  _id: string;
  images: string[];
  numReviews: number;
  name: string;
  description: string;
  category: Category;
  count: number;
  dateCreated: string;
  __v: number;
  id: string;
}

interface UserCardProps {
  item: Product;
  deleteProduct: (userId: string) => void;
}

function ProductCard({ item, deleteProduct }: UserCardProps) {
  return (
    <div className="products-row">
      <div className="product-cell image">
        <img src={item?.image} alt="product" />
        <Box sx={{ display: "flex", alignItems: "center", gap: "7px" }}>
          {item.rating ? item.rating : 0}
          <StarIcon sx={{ fontSize: "17px", color: "gold" }} />
        </Box>
      </div>

      <div className="product-cell category">
        <span className="cell-label">Category:</span> {item.category.name}
      </div>

      <div className="product-cell status-cell">
        <span className="cell-label">Brans:</span>
        <span className="status active">{item.brand}</span>
      </div>

      <div className="product-cell sales">
        <span className="cell-label">Size:</span>
        {item.size?.map((size: TypeSize, index: number) => {
          return <span key={index}>{size.name},</span>;
        })}
      </div>

      <div className="product-cell sales">
        <span className="cell-label">Size:</span>
        {item.color?.map((color: TypeColors, index: number) => {
          return <span key={index}>{color.name},</span>;
        })}
      </div>

      <div className="product-cell stock">
        <span className="cell-label">Stock:</span>
        {item.count}
      </div>
      <div className="product-cell price">
        <span className="cell-label">Price:</span>${item.price}
      </div>
      <div className="product-cell price">
        <span className="cell-label">Active:</span>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            // onClick={() => deleteUser(String(item.id))}
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
            onClick={() => deleteProduct(String(item._id))}
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
    </div>
  );
}

export default ProductCard;
