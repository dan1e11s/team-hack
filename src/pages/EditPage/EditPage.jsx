import React, { useEffect } from 'react';
import EditProduct from '../../components/products/EditProduct/EditProduct';
import { useProduct } from '../../contexts/ProductContextProvider';

const EditPage = () => {
  const { categories, getCategories } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div
      style={{
        maxWidth: '1150px',
        height: '100vh',
        margin: '70px auto 0',
        textAlign: 'center',
      }}
    >
      <h3 style={{ fontSize: '25px', marginBottom: '40px' }}>
        Обновление продукта
      </h3>
      <EditProduct categories={categories} />
    </div>
  );
};

export default EditPage;
