import React from 'react'
import "./Mission.css"

function Mission() {
    return (
        <div className="mission">
            <div className="missionUp" data-aos="fade-up">
                <div className="missionRight" >
                    <h2>Our Mission</h2>
                    <p>To empower businesses with top-quality IT infrastructure and networking equipment, delivering comprehensive solutions that drive efficiency, security, and growth.</p>
                </div>
                <div className="vertical-line"></div>
                <div className="missionLeft">
                    <h2>Our Vision</h2>
                    <p>To be the one-stop destination in Saudi Arabia for all IT and networking hardware needs.</p>
                </div>
            </div>
            <div className="missionDown mt-20">
                <section className="bg-gray-100 py-12 px-4" data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-center text-gray-900">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
                        {[
                            { title: "Innovation", description: "We continuously explore new technologies and solutions to stay at the forefront of the IT industry." },
                            { title: "Integrity", description: "We believe in transparent and honest communication with our clients and within our team." },
                            { title: "Customer Focus", description: "Our clients' needs drive our decisions, and we aim to deliver solutions that exceed their expectations." },
                            { title: "Excellence", description: "We strive to achieve the highest standards in all that we do, ensuring quality and reliability in our services." }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl text-gray-900 font-bold">{value.title}</h3>
                                <p className="text-gray-700 mt-2">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Mission