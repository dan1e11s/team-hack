import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'GET_ALL_PRODUCTS':
      return { ...state, products: action.payload.results };
    case 'GET_ONE_PRODUCT':
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const API = 'http://34.118.21.251/shop/products';

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    try {
      const { data } = await axios(`${API}/${window.location.search}`);
      dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const values = {
    products: state.products,

    getProducts,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
