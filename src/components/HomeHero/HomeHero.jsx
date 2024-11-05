import React from 'react'
import "./HomeHero.css"
import { Link } from 'react-router-dom'

function HomeHero() {
    return (

        <div className="hero">

            <div >
                <div className="text-center">
                    <h1 className="heroHeading">

                        Welcome to Launch Point Holdings
                    </h1>
                    <p className="heroText">
                        Empowering Your Business with Advanced IT Solutions and Services
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="mailto:daniyalsohail47@gmail.com"
                            className="btn"
                        >
                            Learn More<span aria-hidden="true" className='ml-2'> →</span>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeHero