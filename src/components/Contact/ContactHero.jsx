import React from 'react';

function ContactHero() {
    return (
        <div className="sm:flex items-center max-w-screen-xl mx-auto">
            <div className="sm:w-1/2 p-10">
                <div className="image object-center text-center" data-aos="slde-right">
                    <img src="https://i.imgur.com/WbQnbas.png" alt="Our Company" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text" data-aos="fade-in">
                    <span className="text-gray-500 border-b-2  uppercase">Lets Connect</span>
                    <h1 className="my-4 font-bold text-3xl sm:text-4xl">
                        Contact Us
                    </h1>
                    <p className="text-gray-300">
                        Whether you have a project in mind, need IT solutions, or want to enhance your skills through professional training, LPH is your trusted partner. Our dedicated team is here to assist you.
                    </p>
                    <p className="text-gray-300 mt-2">
                        Whether you have a project in mind, need IT solutions, or want to enhance your skills through professional training, LPH is your trusted partner. Our dedicated team is here to assist you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
