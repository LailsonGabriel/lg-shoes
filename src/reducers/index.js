import { addToCart } from './addToCart';
import { listProducts } from './listProducts';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  addToCart, listProducts
});