import React from 'react'
import "./AllServices.css"
import ServiceBox from './ServiceBox'

function AllServices() {
    return (
        <div className="allServices">
            <h1>Our Versatile Services</h1>
            <p>We are a full-service IT company that provides customized solutions for your business needs. Whether you need software development, web design, cloud computing, or IT consulting, we have the expertise and experience to deliver high-quality results.</p>

            <div className="servicesBoxes">
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
                <ServiceBox />
            </div>
        </div>
    )
}

export default AllServices