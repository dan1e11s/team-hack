import React, { useState } from 'react';
import './ProductDetails.css';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Ratings from '../../Ratings/Ratings';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FormDialog from '../../FormDialog/FormDialog';
import { useProduct } from '../../../contexts/ProductContextProvider';
import ColorList from '../../ColorList/ColorList';
import { useCart } from '../../../contexts/CardContextProvider';
import Swal from 'sweetalert2';

const ProductDetails = ({ oneProduct }) => {
  const { addProductToCart } = useCart();
  const { deleteProduct, deleteComment } = useProduct();
  const user = localStorage.getItem('username');

  function checkUser(oneProduct) {
    if (user) {
      addProductToCart(oneProduct);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Вы должны авторизоваться',
      });
    }
  }

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
              <a
                onClick={() => navigate('/')}
                className="breadcrumb1"
                style={{ fontSize: '18px' }}
              >
                Главная
              </a>
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
                <div className="details-text-wrapper">
                  <p className="details-price">
                    Цена: ${oneProduct.price}
                    <LocalOfferIcon
                      sx={{ marginLeft: '5px', color: '#FF6D75' }}
                    />
                  </p>
                  <p className="details-consists">
                    Состав: {oneProduct.consists_of}
                  </p>
                </div>
                <ColorList oneProduct={oneProduct} />
                <div className="details-feedback">
                  <div></div>
                  <div>
                    <button
                      className="add-cart"
                      onClick={() => checkUser(oneProduct)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                  <div className="details-like">
                    <IconButton>
                      <FavoriteBorderIcon sx={{ color: '#6e9c9f' }} />
                    </IconButton>
                  </div>
                </div>
                <div className={` ${user === 'admin' ? 'adm-btns' : 'nosee'}`}>
                  <IconButton
                    color="success"
                    onClick={() => navigate(`/edit/${oneProduct.slug}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteProduct(oneProduct.slug, navigate)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div className="reviews-box">
            <div className="reviews-title">
              <p>
                Отзывы <span>{oneProduct.comments_count}</span>
              </p>
            </div>
            <Ratings />
            <div style={{ marginBottom: '20px' }}>
              <button onClick={handleClickOpen} className="create-reviews">
                Написать отзыв
              </button>
            </div>
            <FormDialog
              open={open}
              handleClose={handleClose}
              oneProduct={oneProduct}
            />
            <hr />
            <div>
              {oneProduct.comments_count !== 0 ? (
                <div>
                  {oneProduct.comments?.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#f5f5f5',
                        padding: '20px 40px',
                        marginBottom: '70px',
                      }}
                    >
                      <div>
                        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
                          {item.user}
                        </p>
                        <span style={{ color: '#9c9c9c' }}>
                          {item.created_at.substr(0, 10)}
                        </span>
                        <p style={{ fontSize: '20px' }}>{item.text}</p>
                      </div>
                      <IconButton
                        sx={{ display: user === item.user ? 'block' : 'none' }}
                        onClick={() => deleteComment(oneProduct.slug, item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  ))}
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
