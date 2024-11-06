import React from 'react'
import "./AboutHero.css"
import { Link } from 'react-router-dom'
import vid from "../../asserts/video/try.mp4"


function AboutHero() {
    return (
        <>
            <div className="min-h-screen">

                <video autoPlay muted loop className="w-full opacity-20 relative object-cover">
                    <source src={vid} type="video/mp4" />
                </video>

                <div className="hero absolute">
                    <div className="w-full">

                        <div className="p-8 md:p-24">
                            <div className="text-7xl w-2/3 gap-4 bg-transparent text-clip">
                                <h1 className="heroHeading">
                                    About Us
                                </h1>

                                <p className="text-gray-400 heroText">
                                    We are a Corporate
                                    Business Agency
                                </p>
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/contact"
                                    className="btn"
                                >
                                    Contact Us<span aria-hidden="true" className='ml-2'> →</span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHero