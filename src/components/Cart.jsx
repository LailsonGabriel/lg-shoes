import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoeCardCart from './ShoeCardCart';
import { FiArrowLeft } from "react-icons/fi";
import '../style/cart.css';
import { ToastContainer } from 'react-toastify';

export default function Cart() {
  const { inCart } = useSelector(state => state.addToCart);

  return (
    <div>
      <ToastContainer
        position="top-center"
      />
      <Link to="/">
        <FiArrowLeft className="superior" />
      </Link>
      { inCart ? inCart.map((shoe, index) => (
        <ShoeCardCart
          key={index}
          image={shoe.image}
          title={shoe.title}
          id={shoe.id}
          price={shoe.price}
          quantity={shoe.quantity}
        />
      )) : <h1>Loading...</h1> }
      <div className="total-price">
        <h1>
          Total: 
          {' '}
          { inCart
            .reduce((acc, sum) => acc += sum.price * sum.quantity, 0)
            .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) 
          }
        </h1>
      </div>
    </div>
  );
}
