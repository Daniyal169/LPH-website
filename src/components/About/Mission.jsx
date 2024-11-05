import React from 'react'
import "./Mission.css"

function Mission() {
    return (
        <div className="mission">
            <div className="missionUp">
                <div className="missionRight">
                    <h2>Our Mission</h2>
                    <p>At LPH, our mission is simple: to empower businesses through innovative technology solutions. We are driven by the desire to make technology accessible, efficient, and impactful, helping our clients achieve sustainable growth and competitive advantage. We believe that technology, when strategically leveraged, can be a powerful catalyst for change.</p>
                </div>
                <div className="vertical-line"></div>
                <div className="missionLeft">
                    <h2>Our Vision</h2>
                    <p>Our vision is to become a global leader in the provision of IT and digital transformation solutions. By embracing emerging technologies and fostering a culture of continuous innovation, we aim to set the standard for excellence in the tech industry, providing our clients with solutions that not only meet their current needs but also prepare them for the future.</p>
                </div>
            </div>
            <div className="missionDown mt-20">
                <section className="bg-gray-100 py-12 px-4">
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