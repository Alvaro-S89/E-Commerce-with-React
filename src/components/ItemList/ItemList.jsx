import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Item from '../Item/Item';
import "./ItemList.css"


const ItemList = ({data}) => {

  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get('q') ?? '';

  const handleInput = ({target}) => {
    const {value} = target
    setSearchParams({q : value})
  }

  return (
    <>
    <div className='searchBar'>
      <input 
        type="search" 
        value={query} 
        name="filter" 
        placeholder="Search product" 
        onChange={handleInput}
      />
      <i className="bi bi-search"></i>
    </div>
    <div className='merchandise'>
      {data.filter(({productName}) => {
        if(!query) return true
          else {
          const nameLowerCase = productName.toLowerCase()
            return nameLowerCase.includes(query.toLowerCase())
          }
      })
      .map((product) => {
        return (
          <Item key={product.id} data={product} />  
        )
      })
      }
    </div>
    </>
  )}

export default ItemList