import React from "react";

import CS from "../../asserts/img/CS.png";
import audio from "../../asserts/img/audio.png";
import keyboard from "../../asserts/img/keyboard.png";
import led from "../../asserts/img/led.png";
import network from "../../asserts/img/network.png";
import POS from "../../asserts/img/POS.png";
import tab from "../../asserts/img/tab.png";
import assesso from "../../asserts/img/assesso.png";
import train from "../../asserts/img/train.png";


// Define card data to map through for rendering
const cardData = [
    {
        icon: CS, // Replace with actual icon
        title: "Computer Systems & Accessories",
        description: "Desktop Computers: Brands like Lenovo, HP, Dell, Toshiba, Apple. Models: Office desktops, gaming PCs, high-performance workstations."
    },
    {
        icon: train, // Replace with actual icon
        title: "Laptops & Notebooks",
        description: "Brands: Lenovo, Toshiba, Dell, Apple. Categories: Business laptops, ultra-portable notebooks, performance laptops for creatives."
    },
    {
        icon: led, // Replace with actual icon
        title: "Touch Screens & Monitors",
        description: "Monitors: Brands like Samsung, LG, Dell, Lenovo. Types: Curved, 4K, ultra-wide, touchscreen, portable monitors."
    },

    {
        icon: keyboard, // Replace with actual icon
        title: "Keyboards & Input Devices",
        description: "Keyboards: Brands like Logitech, HP, Lenovo. Types: Wireless, mechanical, ergonomic, multi-device."
    },

    {
        icon: audio, // Replace with actual icon
        title: "Audio & Video Equipment",
        description: "Video Conferencing Systems: Brands like Polycom, Logitech, Cisco. Products: Cameras, microphones, speakers for business conferencing."
    },

    {
        icon: network, // Replace with actual icon
        title: "Networking Equipment",
        description: "Routers & Modems: Brands like Cisco, TP-Link, Netgear. Features: Business-grade, Wi-Fi 6, mesh, VPN."
    },


    {
        icon: tab, // Replace with actual icon
        title: "Tablets & Mobile Devices",
        description: "Tablets & iPads: Brands like Apple, Samsung, Lenovo. Applications: Portable business tools, education, field work."
    },
    {
        icon: assesso, // Replace with actual icon
        title: "Accessories",
        description: "Cases, keyboards, stands, chargers."
    },
    {
        icon: POS, // Replace with actual icon
        title: "POS Systems & Accessories",
        description: "POS Systems: Brands like Toshiba, Clover, HP, Square. Products: Terminals, cash registers, receipt printers."
    },

];



const HardwareSection = () => {
    return (
        <div className="bg-transparent mt-10">
            <section
                id="features"
                className="relative block px-6 py-2 md:py-6 md:px-10 "
            >
                <div className="relative mx-auto max-w-5xl text-center">

                    <h1 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl" data-aos="slide-right">
                        Enhance Your Business Efficiency with Our Cutting-Edge Hardware Solutions
                    </h1>
                    <p className="mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide text-gray-400" data-aos="fade-in">
                        Our comprehensive range of high-performance hardware, from desktops and laptops to networking equipment and POS systems, is designed to meet the demands of businesses of all sizes. We ensure seamless integration, robust security, and unparalleled productivity, helping you achieve optimal performance and business success.
                    </p>

                </div>

                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div key={index} className="rounded-md border border-neutral-900 bg-neutral-900/100 p-8 text-center shadow" data-aos="fade-up">
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

export default HardwareSection;
