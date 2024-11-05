import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../asserts/img/logo.png";

// Navigation Links
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false }, //Retail solution, Infrastructure solution,End user device
    // { name: 'Software Solutions', href: '/', current: false }, //consulting,systemintegration,cyber security
    { name: 'Contact Us', href: '/contact', current: false },
];

export default function Navbar() {
    return (
        <Disclosure as="nav" className="custom-navbar bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-40">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Logo on the left */}
                    <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link to={"/"} className="navLink">
                            <img src={Logo} alt="Logo" className="logo" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                        </Disclosure.Button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div className="hidden sm:block">
                            <div className="flex space-x-10">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="navLink"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (visible when open) */}
            <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Disclosure.Button
                            key={item.name}
                            as={Link}
                            to={item.href}
                            className="navLink block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
}
