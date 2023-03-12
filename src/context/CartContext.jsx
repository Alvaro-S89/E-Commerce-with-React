import React, { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);


    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(product => product.id !==item.id)
        newCart.push({...item, quantity: newQuantity})
        setCart(newCart)
    }

    const totalPrice = () => cart.reduce((accumulator, current) => accumulator + current.quantity * current.price, 0);

    const totalProducts = () => cart.reduce((acc, cur) => acc + cur.quantity, 0);

const clearCart = () => setCart([]);

const isInCart = (id) => {
    return cart.find(product => product.id === id) ? true : false;
}

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])


  return (
    <CartContext.Provider value= {{
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        totalProducts,
        cart
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider