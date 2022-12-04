import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField, Typography } from "@mui/material";
import { useCart } from "../../contexts/CardContextProvider.js";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteProductInCart } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <div>
      <TableContainer component={Paper} className="cartt">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="texts">Picture</TableCell>
              <TableCell className="texts" align="right">
                Name
              </TableCell>
              <TableCell className="texts" align="right">
                Category
              </TableCell>
              <TableCell className="texts" align="right">
                Price
              </TableCell>
              <TableCell className="texts" align="right">
                Count
              </TableCell>
              <TableCell className="texts" align="right">
                Sub Price
              </TableCell>
              <TableCell className="texts" align="right">
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.products.map(elem => (
              <TableRow
                key={elem.getOneProduct.slug}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <img
                    src={elem.getOneProduct.image}
                    alt="image"
                    style={{ height: "70px" }}
                  />
                </TableCell>
                <TableCell className="texts" align="right">
                  {elem.getOneProduct.title}
                </TableCell>
                <TableCell className="texts" align="right">
                  {elem.getOneProduct.category}
                </TableCell>
                <TableCell className="texts" align="right">
                  {elem.getOneProduct.price}
                </TableCell>
                <TableCell className="counttexto" align="right">
                  <TextField
                    className="counttexts"
                    sx={{ color: "primary.dark" }}
                    onChange={e =>
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
                  {elem.subPrice}
                </TableCell>
                <TableCell align="right">
                  <button
                    className="delete"
                    onClick={() =>
                      deleteProductInCart(elem.getOneProduct.slug)
                    }>
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h2 className="H">
          Total Price: {cart?.totalPrice}
          <button
            className="button"
            id="accept"
            onClick={() => {
              navigate("/payment");
            }}>
            Accept Order
          </button>
          <button
            id="back"
            className="button"
            onClick={() => {
              navigate("/shop");
            }}>
            Back
          </button>
        </h2>
      </TableContainer>
    </div>
  );
}
