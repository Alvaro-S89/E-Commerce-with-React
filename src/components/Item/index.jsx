import React from 'react'
import CartWidget from '../CartWidget'
import Like from '../Like'
import "./item.css"

const Item = ({data}) => {

  return (
    <div className='productCard'>
        <div className='cardHeader'>
            <p>{data.productName}</p>
            <p>{data.price}</p>
        </div>
        <div className='cardImage'>
            img
        </div>
        <div className='cardFooter'>
            <Like />
            <CartWidget />
        </div>
    </div>
  )
}

export default Item