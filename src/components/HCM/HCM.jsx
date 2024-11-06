import React from 'react'
import vid from "../../asserts/video/try.mp4"
import { Link } from 'react-router-dom'


function HCM() {
    return (
        <>
            <div className="min-h-screen">

                <video autoPlay muted loop className="w-full opacity-20 relative object-cover">
                    <source src={vid} type="video/mp4" />
                </video>

                <div className="hero absolute">
                    <div className="w-full">

                        <div className="p-8 md:p-24">
                            <div className="text-7xl w-2/3 gap-4 bg-transparent text-clip mt-20">
                                <h1 className="heroHeading">
                                    Impulse HCM 360°
                                </h1>

                                <p className="text-gray-400 text-5xl ">
                                    We offer a range of features and tools to help businesses effectively manage their workforce, from recruitment and onboarding to payroll, performance
                                </p>
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/contact"
                                    className="btn"
                                >
                                    Request Demo<span aria-hidden="true" className='ml-2'> →</span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HCM