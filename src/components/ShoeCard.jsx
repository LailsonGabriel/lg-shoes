import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart, increaseProduct } from '../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/showcard.css'

export default function ShoeCard({ id, image, price, title }) {
  const notify = () => toast.warn("Não temos mais no estoque");
  const dispatch = useDispatch();
  const { inCart } = useSelector(state => state.addToCart);
  const { products } = useSelector(state => state.listProducts);

  function handleAddCart (id, image, price, title) {
    const shoeExistInCart = inCart.find((shoe) => shoe.id === id);
    const inventoryShoe = products[0].find((shoe) => shoe.id === id);
    const shoe = { id, image, price, title, quantity: 1 };
    if(shoeExistInCart?.quantity === inventoryShoe.quantity) return notify();
    if(shoeExistInCart !== undefined) return dispatch(increaseProduct(id, {
      ...shoe, quantity: shoeExistInCart.quantity + 1
    }));
    dispatch(addCart(shoe));
  }

  return (
    <div className="shoe-card">
      <img src={ image } alt={ title } />
      <h5>{ title }</h5>
      <p>{ price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }</p>
      <div>
        <button
          type="button"
          onClick={() => handleAddCart(id, image, price, title)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
