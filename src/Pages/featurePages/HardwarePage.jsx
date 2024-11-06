import React from 'react'
import { useParams } from 'react-router-dom'

const HardwarePage = () => {
    const { slug } = useParams()
    return (
        <>
            <div>HardwarePage</div>
            <h1>Slug: {slug}</h1>
        </>
    )
}

export default HardwarePage