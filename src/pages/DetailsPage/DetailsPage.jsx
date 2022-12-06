import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductDetails from "../../components/products/ProductDetails/ProductDetails";

const Details = () => {
  const { oneProduct, getOneProduct, toggleLike } = useProduct();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    toggleLike(id);
  }, []);

  return <ProductDetails oneProduct={oneProduct} />;
};

export default Details;
