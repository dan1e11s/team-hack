import React from "react";
import { useNavigate } from "react-router-dom";
import "../PaymentForm/PaymentForm.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import TagFacesRoundedIcon from "@mui/icons-material/TagFacesRounded";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PaymentForm = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // navigate("/product");
  };

  return (
    <div className="payment">
      <div className="aboutTop">
        <h1 className="aboutPage_h1">Оформление заказа</h1>
        <div className="breadcrumbs">
          <a
            className="aboutPage_main_a"
            id="breadcrumb1"
            onClick={() => navigate("/")}>
            Главное
          </a>
          <a className="aboutPage_main_a" id="breadcrumb2">
            -
          </a>
          <a className="aboutPage_main_a" id="breadcrumb3">
            Оформление заказа
          </a>
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
          <div className="order">
            <h2 className="paymentH2">Ваш заказ</h2>
            <div className="paymentUls">
              <ul className="paymentUl">Товар</ul>
              <ul className="paymentUl">Цена</ul>
            </div>
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
                name="radio-buttons-group">
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
                handleClickOpen();
              }}
              className="payment-btn">
              Разместить заказ
            </button>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogContent sx={{ backgroundColor: "#64ffda" }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ display: "flex", alignItems: "center", color: "white" }}>
            <TagFacesRoundedIcon />
            Thank you for your purchase!
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PaymentForm;
