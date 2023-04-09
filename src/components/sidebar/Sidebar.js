import { FaHome, FaList } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import {  CgLogOut } from "react-icons/cg";
import {
  MdOutlineProductionQuantityLimits,
  MdGroupAdd,
  MdContactPage,
  MdInsertPhoto,
  MdVideocam,
  MdOutlineSchedule,
  MdHearing,
} from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MenuLink from "../menuLink/MenuLink";
import "../sidebar/sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="sidebarbarWrapper">
        <MenuLink icon={<FaHome />} text="Homepage" />
        <MenuLink icon={<FaList />} text="Lists" />
        <MenuLink
          icon={<MdOutlineProductionQuantityLimits />}
          text="Products"
        />
        <MenuLink icon={<MdGroupAdd />} text="Groups" />
        <MenuLink icon={<MdContactPage />} text="Pages" />
        <MenuLink icon={<MdInsertPhoto />} text="Photos" />
        <MenuLink icon={<MdVideocam />} text="Videos" />
        <MenuLink icon={<MdOutlineSchedule />} text="Schedule" />
        <MenuLink icon={<MdHearing />} text="Wishlist" />
        <MenuLink icon={<FcSettings />} text="Settings" />
        <span onClick={handleLogout}>
          <MenuLink icon={<CgLogOut />} text="Logout" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
