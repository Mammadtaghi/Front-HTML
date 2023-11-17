import { Fragment, useState } from 'react';
import React from 'react'
import Card from './Components/Card';
import FetchData from './test2';

function Test() {

    const baseURL = "https://northwind.vercel.app/api/categories"
    
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(true)

    const LogOut=(data)=>{
        if (load) {
            console.log(data)
            setData(data)
            setLoad(false)
        }
    }

    FetchData(baseURL, LogOut)

    return (
        <>
            {
                load ? <i className="fa-solid fa-spinner"></i> :
                    data && data.map((product, id) => {
                        return <Fragment key={id}>
                            <Card img={product.img} name={product.name} price={product.price} />
                        </Fragment>
                    })
            }
        </>
    )
}

export default Test