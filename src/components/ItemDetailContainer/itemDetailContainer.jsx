// import React, {useState, useEffect} from 'react'
// import { ItemDetail } from '../ItemDetail/ItemDetail'
// import { useParams } from 'react-router-dom'



// export const ItemDetailContainer = () => {

//   const url = "http://localhost:3000/products";
//   const [products, setProducts] = useState({})
//   const {detalleId} = useParams()

//   useEffect(() => {
//     const fetchProducts = async () => {
//         const response = await fetch(url);
//         const json = await response.json()

//         if(detalleId){
//             const filteredProducts = json.filter(products => products.detalleId === parseInt(detalleId));
//             setProducts(filteredProducts)
//         }else{
//             setProducts(json)
//         }
//     }
//     fetchProducts();
// }, [detalleId])


//   return (
//     <div>
//       <ItemDetail data={products}/> 
//     </div>
//   )
// }

// export default ItemDetailContainer;