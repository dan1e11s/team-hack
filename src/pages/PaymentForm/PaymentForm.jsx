import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../PaymentForm/PaymentForm.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2';
import { useCart } from '../../contexts/CardContextProvider';
import { useEffect } from 'react';

const PaymentForm = () => {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem('cart');
    getCart();
  }

  const alerted = () => {
    Swal.fire({
      icon: 'success',
      title: 'Заказ успешно оформлен!',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        cartCleaner();
        navigate('/shop');
      }
    });
  };

  return (
    <div className="payment">
      <div className="aboutTop">
        <h1 className="paymentFormH1">Оформление заказа</h1>
        <div className="breadcrumbs">
          <a className="breadcrumb1" onClick={() => navigate('/')}>
            Главное
          </a>
          <a className="breadcrumb2">-</a>
          <a className="breadcrumb3">Оформление заказа</a>
        </div>
      </div>
      <div className="payment-wrapper">
        <div className="paymentTop">
          <form className="paymentForm">
            <h2 className="paymentH2">Данные покупателя</h2>
            <input
              className="payment-inp"
              type="text"
              id="name"
              name="fullname"
              placeholder="Имя"
            />
            <input
              maxLength="12"
              className="payment-inp"
              type="text"
              placeholder="Номер карты"
            />
            <input className="payment-inp" type="date" />
            <input
              maxLength="3"
              className="payment-inp"
              type="text"
              placeholder="CVV код"
            />
          </form>
          <div className="order" id="order1">
            <h2 className="paymentH2">Ваш заказ</h2>
            <div className="paymentUls">
              <ul className="paymentUl">
                <h3 className="paymentH3">Товар</h3>
                {cart?.products.map((elem) => (
                  <li key={elem.slug} className="paymentLi">
                    {elem.getOneProduct.title}
                  </li>
                ))}
              </ul>
              <ul className="paymentUl">
                <h3 className="paymentH3">Цена</h3>
                {cart?.products.map((elem) => (
                  <li className="paymentLi">{elem.getOneProduct.price}$</li>
                ))}
              </ul>
            </div>
            <h2 className="paymentH2">Общая цена: {cart.totalPrice}</h2>
          </div>
        </div>
        <div className="paymentBot">
          <form className="paymentForm">
            <h2 className="paymentH2">Адрес получателя</h2>
            <input className="payment-inp" type="text" placeholder="Cтрана" />
            <input
              maxLength="12"
              className="payment-inp"
              type="text"
              placeholder="Город"
            />
            <input className="payment-inp" placeholder="Улица" />
            <input className="payment-inp" type="text" placeholder="Дом" />
          </form>
          <div className="order">
            <h2 className="paymentH2">Способы оплаты</h2>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Картой"
                  control={<Radio />}
                  label="Картой"
                />
                <FormControlLabel
                  value="Наличными"
                  control={<Radio />}
                  label="Наличными"
                />
              </RadioGroup>
            </FormControl>
            <button
              onClick={() => {
                alerted();
              }}
              className="payment-btn"
            >
              Разместить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
