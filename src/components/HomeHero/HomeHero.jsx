import React from 'react'
import "./HomeHero.css"
import { Link } from 'react-router-dom'
import vid from "../../asserts/video/try.mp4"
function HomeHero() {
    return (
        <>
            <div className="min-h-screen " data-aos="fade-in">

                <video autoPlay muted loop className="w-full opacity-20 relative object-cover">
                    <source src={vid} type="video/mp4" />
                </video>

                <div className="hero absolute">
                    <div className="w-full">

                        <div className="p-8 md:p-24">
                            <div className="text-7xl w-2/3 gap-4 bg-transparent text-clip">
                                <h1 className="heroHeading">
                                    Launch Point Holdings
                                </h1>

                                <p className="text-gray-400 heroText">
                                    Smart hardware for unstoppable growth.
                                </p>
                            </div>

                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to="/about"
                                    className="btn"
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

export default HomeHero