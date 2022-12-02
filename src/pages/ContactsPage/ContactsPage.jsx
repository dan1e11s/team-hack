import React from "react";
import "../ContactsPage/ContactsPage.css";
import { useNavigate } from "react-router-dom";

const ContactsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="contacts">
      <div className="contactsTop">
        <h1 className="contactsPage_h1">Контакты</h1>
        <div className="morsel">
          <a
            className="contactsPage_main_a"
            id="morsel1"
            onClick={() => navigate("/")}>
            Главное
          </a>
          <a className="contactsPage_main_a" id="morsel2">
            -
          </a>
          <a className="contactsPage_main_a" id="morsel3">
            Контакты
          </a>
        </div>
      </div>
      <div className="content_ContactsPage">
        <div className="contacts-wrapper">
          <div className="rowText">
            <div className="firstColumn">
              <p className="upperText">Телефон</p>
              <p className="lowerText">+7 (495) 823 54-12</p>
            </div>
            <div className="secondColumn">
              <p className="upperText">E-mail</p>
              <p className="lowerText">info@sitename.com</p>
            </div>
            <div className="thirdColumn">
              <p className="upperText">Адрес</p>
              <p className="lowerText">г. Москва, 3-я улица Строителей, 25</p>
            </div>
          </div>
          <div className="form_ContactsPage">
            <div className="formColumn">
              <p className="h3_formColumn">Напишите нам</p>
              <input
                className="input_form"
                type="text"
                name="name"
                placeholder="Имя"
              />
              <input className="input_form" type="text" placeholder="E-mail" />
              <input className="input_form" type="text" placeholder="Телефон" />
              <input
                className="input_form_text"
                type="text"
                placeholder="Сообщение"
              />
              <button className="btn_ContactsPage">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
