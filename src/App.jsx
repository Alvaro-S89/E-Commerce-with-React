import './App.css';
import Cart from './components/Cart/cart';
// import ItemDetailContainer from './components/ItemDetailContainer/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer text="Tu tienda de confianza" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer text="Tu tienda de confianza" />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/detalle' element={<ItemDetailContainer />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
