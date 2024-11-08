import React from 'react';
import "./Contact.css";

function Contact() {
    return (
        <div className="contact w-full">
            <h1 className="text-center text-3xl font-bold">Contact Me</h1>
            <div className="contactContainer w-full">
                <div className="contLeft w-full" data-aos="fade-up">
                    <form className="max-w-xl w-full mx-auto">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 w-full">
                            <div className="w-full">
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
                            <div className="w-full">
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
                            <div className="sm:col-span-2 w-full">
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
                            <div className="sm:col-span-2 w-full">
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
                            <div className="sm:col-span-2 w-full">
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
                            <button type="submit" className="btn">
                                Submit Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
}

export default Contact;
