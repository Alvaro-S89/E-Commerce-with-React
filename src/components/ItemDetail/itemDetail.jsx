import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'


const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity);
  }

  return (
    <div className='productsContainer'>
      <div className='imgDetailContainer'>
        <img className='imgDetail' src={data.url} alt="" />
      </div>
      <div className='description'>
      <h1>{data.productName}</h1>
      <p>{data.desc}</p>
      {
        goToCart 
        ? <NavLink className="addToCart" to='/cart'>Go to cart</NavLink> 
        : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      }
      </div>
    </div>
  )
}

export default ItemDetail

















// import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
// import { ItemCount } from '../ItemCount/ItemCount'

// export const ItemDetail = ({data}) => {

//   const [goToCart, setGoToCart] = useState(false)

//   const onAdd = (quantity) =>{
//     setGoToCart(true)
// }

//   return (
//     <div className='container'>
//       {/* <img src={data.url} alt="" width='100'/> */}
//       <div className='content'>
//         <h1>{data.name}adios</h1>
//         {
//           goToCart ? 
//           <Link to='/cart'>finalizar compra</Link>
//           :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
//         }

//       </div>
//     </div>
//   )
// }


// export default ItemDetail