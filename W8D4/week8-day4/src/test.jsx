import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react'
import Card from './Components/Card';

function Test() {

    const baseURL = "http://localhost:3000/products"
    
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        if (!data) {
            try {
                const FetchData = async () => {
                    const response = await axios.get(baseURL)
                    setData(response.data)
                    setLoad(false)
                    console.log(response.data);
                }
                FetchData()
            } catch (error) {
                console.log(error);
            }
        }

    }, [])

    return (
        <>
            {
                load ? <i className="fa-solid fa-spinner"></i> :
                    data && data.map((product, id) => {
                        return <Fragment key={id}>
                            <Card img={product.img} name={product.name} price={product.price} for="ok" />
                        </Fragment>
                    })
            }
        </>
    )
}

export default Test