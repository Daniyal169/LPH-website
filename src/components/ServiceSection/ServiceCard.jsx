import React from 'react'
import "./ServiceCard.css"

function ServiceCard({ image, heading, detail }) {
    return (
        <div className="ServiceCard">
            <img src={image} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    )
}

export default ServiceCard