import React, { useContext, useEffect } from 'react';
import { useProduct } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const { products, getProducts, categories } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 0 100px',
      }}
    >
      {products ? (
        products.map((item) => <ProductCard key={item.quantity} item={item} />)
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default ProductList;
