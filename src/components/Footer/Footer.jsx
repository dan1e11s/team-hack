import React from "react";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import "../Footer/Footer.css";
import visa from "../../media/visa.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footerLogo">
        <div className="footerSt">
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
        <ul className="footerUl" onClick={() => navigate("/")}>
          Главная
        </ul>
        <ul className="footerUl">Магазин</ul>
        <ul className="footerUl">О бренде</ul>
        <ul className="footerUl">Контакты</ul>
      </div>
      <div className="footerEnd">
        <p className="footerP">+8 (800) 555-35-35</p>
        <p className="footerP">umbrella@gmail.com</p>
        <div>
          <InstagramIcon className="footerImg" />
          <TwitterIcon className="footerImg" />
          <FacebookIcon className="footerImg" />
        </div>
        <img className="footerVisa" src={visa} alt="Mastercard" />
      </div>
    </div>
  );
};

export default Footer;
