import React from "react";
import time from "../../asserts/img/time.png";
import email from "../../asserts/img/email.png";
import phone from "../../asserts/img/phone.png";
import location from "../../asserts/img/location.png";

const ContactDetail = () => {
    return (
        <div className="bg-neutral-900/100 py-12 my-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-300 sm:text-4xl">
                        Location
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-100 lg:mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12">
                                    <img src={location} alt="Location Icon" className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-300">Address</dt>
                                <dd className="mt-2 text-base text-gray-100">
                                    Riyadh, Saudi Arabia
                                </dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12">
                                    <img src={phone} alt="Phone Icon" className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-300">Phone number</dt>
                                <dd className="mt-2 text-base text-gray-100">(555) 555-5555</dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12">
                                    <img src={email} alt="Email Icon" className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-300">Email</dt>
                                <dd className="mt-2 text-base text-gray-100">info@ourstore.com</dd>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12">
                                    <img src={time} alt="Store Hours Icon" className="w-8 h-8" />
                                </div>
                            </div>
                            <div className="ml-4">
                                <dt className="text-lg leading-6 font-medium text-gray-300">Store Hours</dt>
                                <dd className="mt-2 text-base text-gray-100">
                                    Monday - Friday: 9am to 8pm<br />
                                    Saturday: 10am to 6pm<br />
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;
