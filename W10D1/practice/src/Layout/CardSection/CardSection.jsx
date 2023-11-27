import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card'
import './CardSection.css'
import { useParams } from 'react-router-dom'

function CardSection() {

    const [data, setData] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/products').then(res=>res.json()).then(data=>setData(data))
    }, [])


    return (
        <section>
            {data && data.filter((item => item.id <= 6)).map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </section>
    )
}

export default CardSection