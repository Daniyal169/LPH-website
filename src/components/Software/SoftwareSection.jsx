import React from "react";

import OS from "../../asserts/img/OS.png";
import POS from "../../asserts/img/POS.png";
import prod from "../../asserts/img/prod.png";
import secu from "../../asserts/img/secu.png";


// Define card data to map through for rendering
const cardData = [
    {
        icon: OS,
        title: "Operating Systems",
        description: "Supported OS: Windows, macOS, Linux, Android, iOS"
    },
    {
        icon: POS, // Replace with actual icon
        title: "Productivity & Collaboration Tools",
        description: "Office Suites: Microsoft Office 365, Google Workspace. Project Management: Asana, Monday.com, Trello"
    },
    {
        icon: secu, // Replace with actual icon
        title: "Security & Network Management Software",
        description: "Security Solutions: Norton, McAfee, Fortinet firewall software. Network Management: Cisco Meraki, Ubiquiti UniFi for enterprise-level management"
    },
    {
        icon: prod, // Replace with actual icon
        title: "POS Software",
        description: "Brands: Square, Lightspeed, Clover. Features: Inventory management, reporting, CRM, payment processing"
    }
];



const SoftwareSection = () => {
    return (
        <div className="bg-transparent mt-10">
            <section
                id="features"
                className="relative block px-6 py-2 md:py-6 md:px-10 "
            >
                <div className="relative mx-auto max-w-5xl text-center">

                    <h1 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Optimize Your Workflow with Our Comprehensive Software Solutions
                    </h1>
                    <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        Our expert team provides innovative software solutions designed to streamline your business operations. From productivity and collaboration tools to advanced security systems, we offer user-friendly, scalable software that helps businesses of all sizes enhance efficiency, drive growth, and improve overall performance.
                    </p>

                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div key={index} className="rounded-md border border-neutral-900 bg-neutral-900/100 p-8 text-center shadow">
                            <div
                                className="button-text mx-auto flex h-28 w-28 items-center justify-center "

                            >
                                <img src={card.icon} alt={card.title} className="h-28 w-28" />
                            </div>

                            <h3 className="mt-6 text-gray-400">{card.title}</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SoftwareSection;
