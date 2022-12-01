import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductList from '../../components/products/ProductList/ProductList';
import './ShopPage.css';

const ShopPage = () => {
  return (
    <div className="shop-box">
      <div>
        <h1 className="shop-title">Магазин</h1>
        <div className="shop-breadcrumbs">
          <div>
            <Link to="/" className="shop-link">
              Главная
            </Link>
            &nbsp;&nbsp;&nbsp;—&nbsp;&nbsp;&nbsp;Магазин
          </div>
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default ShopPage;
