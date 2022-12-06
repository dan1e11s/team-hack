import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart ? cart.products.length : 0;
}

const calcSubPrice = (product) => +product.count * product.getOneProduct.price;

const calcTotalPrice = (products) => {
  return products.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem('cart')),
  cartLength: getCountProductsInCart(),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'GET_CART':
      return { ...state, cart: action.payload };
    case 'GET_CART_LENGTH':
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
      localStorage.setItem(
        'cart',
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );

      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: 'GET_CART',
      payload: cart,
    });

    dispatch({
      type: 'GET_CART_LENGTH',
      payload: getCountProductsInCart(),
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      getOneProduct: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.getOneProduct.slug === product.slug
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.getOneProduct.slug !== product.slug
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem('cart', JSON.stringify(cart));

    getCart();
  };

  const changeProductCount = (count, slug) => {
    if (count < 0) {
      alert('Count of product can not be negative!');
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart'));

    cart.products = cart.products.map((product) => {
      if (product.getOneProduct.slug === slug) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));

    getCart();
  };

  const deleteProductInCart = (slug) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.products = cart.products.filter(
      (elem) => elem.getOneProduct.slug !== slug
    );

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem('cart', JSON.stringify(cart));

    getCart();
  };

  const checkProductInCart = (slug) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
      let newCart = cart.products.filter(
        (elem) => elem.getOneProduct.slug === slug
      );
      return newCart.length > 0 ? true : false;
    }
  };

  const checkProductInCartAgain = (slug) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart) {
      let newCart = cart.products.filter(
        (elem) => elem.getOneProduct.slug === slug
      );
      if (newCart.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const values = {
    checkProductInCartAgain,
    addProductToCart,
    getCart,
    changeProductCount,
    deleteProductInCart,
    checkProductInCart,

    cart: state.cart,
    cartLength: state.cartLength,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
