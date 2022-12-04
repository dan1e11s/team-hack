import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productsCount: 0,
  categories: [],
  oneProduct: null,
  reviews: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return { ...state, products: action.payload.results };
    case 'GET_COUNT_PRODUCTS':
      return { ...state, productsCount: action.payload.count };
    case 'GET_ONE_PRODUCT':
      return { ...state, oneProduct: action.payload };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
    case 'GET_REVIEWS':
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
}

const API = 'http://34.116.219.34/';

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const { data } = await axios(
        `${API}shop/product_filter/${window.location.search}`
      );
      dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getCountProducts() {
    try {
      const { data } = await axios(`${API}shop/products/`);
      dispatch({
        type: 'GET_COUNT_PRODUCTS',
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProduct(id) {
    try {
      const { data } = await axios(`${API}shop/product_filter/${id}/`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getCategories() {
    try {
      const { data } = await axios(`${API}shop/categories`);
      dispatch({
        type: 'GET_CATEGORIES',
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function addProduct(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}shop/products/`, newProduct, config);
      navigate('/shop');
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function editProduct(slug, editedProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.patch(`${API}shop/products/${slug}/`, editedProduct, config);
      navigate('/shop');
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(id, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}shop/products/${id}/`, config);
      navigate('/shop');
    } catch (err) {
      console.log(err);
    }
  }

  async function getReviews() {
    try {
      const res = await axios(`${API}shop/comments/`);
      dispatch({
        type: 'GET_REVIEWS',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const values = {
    products: state.products,
    productsCount: state.productsCount,
    categories: state.categories,
    oneProduct: state.oneProduct,
    reviews: state.reviews,

    getCategories,
    getProducts,
    getCountProducts,
    getOneProduct,
    addProduct,
    getReviews,
    deleteProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
