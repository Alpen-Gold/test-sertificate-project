// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Box } from "@mui/material";
// icons;
import DeleteIcon from "@mui/icons-material/Delete";

type User = {
  email: string;
  id: string;
  isAdmin: boolean;
  name: string;
  phone: string;
  __v: number;
  _id: string;
};

interface UserCardProps {
  item: User;
  deleteUser: (userId: string) => void; // Masalan, foydalanuvchi ID'sini o'chirish funktsiyasi
}

function UserCard({ item, deleteUser }: UserCardProps) {
  return (
    <div className="products-row" key={item.id}>
      {/* <button className="cell-more-button">
        <MoreVertOutlinedIcon />
      </button> */}
      <div className="product-cell image">
        <img
          src="https://avatars.mds.yandex.net/i?id=6dcbf7c46a0f3fc73bc916c6d19a99fcd1c65e04-8498056-images-thumbs&ref=rim&n=33&w=250&h=250"
          alt="product"
        />
        <span>User</span>
      </div>
      <div className="product-cell category">
        <span className="cell-label">Name:</span>
        {item.name}
      </div>
      <div className="product-cell status-cell">
        <span className="cell-label">Status:</span>
        <span className={item.isAdmin ? "status active" : "status disabled"}>
          {item.isAdmin ? "Admin" : "User"}
        </span>
      </div>
      <div className="product-cell sales">
        <span className="cell-label">Phone:</span>
        {item.phone}
      </div>
      <div className="product-cell stock">
        <span className="cell-label">Email:</span>
        {item.email}
      </div>
      <div className="product-cell price">
        <span className="cell-label">Active:</span>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => deleteUser(String(item.id))}
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

export default UserCard;
