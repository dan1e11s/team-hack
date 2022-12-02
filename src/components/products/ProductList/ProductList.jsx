import React, { useEffect } from 'react';
import { useProduct } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
  const { products, getProducts } = useProduct();

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
        products.map((item) => (
          <ProductCard key={item.updated_at} item={item} />
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};

export default ProductList;
