import React from 'react'
import Item from '../Item';
import "./itemList.css"


const ItemList = ({data}) => {
  return (
    <div className='merchandise'>
      {data.map(product=><Item key={product.id} data={product} />)}
    </div>
)}

export default ItemList