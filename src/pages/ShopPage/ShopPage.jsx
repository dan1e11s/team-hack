import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "../../components/products/ProductList/ProductList";
import "./ShopPage.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Category from "../../components/Category/Category";
import SearchBlock from "../../components/Search/SearchBlock";

const ShopPage = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("username");

  return (
    <div className="shop-box">
      <div className="shop-wrapper">
        <h1 className="shop-title">Магазин</h1>
        <div className="shop-breadcrumbs">
          <div className="breadcrumbs-item">
            <div className="breadcrumbs" id="bread">
              <a onClick={() => navigate("/")} className="breadcrumb1">
                Главная
              </a>
              <a className="breadcrumb2">
                &nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;Магазин
              </a>
            </div>
            <div className="shop-add-product">
              <p
                onClick={() => navigate("/add")}
                className={` ${user === "admin" ? "see" : "nosee"}`}>
                Добавить продукт
              </p>
              <AddBoxIcon
                sx={{ marginLeft: "5px", cursor: "pointer" }}
                className={` ${user === "admin" ? "see" : "nosee"}`}
              />
            </div>
          </div>
        </div>
        <Category />
        <SearchBlock />
      </div>
      <ProductList />
    </div>
  );
};

export default ShopPage;
