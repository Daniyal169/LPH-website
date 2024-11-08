import React from 'react'
import "./AboutSection.css"
import ceo from "../../asserts/img/ceo.png"
import { Link } from 'react-router-dom'

function AboutSection() {
    return (
        <section class="py-6 relative xl:mr-0 lg:mr-5 mr-0">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div class="w-full flex-col justify-center items-start gap-8 flex">
                            <div class="flex-col justify-start lg:items-start items-center gap-4 flex" data-aos="slide-right">
                                <h6 class="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        The Tale of Our Achievement Story</h2>
                                    <p
                                        class="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Launch Point Holding Company LLC is a premier provider of IT hardware and networking solutions, based in Saudi Arabia Head Quarter, Global Presence USA | UK | China |. With an extensive catalog spanning a wide range of leading global brands, we cater to diverse business requirements—ensuring that our clients find exactly what they need, when they need it</p>
                                </div>
                            </div>
                            <div class="w-full flex-col justify-center items-start gap-6 flex" data-aos="slide-right">
                                <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 class="text-gray-200 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                        <p class="text-gray-300 text-base font-normal leading-relaxed">Influencing Digital
                                            Landscapes Together</p>
                                    </div>
                                    <div
                                        class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 class="text-gray-200 text-2xl font-bold font-manrope leading-9">125+ Projects
                                        </h4>
                                        <p class="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                            Through Success</p>
                                    </div>
                                </div>
                                <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                    <div
                                        class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 class="text-gray-200 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                        <p class="text-gray-300 text-base font-normal leading-relaxed">Our Dedication to
                                            Innovation Wins Understanding</p>
                                    </div>
                                    <div
                                        class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                        <h4 class="text-gray-200 text-2xl font-bold font-manrope leading-9">99% Happy
                                            Clients</h4>
                                        <p class="text-gray-300 text-base font-normal leading-relaxed">Mirrors our Focus on
                                            Client Satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="mailto:daniyalsohail47@gmail.com"
                                className="btn"
                            >
                                Contact Us<span aria-hidden="true" className='ml-2'> →</span>
                            </Link>

                        </div>
                    </div>
                    <div class="w-full lg:justify-start justify-center items-start flex" data-aos="slide-left">
                        <div
                            class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src={ceo} alt="about Us image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutSection