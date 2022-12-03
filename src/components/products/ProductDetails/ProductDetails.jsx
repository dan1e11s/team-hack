import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ oneProduct }) => {
  return (
    <div className="details-main-box">
      <div>
        <h3>{oneProduct ? oneProduct.title : ''}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
