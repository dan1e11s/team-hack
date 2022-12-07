import React from "react";
import "../ContactsPage/ContactsPage.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
            Главная
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
        <div className="map_ContactsPage">
          <iframe
            className="map_style_ContactsPage"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.058029788211!2d74.58473861546689!3d42.87161931063404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d04d040001%3A0x435e5287f35c7d3c!2z0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyBNYWtlcnMgQ29kaW5nIEJvb3RjYW1w!5e0!3m2!1sru!2skg!4v1670175731064!5m2!1sru!2skg"
            style={{
              width: "100%",
              // height: "100%",
              style: "border:0;",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}></iframe>
        </div>
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
              <button
                onClick={() => {
                  Swal.fire({
                    title: "Успешно отправлено!",
                    confirmButtonText: "Ok",
                  }).then(result => {
                    if (result.isConfirmed) {
                      navigate("/");
                    }
                  });
                }}
                className="btn_ContactsPage">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
