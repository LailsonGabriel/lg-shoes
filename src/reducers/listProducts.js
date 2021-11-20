import { LIST_PRODUCTS, REQUEST_PRODUCTS } from "../actions";

const initialState = {
  products: [],
  loading: false
};

export const listProducts = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCTS: {
      return {
        ...state,
        products: [action.products],
        loading: false
      }
    }
    case REQUEST_PRODUCTS: {
      return {
        ...state,
        loading: true,
      }
    }
    default:
      return state;
  }
};