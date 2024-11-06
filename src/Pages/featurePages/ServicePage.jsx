import React from 'react'
import { useParams } from 'react-router-dom'

const ServicePage = () => {
    const { slug } = useParams()
    return (
        <>
            <div>ServicePage</div>
            <h1>Slug: {slug}</h1>
        </>
    )
}

export default ServicePage