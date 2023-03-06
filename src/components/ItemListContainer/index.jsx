import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import Title from '../Title'


const ItemListContainer = (props) => {

const [data, setData] = useState([])



useEffect(() => {
const fetchData = async ()=> {
  const data = await fetch("http://localhost:3004/products")
  const json = await data.json()
  setData(json)
};
fetchData().catch(console.error)

},[])


  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <>
    <Title greeting={props.text} />
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer