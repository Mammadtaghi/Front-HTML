import React, { useState } from 'react'
import Main from "./Main/main"
import { type } from '@testing-library/user-event/dist/type'

function Test() {

    const [search, setSearch] = useState('')
    const [searchFor , setSearchFor] = useState('name')

    const handleSelect=(e)=>{
        setSearchFor(e.value)
    }

    const handleInput = (e) => {
        setSearch(e.toLowerCase())
      }

    return (
        <>
            <input placeholder='Search...' onInput={(e) => handleInput(e.target.value)} />
            <select name="categorySelect" onChange={(e)=>handleSelect(e.target)} id="">
                <option value="id">ID</option>
                <option value="name" selected >Name</option>
                <option value="quantityPerUnit">QuantityPerUnit</option>
                <option value="reorderLevel">ReorderLevel</option>
                <option value="unitPrice">UnitPrice</option>
                <option value="unitsInStock">UnitsInStock</option>
                <option value="unitsOnOrder">UnitsOnOrder</option>
            </select>
            <Main search={search} searchFor={searchFor} />
        </>
    )
}

export default Test