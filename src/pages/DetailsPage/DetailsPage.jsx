import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';
import ProductDetails from '../../components/products/ProductDetails/ProductDetails';

const Details = () => {
  const { oneProduct, getOneProduct } = useProduct();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return <ProductDetails oneProduct={oneProduct} />;
};

export default Details;
