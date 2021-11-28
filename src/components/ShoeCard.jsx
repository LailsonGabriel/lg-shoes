import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart, increaseProduct } from '../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/showcard.css'
import { handleOrAddCart } from '../services/handleOrAddCart';

export default function ShoeCard({ id, image, price, title }) {
  const shoe = { id, image, price, title };
  const notify = () => toast.warn("Não temos mais no estoque");
  const dispatch = useDispatch();
  const { inCart } = useSelector(state => state.addToCart);
  const { products } = useSelector(state => state.listProducts);

  return (
    <div className="shoe-card">
      <img src={ image } alt={ title } />
      <h5>{ title }</h5>
      <p>{ price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }</p>
      <div>
        <button
          type="button"
          onClick={() => 
            handleOrAddCart(shoe, inCart, products, notify, dispatch, addCart, increaseProduct)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
