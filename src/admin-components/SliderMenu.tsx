// icons
import CategoryIcon from "@mui/icons-material/Category";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { NavLink } from "react-router-dom";

function SliderMenu() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="app-icon">LOGO</div>
      </div>
      <ul className="sidebar-list">
        <NavLink to={"home"} className="sidebar-list-item">
          <li>
            <div className="menu-link">
              <HomeOutlinedIcon />
              <span>Home</span>
            </div>
          </li>
        </NavLink>

        <NavLink to={"product"} className="sidebar-list-item">
          <li>
            <div className="menu-link">
              <StorefrontIcon />
              <span>Products</span>
            </div>
          </li>
        </NavLink>

        <NavLink to={"category"} className="sidebar-list-item">
          <li>
            <div className="menu-link">
              <CategoryIcon />
              <span>Category</span>
            </div>
          </li>
        </NavLink>

        <NavLink to={"statistics"} className="sidebar-list-item">
          <li>
            <div className="menu-link">
              <StackedLineChartOutlinedIcon />
              <span>Statistics</span>
            </div>
          </li>
        </NavLink>

        <NavLink to={"users"} className="sidebar-list-item">
          <li>
            <div className="menu-link">
              <PeopleAltOutlinedIcon />
              <span>Users</span>
            </div>
          </li>
        </NavLink>

        <NavLink to={"settings"} className="sidebar-list-item">
          <li>
            <div className="menu-link">
              <SettingsOutlinedIcon />
              <span>Settings</span>
            </div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default SliderMenu;
