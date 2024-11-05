import React from 'react'
import "./ServicesHero.css"
import { Link } from 'react-router-dom'

function ServicesHero() {
    return (
        <div className="serviceHero">
            <div className="text-center">
                <h1 className="serviceHeading">

                    Delivering the Best IT Services
                    for Your Business Needs
                </h1>
                <p className="serviceText">
                    Choose LPH, a reliable IT services provider for your business growth.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="mailto:daniyalsohail47@gmail.com"
                        className="btn"
                    >
                        Contact Us<span aria-hidden="true" className='ml-2'> →</span>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default ServicesHero