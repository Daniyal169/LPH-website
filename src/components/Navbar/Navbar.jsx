import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../asserts/img/logo.png";
import app from "../../asserts/img/app.png";
import cloud from "../../asserts/img/cloud.png";
import cyber from "../../asserts/img/cyber.png";
import enduser from "../../asserts/img/enduser.png";
import monitor from "../../asserts/img/monitor.png";
import system from "../../asserts/img/system.png";
import support from "../../asserts/img/support.png";
import consulation from "../../asserts/img/consulation.png";
import network from "../../asserts/img/network.png";
import audio from "../../asserts/img/audio.png";

// Merged Services (including hardware and software)
const services = [
    { name: 'Installation', href: '/services/installation', img: system },
    { name: 'Maintenance', href: '/services/mainteinance', img: enduser },
    { name: 'Training', href: '/services/training', img: consulation },
    { name: 'Consulation', href: '/services/consulation', img: support },
];

const hardware = [
    { name: 'Computer Systems', href: '/it-hardware/computer-systems', img: enduser },
    { name: 'Touch Screens', href: '/it-hardware/touch-screens', img: app },
    { name: 'Networking Equipment', href: '/it-hardware/networking', img: network },
    { name: 'Audio & Video', href: '/it-hardware/audio', img: audio },
    { name: 'POS Systems', href: '/it-hardware/pos', img: cloud },
];

const software = [
    { name: 'Operating Systems', href: '/it-software/operating-system', img: monitor },
    { name: 'POS Software', href: '/it-software/pos-software', img: system },
    { name: 'Security & Network', href: '/it-software/security-network', img: cyber },
];

// Navigation Links
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about', current: false },
];

const contactHCM = [
    { name: 'HCM', href: '/hcm', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle the mobile menu

    const toggleMenu = () => {
        setMenuOpen(prev => !prev); // Toggle the menu state
    };

    const closeMenu = () => {
        setMenuOpen(false); // Close menu when a link is clicked
    };

    return (
        <header className='shadow-md bg-white font-[sans-serif] tracking-wide relative'>
            <section className="flex items-center justify-between py-2 border-gray-200 border-b min-h-[40px]">
                <Link to="/" className="shrink-0 flex justify-center items-center flex-grow">
                    <img src={Logo} alt="logo" className="w-[80px] sm:w-[80px]" />
                </Link>

                {/* Hamburger Button for Mobile */}
                <button className="lg:hidden text-gray-600" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </button>
            </section>

            {/* Mobile Menu Toggle */}
            <div className={`lg:flex flex-wrap justify-center px-10 py-3 relative ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto'>
                    {navigation.map((item) => (
                        <li key={item.name} className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                            <Link
                                to={item.href}
                                className={`hover:text-[#08b35f] ${item.current ? 'text-[#08b35f]' : 'text-gray-600'} font-semibold block text-[15px]`}
                                onClick={closeMenu} // Close menu on click
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    {/* Services Dropdown */}
                    <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                        <Link
                            to="/services"
                            className='hover:text-[#08b35f] hover:fill-[#08b35f] text-gray-600 font-semibold text-[15px] block'
                            onClick={closeMenu} // Close menu on click
                        >
                            Services
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                            </svg>
                        </Link>
                        <ul className="absolute top-5 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                            {services.map((service) => (
                                <li key={service.name} className="border-b py-3 flex items-center gap-3">
                                    <img src={service.img} alt={service.name} className="w-10 h-10 object-cover" />
                                    <Link
                                        to={service.href}
                                        className="hover:text-[#08b35f] text-gray-600 font-semibold text-[15px] block"
                                        onClick={closeMenu} // Close menu on click
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* Hardware Solutions Dropdown */}
                    <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                        <Link
                            to="/it-hardware"
                            className='hover:text-[#08b35f] hover:fill-[#08b35f] text-gray-600 font-semibold text-[15px] block'
                            onClick={closeMenu} // Close menu on click
                        >
                            Hardware Solutions
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                            </svg>
                        </Link>
                        <ul className="absolute top-5 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                            {hardware.map((item) => (
                                <li key={item.name} className="border-b py-3 flex items-center gap-3">
                                    <img src={item.img} alt={item.name} className="w-10 h-10 object-cover" />
                                    <Link
                                        to={item.href}
                                        className="hover:text-[#08b35f] text-gray-600 font-semibold text-[15px] block"
                                        onClick={closeMenu} // Close menu on click
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* Software Solutions Dropdown */}
                    <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
                        <Link
                            to="/it-software"
                            className='hover:text-[#08b35f] hover:fill-[#08b35f] text-gray-600 font-semibold text-[15px] block'
                            onClick={closeMenu} // Close menu on click
                        >
                            Software Solutions
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                            </svg>
                        </Link>
                        <ul className="absolute top-5 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                            {software.map((item) => (
                                <li key={item.name} className="border-b py-3 flex items-center gap-3">
                                    <img src={item.img} alt={item.name} className="w-10 h-10 object-cover" />
                                    <Link
                                        to={item.href}
                                        className="hover:text-[#08b35f] text-gray-600 font-semibold text-[15px] block"
                                        onClick={closeMenu} // Close menu on click
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>

                    {/* Contact HCM */}
                    {contactHCM.map((item) => (
                        <li key={item.name} className='max-lg:border-b max-lg:px-3 max-lg:py-3'>
                            <Link
                                to={item.href}
                                className={`hover:text-[#08b35f] ${item.current ? 'text-[#08b35f]' : 'text-gray-600'} font-semibold block text-[15px]`}
                                onClick={closeMenu} // Close menu on click
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
