import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../Components/Card'

function Details() {

  let {id} = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`).then(res=>res.json()).then(data=>setData(data))
  }, [])

  return (
    <div>
      <h3>This is Created By Albinoni</h3>
      <Card {...data}></Card>
    </div>
  )
}

export default Details