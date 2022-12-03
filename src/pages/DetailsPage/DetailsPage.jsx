import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';
import ProductDetails from '../../components/products/ProductDetails/ProductDetails';

const Details = () => {
  const { oneProduct, getOneProduct, reviews, getReviews } = useProduct();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    getReviews();
  }, []);

  return <ProductDetails oneProduct={oneProduct} reviews={reviews} />;
};

export default Details;
