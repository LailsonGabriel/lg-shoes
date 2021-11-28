import React from 'react';
import '../style/showcard.css'
import { FaTrashAlt } from "react-icons/fa";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, increaseProduct } from '../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DecreaseQuantity, handleOrAddCart } from '../services/handleOrAddCart';

export default function ShoeCardCart({ id, title, image, price, quantity }) {
  const currentShoe = { id, title, image, price, quantity }; 
  const notify = () => toast.warn("Não temos mais no estoque");
  const dispatch = useDispatch();
  const { inCart } = useSelector(state => state.addToCart);
  const { products } = useSelector(state => state.listProducts);

  return (
    <div className="shoe-cart">
      <img src={ image } alt={ title } />
      <h3>{ title }</h3>
      <CgMathMinus onClick={ () => DecreaseQuantity(currentShoe, inCart, dispatch, increaseProduct) } />
      <p>Qtd: { quantity }</p>
      <CgMathPlus onClick={ () => handleOrAddCart(currentShoe, inCart, products, notify, dispatch, {}, increaseProduct) } />
      <p>
        { 
        (price * quantity)
        .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) 
        }
      </p>
      <FaTrashAlt onClick={() => dispatch(deleteProduct(id))}/>
    </div>
  );
}
