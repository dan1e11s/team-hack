import React from 'react';
import AddProduct from '../../components/products/AddProduct/AddProduct';

const AddProductPage = () => {
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
        Добавление продукта
      </h3>
      <AddProduct />
    </div>
  );
};

export default AddProductPage;
