import React from "react";
import "../AboutPage/AboutPage.css";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="about">
      <div className="aboutTop">
        <h1 className="aboutPage_h1">О бренде</h1>
        <div className="breadcrumbs">
          <a
            className="aboutPage_main_a"
            class="breadcrumb1"
            onClick={() => navigate("/")}>
            Главное
          </a>
          <a className="aboutPage_main_a" class="breadcrumb2">
            -
          </a>
          <a className="aboutPage_main_a" class="breadcrumb3">
            О бренде
          </a>
        </div>
      </div>
      <div className="content_aboutPage">
        <div className="block_1">
          <div className="blockImg">
            <img
              className="img1_aboutPage"
              src="https://timdelux.github.io/img/about1.jpg"
              alt="There's an img"
            />
          </div>
          <div className="info1">
            <h3 className="first_h3">О UMBRELLA</h3>
            <p className="text_block1">
              UMBRELLA была основана в 1991 году с четкой международной миссией
              и намерением одевать молодых людей, которые заботятся об
              окружающей среде, живут в обществе и общаются друг с другом.
              Молодые люди, у которых есть чувство непринужденной одежды,
              которые избегают стереотипов и хотят чувствовать себя хорошо в
              любой одежде.
            </p>
            <p className="text_block1">
              Чтобы удовлетворить их потребности, UMBRELLA использует последние
              международные тенденции, смешивая их с влиянием, которое можно
              увидеть на улице и в самых модных клубах, и перерабатывает их в
              соответствии со своим стилем, превращая их в удобную и удобную
              одежду. UMBRELLA развивается в том же темпе, что и его клиенты,
              всегда следя за новыми технологиями, социальными движениями и
              последними художественными или музыкальными тенденциями. Все это
              можно увидеть не только в дизайне, но и в магазинах.
            </p>
          </div>
        </div>
        <div className="block_2">
          <div>
            <h3 className="second_h3">Наше предназначение</h3>
            <p className="text_block2">
              Устойчивая мода важна для создания лучшего будущего и лучшей
              индустрии моды. Устойчивые модные бренды играют важную роль в
              формировании того, как индустрия моды может улучшить свою
              практику, уменьшить вред, наносимый окружающей среде, и поддержать
              работников швейной промышленности.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}>
            <img
              className="img2_aboutPage"
              src="https://timdelux.github.io/img/about2.jpg"
              alt="asdsad"
            />
          </div>
        </div>
        <div className="divBtn" style={{ width: "100%", textAlign: "center" }}>
          <button className="btn_aboutPage" onClick={() => navigate("/shop")}>
            Перейти в магазин
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
