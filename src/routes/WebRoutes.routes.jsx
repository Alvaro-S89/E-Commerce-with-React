import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar'
import Cart from '../components/Cart/cart';
import ItemDetailContainer from '../components/ItemDetailContainer/itemDetailContainer';
import CartProvider from '../context/CartContext';


const WebRoutes = () => {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer text="Tu tienda de confianza" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer text="Tu tienda de confianza" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details/:detailsId' element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default WebRoutes