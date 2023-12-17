// icons
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Box } from "@mui/material";

interface Category {
  _id: string;
  name: string;
  image: string;
  __v: number;
  id: string;
}

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
  deleteProduct: (userId: string) => void; // Masalan, foydalanuvchi ID'sini o'chirish funktsiyasi
}

function ProductCard({ item, deleteProduct }: UserCardProps) {
  return (
    <div className="products-row">
      <div className="product-cell image">
        <img
          src={
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          }
          alt="product"
        />
        <span>{item.numReviews ? item.numReviews : 0}</span>
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
        {item.size?.map((size: string, index: number) => {
          return <span key={index}>{size}</span>;
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
            onClick={() => deleteProduct(String(item.id))}
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
