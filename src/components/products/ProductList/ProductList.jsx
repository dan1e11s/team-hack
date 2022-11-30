import React, { useContext, useEffect } from 'react';
import { useProduct } from '../../../contexts/ProductContextProvider';

const ProductList = () => {
  const { products, getProducts } = useProduct();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
