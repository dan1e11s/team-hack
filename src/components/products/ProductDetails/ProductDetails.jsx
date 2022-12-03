import React, { useState } from 'react';
import './ProductDetails.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Ratings from '../../Ratings/Ratings';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from '../../FormDialog/FormDialog';

const ProductDetails = ({ oneProduct, reviews }) => {
  const [count, setCount] = useState(1);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <>
      {oneProduct ? (
        <>
          <div className="details-main-box">
            <div>
              <h3 className="details-title">{oneProduct.title}</h3>
            </div>
            <div className="details-bread">
              <Link to="/" className="shop-link">
                Главная
              </Link>
              <span style={{ color: '#9c9c9c' }}>
                &nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;
                {oneProduct.title}
              </span>
            </div>
            <div className="details-content">
              <div className="details-img-wrapper">
                <img
                  className="details-img"
                  src={oneProduct.image}
                  alt="image"
                />
              </div>
              <div className="details-info">
                <div className="details-text">
                  <p>{oneProduct.description}</p>
                </div>
                <div className="details-price">
                  <p>
                    ${oneProduct.price}{' '}
                    <LocalOfferIcon
                      sx={{ marginLeft: '5px', color: '#FF6D75' }}
                    />
                  </p>
                </div>
                <div className="details-feedback">
                  <div>
                    <div className="count-box">
                      <Button
                        aria-label="increase"
                        onClick={() => {
                          setCount(Math.max(count - 1, 1));
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </Button>
                      {count}
                      <Button
                        aria-label="increase"
                        onClick={() => {
                          setCount(count + 1);
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <button className="add-cart">Добавить в корзину</button>
                  </div>
                  <div className="details-like">
                    <IconButton>
                      <FavoriteBorderIcon sx={{ color: '#6e9c9f' }} />
                    </IconButton>
                  </div>
                </div>
                <div className="adm-btns">
                  <IconButton
                    color="success"
                    onClick={() => navigate(`/edit/${oneProduct.slug}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews-box">
            <div className="reviews-title">
              <p>
                Отзывы <span>{reviews.count}</span>
              </p>
            </div>
            <Ratings />
            <div style={{ marginBottom: '20px' }}>
              <button onClick={handleClickOpen} className="create-reviews">
                Написать отзыв
              </button>
            </div>
            <FormDialog open={open} handleClose={handleClose} />
            <hr />
            <div>
              {reviews.count !== 0 ? (
                <div>
                  <p>Виктория</p>
                  <p>21.12.12</p>
                  <p>Хорош</p>
                </div>
              ) : (
                <h3>Пока нету отзывов</h3>
              )}
            </div>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default ProductDetails;
