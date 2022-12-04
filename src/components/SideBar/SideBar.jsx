import React from "react";
import { Collapse } from "@mui/material";
import "./SideBar.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";

const SideBar = ({ collapseOpen, setCollapseOpen, handleOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser, handleLogout, deleteAccount } = useAuth();
  const username = localStorage.getItem("username");

  return (
    <Collapse className="collapse-box" in={collapseOpen}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {currentUser ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              sx={{ paddingLeft: "0px", paddingBottom: "0px" }}
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit">
              <div style={{ display: "flex" }}>
                <AccountCircle />
                <li className="collapse-list-item" id="userName">
                  {username.toUpperCase()}
                </li>
              </div>
            </IconButton>
            <li className="collapse-list-item" onClick={() => handleLogout()}>
              Выйти
            </li>
            <li
              className="collapse-list-item"
              id="deleteside"
              onClick={() => deleteAccount()}>
              Удалить аккаунт
            </li>
          </div>
        ) : null}
        <div
          style={{
            display: currentUser ? "none" : "block",
            alignItems: "center",
            marginTop: "15px",
          }}>
          <div style={{ display: "flex" }}>
            <PermIdentityIcon />
            <button className="nav-btn" id="enterbtn" onClick={handleOpen}>
              Вход
            </button>
          </div>
        </div>
      </div>
      <ul className="collapse-list">
        <li
          className={`collapse-list-item ${
            location.pathname === "/" ? "active" : ""
          }`}
          onClick={() => navigate("/")}>
          Главная
        </li>
        <li
          className={`collapse-list-item ${
            location.pathname === "/shop" ? "active" : ""
          }`}
          onClick={() => navigate("/shop")}>
          Магазин
        </li>
        <li
          className={`collapse-list-item ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => navigate("/about")}>
          О бренде
        </li>
        <li
          className={`collapse-list-item ${
            location.pathname === "/contacts" ? "active" : ""
          }`}
          onClick={() => navigate("/contacts")}>
          Контакты
        </li>
      </ul>
    </Collapse>
  );
};

export default SideBar;
