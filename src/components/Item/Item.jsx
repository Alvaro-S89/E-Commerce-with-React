import React from 'react'
import { NavLink } from 'react-router-dom'
// import CartWidget from '../CartWidget/CartWidget'
import Like from '../Like/Like'
import "./Item.css"

const Item = ({data}) => {

  return (
    <div className='productCard'>
        <div className='cardHeader'>
            <p>{data.productName}</p>
            <Like />
        </div>
        <NavLink to={`/details/${data.id}`}>
        <div className='cardImage'>
            <img src={data.url} alt="" />
        </div>
        </NavLink>
        <div className='cardFooter'>
          <p>view details</p>
          <p>{data.price}€</p>
            {/* <CartWidget /> */}
        </div>
    </div>
  )
}

export default Item