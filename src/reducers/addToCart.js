import { ADD_TO_CART, DELETE_PRODUCT, INCREASE_PRODUCT } from "../actions";

const initialState = {
  inCart: []
};

export const addToCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inCart: [...state.inCart, action.newValue]
      }
    case INCREASE_PRODUCT: {
      return {
        ...state,
        inCart: [...state.inCart.filter((shoe) => shoe.id !== action.id), action.incraese]
      }
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        inCart: [...state.inCart.filter((shoe) => shoe.id !== action.id)]
      }
    }
    default:
      return state;
  }

};