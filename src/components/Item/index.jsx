import React from 'react'
import { NavLink } from 'react-router-dom'
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
        <NavLink to={`/details/${data.id}`}>
        <div className='cardImage'>
            img
        </div>
        </NavLink>
        <div className='cardFooter'>
            <Like />
            <CartWidget />
        </div>
    </div>
  )
}

export default Item