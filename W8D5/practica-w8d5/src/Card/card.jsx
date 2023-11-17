import React from 'react'

function Card({id, name, quantityPerUnit, reorderLevel, unitPrice, unitsInStock, unitsOnOrder}){
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{quantityPerUnit}</td>
      <td>{reorderLevel}</td>
      <td>{unitPrice}</td>
      <td>{unitsInStock}</td>
      <td>{unitsOnOrder}</td>
    </>
  )
}

export default Card