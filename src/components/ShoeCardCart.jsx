import React from 'react';
import '../style/showcard.css'
import { FaTrashAlt } from "react-icons/fa";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, increaseProduct } from '../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ShoeCardCart({ id, title, image, price, quantity }) {
  const currentShoe = { id, title, image, price, quantity }; 
  const notify = () => toast.warn("Não temos mais no estoque");
  const dispatch = useDispatch();
  const { inCart } = useSelector(state => state.addToCart);
  const { products } = useSelector(state => state.listProducts);

  function handleQuantiy(shoe, condition) {
    const showInCart = inCart.filter((current) => current.id === shoe.id)[0];
    const verifyInvetory = products[0].filter((crr) => crr.id === id)[0];
    if(showInCart.quantity === 1 && condition === 'less') return;
    if(showInCart.quantity === verifyInvetory.quantity && condition === 'more') return notify();
    const newProductMore = { ...showInCart, quantity: showInCart.quantity + 1 }
    const newProductLess = { ...showInCart, quantity: showInCart.quantity - 1 }
    dispatch(increaseProduct(id, condition === 'more' ? newProductMore : newProductLess))
  }

  return (
    <div className="shoe-cart">
      <img src={ image } alt={ title } />
      <h3>{ title }</h3>
      <CgMathMinus onClick={ () => handleQuantiy(currentShoe, 'less') } />
      <p>Qtd: { quantity }</p>
      <CgMathPlus onClick={ () => handleQuantiy(currentShoe, 'more') } />
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
