import React from "react";
import "../../styles/AboutPage/AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <h1 className="aboutPage_h1">О бренде</h1>
      <p className="aboutPage_main_p">Главное - О бренде</p>
      <div className="content_aboutPage">
        <div className="block_1">
          <img
            className="img1_aboutPage"
            src="https://timdelux.github.io/img/about1.jpg"
            alt="There's an img"
          />
          <div>
            <h3 className="first_h3">Идея и женщина</h3>
            <p className="text_block1">
              Womazing была основана в 2010-ом и стала одной из самых успешных
              компаний нашей страны. Как и многие итальянские фирмы, Womazing
              остаётся семейной компанией, хотя ни один из членов семьи не
              является модельером.
            </p>
            <p className="text_block1">
              Мы действуем по успешной формуле, прибегая к услугам известных
              модельеров для создания своих коллекций. Этот метод был описан
              критиком моды Колином Макдауэллом как форма дизайнерского
              со-творчества, характерная для ряда итальянских prêt-a-porter
              компаний.
            </p>
          </div>
        </div>
        <div className="block_2">
          <div>
            <h3 className="second_h3">Магия в деталях</h3>
            <p className="text_block2">
              Первый магазин Womazing был открыт в маленьком городке на севере
              страны в 2010-ом году. Первая коллекция состояла из двух пальто и
              костюма, которые были копиями парижских моделей.
            </p>
            <p className="text_block2">
              Несмотря на то, что по образованию основательница была адвокатом,
              ее семья всегда была тесно связана с шитьём (прабабушка
              основательницы шила одежду для женщин, а мать основала
              профессиональную школу кроя и шитья). Стремление производить
              одежду для масс несло в себе большие перспективы, особенно в то
              время, когда высокая мода по-прежнему доминировала, а рынка
              качественного prêt-a-porter попросту не существовало.{" "}
            </p>
          </div>
          <img
            className="img2_aboutPage"
            src="https://timdelux.github.io/img/about2.jpg"
            alt=""
          />
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <button className="btn_aboutPage">Перейти в магазин</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
