import React from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return( 
      <>
      <p>Cart is empty</p>
      </>
    );
  }

  return (
    <>
    {
      cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
    <p>{totalPrice()}</p>
    </>
  )
}

export default Cart