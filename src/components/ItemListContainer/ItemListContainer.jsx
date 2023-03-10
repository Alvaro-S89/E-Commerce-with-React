import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
// import Title from '../Title/Title'


const ItemListContainer = () => {

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

  return (
    <>
    {/* <Title greeting={props.text} /> */}
    <ItemList data={data} />
    </>
  )
}

export default ItemListContainer