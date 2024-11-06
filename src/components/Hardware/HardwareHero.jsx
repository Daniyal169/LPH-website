import React from 'react'
import { Link } from 'react-router-dom'
import vid from "../../asserts/video/try.mp4"

function HardwareHero() {
    return (
        <>
            <div className="relative min-h-screen sm:h-[60vh] md:h-screen" data-aos="fade-in">
                <video autoPlay muted loop className="w-full h-full opacity-20 absolute top-0 left-0 object-cover">
                    <source src={vid} type="video/mp4" />
                </video>

                <div className="hero absolute w-full h-full flex items-center justify-center">
                    <div className="w-full">

                        <div className="p-8 md:p-16 sm:p-12">
                            <div className="text-5xl sm:text-6xl md:text-7xl w-full  gap-4 bg-transparent text-clip">
                                <h1 className="heroHeading text-white">
                                    Hardware Solutions
                                </h1>

                                <p className="text-gray-400 heroText w-full">
                                    Our team ensures that your infrastructure ready for the future.
                                </p>
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/about"
                                    className="btn text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-300"
                                >
                                    Learn More<span aria-hidden="true" className='ml-2'> →</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HardwareHero