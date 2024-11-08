import React from "react";

import consulation from "../../asserts/img/consulation.png";
import maintain from "../../asserts/img/maintain.png";
import setup from "../../asserts/img/setup.png";
import train from "../../asserts/img/train.png";

// Define card data to map through for rendering
const cardData = [
    {
        icon: setup,
        title: "Installation & Setup",
        description: "We provide thorough setup, installation, and integration for equipment, tailored to meet your environment’s needs."
    },
    {
        icon: maintain,
        title: "Maintenance & Support",
        description: "Reliable support and maintenance packages to minimize downtime and ensure consistent operations for your business."
    },
    {
        icon: consulation,
        title: "Consulting & Procurement",
        description: "Receive expert advice on selecting the best hardware and software, customized to fit your unique business needs."
    },
    {
        icon: train,
        title: "Training Programs",
        description: "Comprehensive staff training on new hardware and software, boosting productivity and enhancing efficiency overall."
    }
];


const AllServices = () => {
    return (
        <div className="bg-transparent">
            <section
                id="features"
                className="relative block px-6 py-2 md:py-6 md:px-10 "
            >
                <div className="relative mx-auto max-w-5xl text-center">

                    <h1 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl" data-aos="slide-right">
                        A Sneak Peek at Our Services
                    </h1>
                    <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-400" data-aos="fade-in">
                        We are a full-service IT company that provides customized solutions for your business needs. Whether you need software development, web design, cloud computing, or IT consulting, we have the expertise and experience to deliver high-quality results.
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div key={index} className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow" data-aos="fade-up">
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

export default AllServices;
