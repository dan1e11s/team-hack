import React, { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useProduct } from '../../contexts/ProductContextProvider';
import { useSearchParams } from 'react-router-dom';
import './PaginationList.css';

export default function PaginationList() {
  const { getProducts, getCountProducts, productsCount, products } =
    useProduct();

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts();
    getCountProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  function handlePage(e, value) {
    setCurrentPage(value);
  }

  return (
    <Pagination
      className="pagination-block"
      page={currentPage}
      onChange={handlePage}
      count={Math.ceil(productsCount / 9)}
      variant="outlined"
      shape="rounded"
    />
  );
}
