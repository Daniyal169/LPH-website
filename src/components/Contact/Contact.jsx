import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css"

function Contact() {


    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <div className="contactConatiner">
                <div className="contLeft">
                    <form className="max-w-xl">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <div className="mt-2.5">
                                    <input
                                        id="first-name"
                                        name="firstName"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full bg-transparent border-b border-gray-300 px-3.5 py-2 text-gray-300 placeholder:text-gray-300 focus:border-indigo-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-2.5">
                                    <input
                                        id="last-name"
                                        name="lastName"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full bg-transparent border-b border-gray-300 px-3.5 py-2 text-gray-300 placeholder:text-gray-300 focus:border-indigo-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full bg-transparent border-b border-gray-300 px-3.5 py-2 text-gray-300 placeholder:text-gray-300 focus:border-indigo-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <input
                                        id="phone-number"
                                        name="phoneNumber"
                                        type="tel"
                                        autoComplete="tel"
                                        className="block w-full bg-transparent border-b border-gray-300 px-3.5 py-2 text-gray-300 placeholder:text-gray-300 focus:border-indigo-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full bg-transparent border-b border-gray-300 px-3.5 py-2 text-gray-300 placeholder:text-gray-300 focus:border-indigo-600 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Message"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="btn" >
                                Submit Now
                            </button>
                        </div>
                    </form>
                </div>
                <div className="contRight">
                    <div className="contRightUp">
                        <p>Please fill out the form below, & we will get back to you as soon as possible.</p>
                        <div className="contactMail">
                            <img src="https://cdn.prod.website-files.com/660fed9ccca978270ae11ace/66823bee5eff85ce38413f2a_ic-email.svg" alt="" />
                            <Link to={"mailto:daniyalsohail47@gmail.com"}>lph@gmail.com</Link>
                        </div>
                    </div>
                    <div className="contRightDown">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZluNL4ku9NGNLGuowo-StCAE3toxb5zwmlA&s" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
