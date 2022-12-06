import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField, Typography } from '@mui/material';
import { useCart } from '../../contexts/CardContextProvider.js';
import { useNavigate } from 'react-router-dom';
import '../Cart/Cart.css';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div>
        <TableContainer component={Paper} className="cartt">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="texts">Товар</TableCell>
                <TableCell className="texts" align="right">
                  Название
                </TableCell>
                <TableCell className="texts" align="right">
                  Цена
                </TableCell>
                <TableCell className="texts" align="right">
                  Количество
                </TableCell>
                <TableCell className="texts" align="right">
                  Общая цена
                </TableCell>
                <TableCell className="texts" align="right">
                  Удаление
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.products.map((elem) => (
                <TableRow
                  key={elem.getOneProduct.slug}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell scope="row">
                    <img
                      src={elem.getOneProduct.image}
                      alt="image"
                      style={{ height: '70px', cursor: 'pointer' }}
                      onClick={() =>
                        navigate(`/products/${elem.getOneProduct.slug}`)
                      }
                    />
                  </TableCell>
                  <TableCell className="texts" align="right">
                    {elem.getOneProduct.title}
                  </TableCell>
                  <TableCell className="texts" align="right">
                    {elem.getOneProduct.price}$
                  </TableCell>
                  <TableCell className="counttexto" align="right">
                    <TextField
                      className="counttexts"
                      sx={{ color: 'primary.dark' }}
                      onChange={(e) =>
                        changeProductCount(
                          e.target.value,
                          elem.getOneProduct.slug
                        )
                      }
                      type="number"
                      value={elem.count}
                    />
                  </TableCell>
                  <TableCell className="texts" align="right">
                    {elem.subPrice}$
                  </TableCell>
                  <TableCell align="right">
                    <CancelIcon
                      sx={{
                        cursor: 'pointer',
                        marginRight: '7px',
                        color: '#ba000d',
                        fontSize: '26px',
                      }}
                      onClick={() =>
                        deleteProductInCart(elem.getOneProduct.slug)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="cartBot">
            <h2 className="H">Итого: {cart?.totalPrice}$</h2>
            <button
              className="btn_aboutPage"
              id="accept"
              onClick={() => {
                navigate('/payment');
              }}
            >
               Оформить заказ
            </button>
            <button
              id="back"
              className="btn_aboutPage"
              onClick={() => {
                navigate('/shop');
              }}
            >
              На главную
            </button>
          </div>
        </TableContainer>
      </div>
      <div>
        <TableContainer component={Paper} className="cartAdaptive">
          <Table aria-label="simple table" className="cartTable">
            <TableHead>
              <TableRow>
                <TableCell className="texts">Товар</TableCell>
                <TableCell className="texts" align="right">
                  Количество
                </TableCell>
                <TableCell className="texts" align="right">
                  Общая цена
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.products.map((elem) => (
                <TableRow
                  key={elem.getOneProduct.slug}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      src={elem.getOneProduct.image}
                      alt="image"
                      style={{ height: '70px', cursor: 'po' }}
                      onClick={() =>
                        navigate(`/products/${elem.getOneProduct.slug}`)
                      }
                    />
                    <TableCell
                      className="texts"
                      align="right"
                      sx={{ padding: '0', textAlign: 'start', border: 'none' }}
                    >
                      {elem.getOneProduct.title}
                    </TableCell>
                  </TableCell>
                  <TableCell className="counttexto" align="right">
                    <TextField
                      className="counttexts"
                      sx={{ color: 'primary.dark' }}
                      onChange={(e) =>
                        changeProductCount(
                          e.target.value,
                          elem.getOneProduct.slug
                        )
                      }
                      type="number"
                      value={elem.count}
                    />
                  </TableCell>
                  <TableCell
                    className="texts"
                    align="right"
                    sx={{
                      display: 'flex',
                      padding: '55px 10px',
                      alignItems: 'center',
                    }}
                  >
                    {elem.subPrice}$
                    <CancelIcon
                      sx={{
                        cursor: 'pointer',
                        marginRight: '7px',
                        color: '#ba000d',
                        fontSize: '26px',
                      }}
                      onClick={() =>
                        deleteProductInCart(elem.getOneProduct.slug)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="cartBottom">
            <h2 className="H" id="adpativedH">
              Итого: {cart?.totalPrice}$
            </h2>
            <button
              className="accept"
              onClick={() => {
                navigate('/payment');
              }}
            >
               Оформить заказ
            </button>
            <button
              className="back"
              onClick={() => {
                navigate('/shop');
              }}
            >
              На главную
            </button>
          </div>
        </TableContainer>
      </div>
    </>
  );
}
