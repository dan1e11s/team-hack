import React from "react";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import "../Footer/Footer.css";
import visa from "../../media/visa.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="footer">
      <div className="footerLogo">
        <div className="footerSt" onClick={() => navigate("/")}>
          <BeachAccessIcon />
          <h2 className="footerTitle">Umbrella</h2>
        </div>
        <div className="footerStart">
          <p className="startP">© Все права защищены</p>
          <p className="startP">Политика конфиденциальности</p>
          <p className="startP">Публичная оферта</p>
        </div>
      </div>
      <div className="footerCenter">
        <ul
          className={`footerUl ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigate("/")}>
          Главная
        </ul>
        <ul
          className={`footerUl ${
            location.pathname === "/shop" ? "active" : ""
          }`}
          onClick={() => navigate("/shop")}>
          Магазин
        </ul>
        <ul
          className={`footerUl ${
            location.pathname === "/about" ? "active" : ""
          }`}
          onClick={() => navigate("/about")}>
          О бренде
        </ul>
        <ul
          className={`footerUl ${
            location.pathname === "/contacts" ? "active" : ""
          }`}
          onClick={() => navigate("/contacts")}>
          Контакты
        </ul>
      </div>
      <div className="footerEnd">
        <p className="footerP">+8 (800) 555-35-35</p>
        <p className="footerP">umbrella@gmail.com</p>
        <div>
          <a href="https://www.instagram.com/" className="footerA">
            <InstagramIcon className="footerImg" />
          </a>
          <a href="https://twitter.com/" className="footerA">
            <TwitterIcon className="footerImg" />
          </a>
          <a href="https://www.facebook.com/" className="footerA">
            <FacebookIcon className="footerImg" />
          </a>
        </div>
        <img className="footerVisa" src={visa} alt="Mastercard" />
      </div>
    </div>
  );
};

export default Footer;
