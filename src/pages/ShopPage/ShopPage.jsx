import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductList from "../../components/products/ProductList/ProductList";
import "./ShopPage.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Category from "../../components/Category/Category";
import SearchBlock from "../../components/Search/SearchBlock";

const ShopPage = () => {
  const navigate = useNavigate();

  return (
    <div className="shop-box">
      <div className="shop-wrapper">
        <h1 className="shop-title">Магазин</h1>
        <div className="shop-breadcrumbs">
          <div className="breadcrumbs-item">
            <div className="bread-link">
              <Link to="/" className="shop-link">
                Главная
              </Link>
              <span style={{ color: "#9c9c9c" }}>
                &nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;Магазин
              </span>
            </div>
            <div className="shop-add-product">
              <p onClick={() => navigate("/add")}>Добавить продукт</p>
              <AddBoxIcon sx={{ marginLeft: "5px", cursor: "pointer" }} />
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
