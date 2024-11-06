import React from "react";

import cloud from "../../asserts/img/cloud.png";
import cyber from "../../asserts/img/cyber.png";
import consul from "../../asserts/img/consul.png";
import enduser from "../../asserts/img/enduser.png";
import plan from "../../asserts/img/plan.png";
import print from "../../asserts/img/print.png";
import softsol from "../../asserts/img/softsol.png";
import support from "../../asserts/img/support.png";

// Define card data to map through for rendering
const cardData = [
    {
        icon: cloud,
        title: "Payroll Management",
        description: "Efficiently manage payroll processing to ensure timely and accurate payments."
    },
    {
        icon: cyber,
        title: "Attendance Tracking",
        description: "Track employee attendance seamlessly to maintain accurate records."
    },
    {
        icon: consul,
        title: "Performance Evaluation",
        description: "Evaluate employee performance with robust tracking and assessment tools."
    },
    {
        icon: enduser,
        title: "Employee Self-Service",
        description: "Empower employees to manage their profiles and access information."
    },
    {
        icon: plan,
        title: "Job Portal",
        description: "Streamlined job posting and application process for effective hiring."
    },
    {
        icon: print,
        title: "Task Management",
        description: "Organize and prioritize tasks for enhanced team productivity."
    },
    {
        icon: softsol,
        title: "Loan Management",
        description: "Manage employee loan requests and tracking efficiently."
    },
    {
        icon: support,
        title: "Letters and Forms",
        description: "Generate essential letters and forms to streamline documentation."
    },
    {
        icon: support,
        title: "Custody Management",
        description: "Track and manage custody of company assets and resources."
    },
    {
        icon: support,
        title: "End of Service",
        description: "Ensure smooth end-of-service processing for departing employees."
    },
    {
        icon: support,
        title: "Decision Management",
        description: "Make data-driven decisions with comprehensive management tools."
    }
];


const HCMSection = () => {
    return (
        <div className="bg-transparent">
            <section
                id="features"
                className="relative block px-6 py-2 md:py-6 md:px-10 "
            >
                <div className="relative mx-auto max-w-5xl text-center">

                    <h1 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        Streamline Your Processes with Our Impulse HCM 360°
                    </h1>
                    <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        Our specialized team ensures to provide a user-friendly interface and flexibility, making it accessible for companies of different sizes and industries. We also aim to enhance HR efficiency, reduce manual work, and improve overall human resource operations, leading to increased productivity and employee satisfaction.
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

export default HCMSection;
