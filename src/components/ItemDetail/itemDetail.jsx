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