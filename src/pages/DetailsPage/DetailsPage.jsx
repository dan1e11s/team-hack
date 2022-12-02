import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';

const Details = () => {
  const { oneProduct, getOneProduct } = useProduct();

  const { id } = useParams();
  console.log(oneProduct);

  useEffect(() => {
    getOneProduct(id);
  }, []);

  return <div>Details</div>;
};

export default Details;
