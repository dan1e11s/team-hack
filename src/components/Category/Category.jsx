import React, { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';
import './Category.css';

const Category = () => {
  const { categories, getCategories } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);
  const { getProducts } = useProduct();

  const location = useLocation();
  const category = location.search.substr(3, location.search.length);

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const search = new URLSearchParams(location.search);

  useEffect(() => {
    if (query === '') {
      search.delete(query);
    } else {
      search.set(query, '');
    }
    setSearchParams({
      q: query,
    });
  }, [query]);

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="category-wrapper">
      <div
        className={
          '?page=1' === location.search || category === ''
            ? 'category-active'
            : 'category-block'
        }
      >
        <span className="category-title" onClick={() => setQuery('')}>
          Все
        </span>
      </div>
      {categories.results?.map((item) => (
        <div
          key={item.title}
          className={
            item.slug === category ? 'category-active' : 'category-block'
          }
        >
          <span
            className="category-title"
            onClick={() => {
              setQuery(item.slug);
            }}
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Category;
