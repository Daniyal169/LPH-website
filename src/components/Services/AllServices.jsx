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
        title: "Cloud Services",
        description: "Providing reliable and scalable cloud solutions tailored to your business."
    },
    {
        icon: cyber,
        title: "Cyber Security",
        description: "Advanced cybersecurity measures to protect your business from online threats."
    },
    {
        icon: consul,
        title: "Consulting",
        description: "Expert consulting services to help your business grow and succeed."
    },
    {
        icon: enduser,
        title: "End-User Solutions",
        description: "Custom solutions designed for enhanced user experiences."
    },
    {
        icon: plan,
        title: "Strategic Planning",
        description: "Comprehensive strategies to take your business to the next level."
    },
    {
        icon: print,
        title: "Printing Services",
        description: "High-quality printing services for all your branding needs."
    },
    {
        icon: softsol,
        title: "Software Solutions",
        description: "Innovative software solutions crafted to meet your business demands."
    },
    {
        icon: support,
        title: "Customer Support",
        description: "Reliable support services to ensure satisfaction and loyalty."
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

                    <h1 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                        A Sneak Peek at Our Services
                    </h1>
                    <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-400">
                        We are a full-service IT company that provides customized solutions for your business needs. Whether you need software development, web design, cloud computing, or IT consulting, we have the expertise and experience to deliver high-quality results.
                    </p>
                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div key={index} className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
                            <div
                                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                style={{
                                    backgroundImage: "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                                    borderColor: "rgb(93, 79, 240)",
                                }}
                            >
                                <img src={card.icon} alt={card.title} className="h-6 w-6" />
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
