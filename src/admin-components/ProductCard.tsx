// icons

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

function ProductCard() {
  return (
    <div className="products-row">
      <button className="cell-more-button">
        <MoreVertOutlinedIcon />
      </button>
      <div className="product-cell image">
        <img
          src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
          alt="product"
        />
        <span>Sand</span>
      </div>
      <div className="product-cell category">
        <span className="cell-label">Category:</span>Living Room
      </div>
      <div className="product-cell status-cell">
        <span className="cell-label">Status:</span>
        <span className="status disabled">Disabled</span>
      </div>
      <div className="product-cell sales">
        <span className="cell-label">Sales:</span>52
      </div>
      <div className="product-cell stock">
        <span className="cell-label">Stock:</span>16
      </div>
      <div className="product-cell price">
        <span className="cell-label">Price:</span>$230
      </div>
    </div>
  );
}

export default ProductCard;
