import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import Title from '../Title'


const ItemListContainer = (props) => {

const [data, setData] = useState([])

const {categoryId} = useParams()

useEffect(() => {
const fetchData = async ()=> {
  const data = await fetch("http://localhost:3004/products")
  const json = await data.json()
  if (categoryId) {
  const jsonFiltered = json.filter(product => product.category === categoryId);
  setData(jsonFiltered)
} else {
  setData(json)
}
};
fetchData()

},[categoryId])


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