import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../asserts/img/logo.png"; // Corrected assets path

// Navigation Links
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Software Solutions', href: '/software', current: false },
    { name: 'Hardware Solutions', href: '/hardware', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
];

const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'IT Consulting', href: '/services/it-consulting' },
];

const hardware = [
    { name: 'Computer Systems', href: '/it-hardware/computer-systems' },
    { name: 'Touch Screens', href: '/it-hardware/touch-screens' },
    { name: 'Networking Equipment', href: '/it-hardware/networking' },
    { name: 'POS Systems', href: '/it-hardware/pos' },
];

const software = [
    { name: 'Operating Systems', href: '/it-software/operating-system' },
    { name: 'POS Software', href: '/it-software/pos-software' },
    { name: 'Security & Network', href: '/it-software/security-network' },
];

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState({
        services: false,
        hardware: false,
        software: false,
    });

    return (
        <Disclosure as="nav" className="custom-navbar bg-white">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-40">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Logo on the left */}
                    <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link to="/" className="navLink">
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
                                    item.name === 'Services' || item.name === 'Hardware Solutions' || item.name === 'Software Solutions' ? (
                                        <div
                                            key={item.name}
                                            className="navLink relative"
                                            onMouseEnter={() => setDropdownOpen(prev => ({ ...prev, [item.name.toLowerCase().replace(' ', '')]: true }))}
                                            onMouseLeave={() => setDropdownOpen(prev => ({ ...prev, [item.name.toLowerCase().replace(' ', '')]: false }))}
                                        >
                                            <Link to={item.href} className="navLink">
                                                {item.name}
                                            </Link>
                                            {dropdownOpen[item.name.toLowerCase().replace(' ', '')] && (
                                                <div className="absolute left-2 z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                                    <div className="flex flex-col p-4">
                                                        {(item.name === 'Services' ? services : item.name === 'Hardware Solutions' ? hardware : software).map((service) => (
                                                            <Link
                                                                key={service.name}
                                                                to={service.href}
                                                                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                            >
                                                                {service.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link key={item.name} to={item.href} className="navLink">
                                            {item.name}
                                        </Link>
                                    )
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
                    {/* Mobile Services Dropdown */}
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="navLink block px-3 py-2 rounded-md text-base font-medium">
                                    Services
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-6">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    {/* Mobile Hardware Dropdown */}
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="navLink block px-3 py-2 rounded-md text-base font-medium">
                                    Hardware Solutions
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-6">
                                    {hardware.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    {/* Mobile Software Dropdown */}
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="navLink block px-3 py-2 rounded-md text-base font-medium">
                                    Software Solutions
                                </Disclosure.Button>
                                <Disclosure.Panel className="pl-6">
                                    {software.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </Disclosure.Panel>
        </Disclosure>
    );
}
