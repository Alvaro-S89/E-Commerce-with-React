import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div>
      <div className="imgCartContainer">
      <img className="imgCart" src={product.url} alt={product.url} />
      </div>
      <div className="detailsCart">
        <p>Product: {product.productName}</p>
        <p>Quantity: {product.quantity}</p>
        <p>Price: {product.price}€</p>
        <p>Subtotal: {product.quantity * product.price}€</p>
        <button onClick={() => removeProduct(product.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ItemCart;
