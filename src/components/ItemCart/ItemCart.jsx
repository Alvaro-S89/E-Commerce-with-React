import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div>
      <img src={product.url} alt="" />
      <div>
        <p>Product: {product.name}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Price: {product.price}</p>
        <p>Total: {product.quantity * product.price}</p>
        <button onClick={() => removeProduct(product.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ItemCart;
