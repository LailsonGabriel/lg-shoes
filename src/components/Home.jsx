import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWithAxios } from '../actions';
import ShoeCard from './ShoeCard';
import { ToastContainer } from 'react-toastify';
import '../style/home.css';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

export default function Home() {
  const { products } = useSelector(state => state.listProducts);
  const { inCart } = useSelector(state => state.addToCart);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getWithAxios()), [dispatch]);

  return (
    <div className="principal">
      <ToastContainer
        position="top-center"
      />
      <Link to="/cart" className="superior">
        <FiShoppingCart />
        <p>{ inCart.reduce((acc, sum) => acc += 1, 0) }</p>
      </Link>
      { products[0] ? products[0].map((shoe, index) => (
        <ShoeCard
          key={index}
          id={ shoe.id }
          image={shoe.image}
          title={shoe.title}
          price={shoe.price}
        />
      )) : <h1>loading...</h1> }
    </div>
  );
}
