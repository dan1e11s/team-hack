import React, { useEffect } from 'react';
import { useProduct } from '../../contexts/ProductContextProvider';
import './Category.css';

const Category = () => {
  const { categories, getCategories } = useProduct();

  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories.results);

  return (
    <div className="category-wrapper">
      <div className="category-active">
        <span className="category-title">Все</span>
      </div>
      {categories.results?.map((item) => (
        <div key={item.title} className="category-block">
          <span className="category-title">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Category;
