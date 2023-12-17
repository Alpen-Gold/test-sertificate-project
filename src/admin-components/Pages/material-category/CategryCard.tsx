// icons
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import { Box } from "@mui/material";

interface Product {
  _id: string;
  name: string;
  gender: string;
  __v: number;
  id: string;
}

interface UserCardProps {
  item: Product;
  deleteProduct: (userId: string) => void;
}

function CateogoryCard({ item, deleteProduct }: UserCardProps) {
  return (
    <div className="products-row">
      <div className="product-cell image">
        <img
          src={
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          }
          alt="product"
        />
        {/* <span>Demo name</span> */}
      </div>
      <div className="product-cell category">
        <span className="cell-label">Category:</span> {item.name}
      </div>
      <div className="product-cell status-cell">
        <span className="cell-label">Status:</span>
        <span className="status active">Active or isActive</span>
      </div>

      <div className="product-cell stock">
        <span className="cell-label">Gender:</span>
        {item.gender}
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

export default CateogoryCard;
