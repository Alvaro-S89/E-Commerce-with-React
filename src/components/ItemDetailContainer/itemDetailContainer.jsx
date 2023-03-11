import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';



export const ItemDetailContainer = () => {

  const [data, setData] = useState([])

  const {detailsId} = useParams()
  
  useEffect(() => {
  const fetchData = async ()=> {
    const data = await fetch("http://localhost:3004/products")
    const json = await data.json()
    if (detailsId) {
    const jsonFiltered = json.find(product => product.id === parseInt(detailsId));
    setData(jsonFiltered)
  } else {
    setData(json)
  }
  };
  fetchData()
  
  },[detailsId])


  return (
    <div>
      <ItemDetail data={data}/> 
    </div>
  )
}

export default ItemDetailContainer;