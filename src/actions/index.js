import api from "../services/api";

export const ADD_TO_CART = 'ADD_TO_CART';
export const LIST_PRODUCTS = 'LIST_PRODUCTS';
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const INCREASE_PRODUCT = 'INCRESE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const addCart = (value) => ({
  type: ADD_TO_CART,
  newValue: value
});

export const listProducts = (value) => ({
  type: LIST_PRODUCTS,
  products: value
})

export const requestProduct = () => ({
  type: REQUEST_PRODUCTS,
})

export const increaseProduct = (increase) => ({
  type: INCREASE_PRODUCT,
  increase
})

export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  id
})


export function getWithAxios() {
  return (dispatch) => {
    api.get('http://localhost:5000/products')
      .then((response) => {
        dispatch({ type: LIST_PRODUCTS, products: response.data})
      })
  };
}