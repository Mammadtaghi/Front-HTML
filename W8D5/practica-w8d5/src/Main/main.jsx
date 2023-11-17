import React, { useState } from 'react'
import "./main.css"
import useFetch from '../useFetch'
import Card from '../Card/card'

function Main(props) {

    const url = "https://northwind.vercel.app/api/products"

    const [data, setData] = useState()
    const [isEmpty, setIsEmpty] = useState(true)

    const getData = (mlt) => {
        if (isEmpty) {
            setData(mlt)
            setIsEmpty(false)
        }
    }

    useFetch(url, getData)

    console.log(data);

    console.log(props.search);

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>QuantityPerUnit</th>
                    <th>ReorderLevel</th>
                    <th>UnitPrice</th>
                    <th>UnitsInStock</th>
                    <th>UnitsOnOrder</th>
                </tr>
            </thead>
            <tbody>
                {data && data.sort((a,b)=>a[props.searchFor].toString().localeCompare(b[props.searchFor].toString(),undefined,{ numeric: 'true' })).filter((element) => element[props.searchFor].toString().toLowerCase().includes(props.search)).sort().map((element) => {
                    return <tr key={element.id}>
                        <Card {...element}></Card>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Main

// .map((element)=>{
//     return <tr key={element.id}>
//         <Card {...element}></Card>
//     </tr>
// })