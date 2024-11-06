import React from 'react'
import { Link } from 'react-router-dom'
import ceo from "../../asserts/img/ceo.png"

function HomeAbout() {
    return (
        <section class="py-6 relative xl:mr-0 lg:mr-5 mr-0">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div class="w-full lg:justify-start justify-center items-start flex">
                        <div
                            class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src={ceo} alt="about Us image" />
                        </div>
                    </div>
                    <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div class="w-full flex-col justify-center items-start gap-8 flex">
                            <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 class="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                                <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2
                                        class="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Welcome To LPH</h2>
                                    <p
                                        class="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                                        LPH is a multi-dimensional IT company specializing in product and project-based solutions for business clients worldwide. We provide a comprehensive set of IT trainings and development solutions, including Customer Relationship Management System (CRMS), Human Resource Management System (HRMS), Enterprise Resource Planning Management System (ERPMS), Data Center solutions, Mobile & Web App Development, UI/UX Design, Custom Development, Digital Marketing, Content Writing, Graphic Designing, Blockchain Development, and E-commerce</p>
                                    <p
                                        class="text-gray-100 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Owais Ahmad Khan has an entrepreneurial mindset and exceptional management skills, with over 15 years of experience in the IT industry. He has worked with renowned clients and has received several awards for his innovative solutions.</p>
                                </div>
                            </div>

                        </div>
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
        </section>
    )
}

export default HomeAbout