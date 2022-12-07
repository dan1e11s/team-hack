import React, { useEffect } from 'react';
import { useProduct } from '../../../contexts/ProductContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import PaginationList from '../../PaginationList/PaginationList';

const ProductList = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="shopCards">
        {products ? (
          products.map((item) => <ProductCard key={item.slug} item={item} />)
        ) : (
          <h3>Loading</h3>
        )}
      </div>
      <div style={{ marginTop: '50px' }}>
        <PaginationList />
      </div>
    </>
  );
};

export default ProductList;
