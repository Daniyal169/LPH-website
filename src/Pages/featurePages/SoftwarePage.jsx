import React from 'react'
import { useParams } from 'react-router-dom'

const SoftwarePage = () => {
    const { slug } = useParams()
    return (
        <>
            <div>SoftwarePage</div>
            <h1>Slug: {slug}</h1>
        </>
    )
}

export default SoftwarePage