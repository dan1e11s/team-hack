import React from "react";
import "../MainPage/MainPage.css";
import firstpng from "../../media/quality1.png";
import secondpng from "../../media/mdi-light_cog.png";
import thirdpng from "../../media/hand1.png";
import ecoIMG from "../../media/ecomainIMG.webp";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mainpage">
      <div className="mainTop">
        <div className="maint">
          <h1 className="mainText">Новые поступления в этом сезоне</h1>
          <p className="mainP">
            Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
            этом сезоне. Время исследовать.
          </p>
          <button onClick={() => navigate("/shop")} className="mainbtn">
            Открыть Магазин
          </button>
        </div>
      </div>
      <div className="mainblock">
        <img
          className="mainphoto"
          src="http://womazing.s-host.net/wp-content/uploads/2021/04/main-photo.jpg"
          alt="mainphoto"
        />
      </div>
      <div className="mainContent">
        <h2 className="mainContentText">Что для нас важно</h2>
        <div className="mainCards">
          <div className="mainCard">
            <img className="mainIcon" src={firstpng} alt="" />
            <h3 className="cardH">Качество</h3>
            <p className="cardP">
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </p>
          </div>
          <div className="mainCard">
            <img className="mainIcon" src={secondpng} alt="" />
            <h3 className="cardH">Скорость</h3>
            <p className="cardP">
              Благодаря отлаженной системе в UMBRELLA мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </p>
          </div>
          <div className="mainCard">
            <img className="mainIcon" src={thirdpng} alt="" />
            <h3 className="cardH">Ответственность</h3>
            <p className="cardP">
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это UMBRELLA
            </p>
          </div>
        </div>
      </div>
      <div className="mainBottom" id="mainBottom">
        <img src={ecoIMG} alt="ecoIMG" className="ecoImg" />
        <div className="mainBottomText">
          <h2 className="mainContentText" id="mainBottomText">
            Экологичность
          </h2>
          <p className="mainBottomP">
            Откройте для себя наш широкий выбор оригинальных дизайнов,
            напечатанных на экологически чистых материалах с использованием
            экологически чистых технологий печати! Получите ваши заказы без
            пластика! Наслаждайтесь покупками с заботой об окружающей среде.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
