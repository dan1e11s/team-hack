import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  categories: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
    case 'GET_SEARCH':
      return { ...state, products: action.payload.results };
    case 'GET_ONE_PRODUCT':
      return { ...state, oneProduct: action.payload };
    case 'GET_CATEGORIES':
      return { ...state, categories: action.payload };
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
        `${API}shop/products${window.location.search}`
      );
      dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneProduct(id) {
    try {
      const { data } = await axios(`${API}shop/products/${id}/`);
      dispatch({
        type: 'GET_ONE_PRODUCT',
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
      await axios.post(`${API}shop/products/`, newProduct);
      navigate('/shop');
      getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  async function getSearch() {
    try {
      const res = await axios(
        `${API}shop/product_filter/${window.location.search}`
      );
      console.log(res);
      dispatch({
        type: 'GET_SEARCH',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const values = {
    products: state.products,
    categories: state.categories,
    oneProduct: state.oneProduct,

    getCategories,
    getProducts,
    getOneProduct,
    getSearch,
    addProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
